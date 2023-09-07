//identify users with json Token

import { NextApiRequest, NextApiResponse } from "next";
import * as jose from 'jose'
import jwt from 'jsonwebtoken'
import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

export default async function handler(req:NextApiRequest,res:NextApiResponse) {

//get the header from the NextApiRequest
    const bearerToken = req.headers['authorization'] as string
    //if the header in there(the key header)
    if (!bearerToken) {
      return res.status(401).json({
        errorMessage: "Unauthorized request (no bearer token) ",
      });
    }
    //split the token from the bearerToken token
    const token = bearerToken.split(" ")[1]

    if (!token) {
      return res.status(401).json({
        errorMessage: "Unauthorized request",
      });
    }
//if we have token let's verify it
    //GRAB THE SECRET TOKEN TO IDENTIFY THE TOKEN
    const secret = new TextEncoder().encode(process.env.JWT_SECRET) 
    try {
       await jose.jwtVerify(token,secret) 
    } catch (error) {
        return res.status(401).json({
        errorMessage: "Unauthorized request",
      })
  }
  
  //decode the verified token
  const payload = jwt.decode(token) as { email: string }
  if (!payload.email) {
      return res.status(401).json({
        errorMessage: "Unauthorized request",
      });
  }
  const user=await prisma.user.findUnique({
    where:{
      email:payload.email
    },
    //just select to return certain values
    select: {
      id: true,
      first_name:true,
      last_name:true,
      email:true,
      city:true,
      phone:true
    }
  })
   return res.json({user})
}
