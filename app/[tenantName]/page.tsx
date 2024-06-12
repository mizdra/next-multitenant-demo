import { ClientComponent } from "./ClientComponent";

export default function Home({ params }: { params: { tenantName: string } }) {
  return (
    <main>
      <h2>{params.tenantName}</h2>
      <ClientComponent />
    </main>
  );
}
