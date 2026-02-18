export default function handler(req, res) {
  const now = Date.now();
  const interval = 60000;
  const startTime = Math.ceil(now / interval) * interval + 10000;

  res.status(200).json({
    serverNow: now,
    startTime: startTime
  });
}
