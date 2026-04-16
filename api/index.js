import app from "../app";

export default function handler(req, res) {
  const origin = req.headers.origin;

  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  return app(req, res);
}
