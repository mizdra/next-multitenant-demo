import {ClientComponent} from '@/app/ClientComponent';

export default function Home({ searchParams }: { searchParams: { tenantName: string } } ) {
  return (
    <main>
      <h2>Server Component: {searchParams.tenantName}</h2>
      <ClientComponent />
    </main>
  );
}
