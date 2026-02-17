export async function GET() {

  const LEAD_TIME_MS = 10000;

  const now = Date.now();
  const startTime = now + LEAD_TIME_MS;

  return new Response(
    JSON.stringify({
      startTime: startTime,
      serverNow: now
    }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
}