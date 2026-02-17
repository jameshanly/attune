export default function handler(req, res) {

  // how far in the future playback should begin
  const LEAD_TIME_MS = 10000; // 10 seconds

  const startTime = Date.now() + LEAD_TIME_MS;

  res.status(200).json({
    startTime: startTime
  });
}
