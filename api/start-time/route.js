export async function GET() {

  const now = Date.now();

  // next minute boundary + safety buffer
  const interval = 60000;

  const startTime =
    Math.ceil(now / interval) * interval + 10000;

  return Response.json({
    serverNow: now,
    startTime: startTime
  });
}