//identify users with json Token

import { NextApiRequest, NextApiResponse } from "next";
import * as jose from 'jose'

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
        errorMessage: "Unauthorized request (no token) ",
      });
    }
//if we have token let's verify it
    //GRAB THE SECRET TOKEN TO IDENTIFY THE TOKEN
    const secret = new TextEncoder().encode(process.env.JWT_SECRET) 
    try {
       await jose.jwtVerify(token,secret) 
    } catch (error) {
        return res.status(401).json({
        errorMessage: "Unauthorized request (token invalid) ",
      })
    }
    return res.json({ me: 'sherif' })
}
