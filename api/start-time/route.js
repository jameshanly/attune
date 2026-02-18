export async function GET() {

  const now = Date.now();

  const interval = 60000; // 1 minute

  const startTime =
    Math.ceil(now / interval) * interval + 10000;

  return Response.json({
    serverNow: now,
    startTime: startTime
  });
}