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
  // The query string added in the middleware takes precedence over the query string attached to the request URL.
  // Therefore, the following line is not necessary.
  if (req.nextUrl.searchParams.has('tenantName')) {
    return NextResponse.json({ error: 'tenantName query string is not allowed' }, { status: 400 })
  }

  const tenantName = getTenantNameFromRequest(req)
  if (!tenantName) {
    return NextResponse.json({ error: 'Invalid tenant' }, { status: 400 })
  }
  // Add a query string to request object
  req.nextUrl.searchParams.set('tenantName', tenantName)
  return NextResponse.rewrite(req.nextUrl)
}
