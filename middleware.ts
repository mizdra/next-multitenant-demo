import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function getTenantNameFromRequest(req: NextRequest): string | null {
  const host = req.headers.get('host')
  if (!host) return null
  // Host: `tenant1.localtest.me`
  const match = host.match(/^(?<tenantName>.+)\.localtest\.me$/)
  if (!match || !match.groups || !match.groups.tenantName) return null
  if (match.groups.tenantName === 'tenant1' || match.groups.tenantName === 'tenant2' || match.groups.tenantName === 'tenant3') {
    return match.groups.tenantName
  }
  return null
}

export function middleware(req: NextRequest) {
  const tenantName = getTenantNameFromRequest(req)
  if (!tenantName) {
    return NextResponse.json({ error: 'Invalid tenant' }, { status: 400 })
  }
  // Render page with `app/[tenantName]/...`
  const newPath = `/${tenantName}${req.nextUrl.pathname}`
  return NextResponse.rewrite(new URL(newPath, req.url))
}
