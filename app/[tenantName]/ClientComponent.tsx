'use client';

import { useParams } from "next/navigation";

function useTenantName() {
  const params = useParams<{ tenantName: string }>()
  return params.tenantName
}

export function ClientComponent() {
  const tenantName = useTenantName()
  return <h2>Client Component: {tenantName}</h2>;
}
