'use client';

import { useSearchParams } from "next/navigation";

function useTenantName() {
  const searchParams = useSearchParams()
  const tenantName = searchParams.get('tenantName')
  if (!tenantName) {
    throw new Error('tenantName is not set')
  }
  return tenantName
}

export function ClientComponent() {
  const tenantName = useTenantName()
  return <h2>Client Component: {tenantName}</h2>;
}
