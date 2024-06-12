export default function Home({ params }: { params: { tenantName: string } }) {
  return (
    <main>
      <h1>{params.tenantName}</h1>
    </main>
  );
}
