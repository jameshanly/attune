export async function GET() {

  const LEAD_TIME_MS = 10000; // 10 seconds

  const startTime = Date.now() + LEAD_TIME_MS;

  return new Response(
    JSON.stringify({ startTime }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
}
