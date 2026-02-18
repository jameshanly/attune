export async function GET() {

  const now = Date.now();

  // start every 60 seconds on the next minute boundary
  const interval = 60000;

  const startTime =
    Math.ceil(now / interval) * interval + 10000;
    // +10s safety buffer

  return Response.json({
    serverNow: now,
    startTime: startTime
  });
}