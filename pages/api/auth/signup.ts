import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // EXTRACT THE BODY
  const body = req.body;
  const responseData = {
    hello: body,
  };
  if (req.method === "POST") {
    res.status(200).json(responseData);
  }
}
