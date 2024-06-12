export default function Home({ searchParams }: { searchParams: { tenantName: string } } ) {
  return (
    <main>
      <h1>{searchParams.tenantName}</h1>
    </main>
  );
}
