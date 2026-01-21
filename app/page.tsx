export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Velto Thank You Page</h1>
        <p className="text-muted-foreground">
          Navigate to <code className="bg-muted px-2 py-1 rounded">/booked/[repSlug]</code> to see the confirmation page
        </p>
      </div>
    </main>
  );
}
