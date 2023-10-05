//identify users with json Token

import { NextApiRequest, NextApiResponse } from "next";

import jwt from 'jsonwebtoken'
import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

export default async function handler(req:NextApiRequest,res:NextApiResponse) {
  //split the token from the bearerToken token
  const bearerToken = req.headers["authorization"] as string;
  const token = bearerToken.split(" ")[1];

  //decode the verified token
  const payload = jwt.decode(token) as { email: string };
  if (!payload.email) {
    return res.status(401).json({
      errorMessage: "Unauthorized request",
    });
  }
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    //just select to return certain values
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      city: true,
      phone: true,
    },
  });
  return res.json({ user });
}
