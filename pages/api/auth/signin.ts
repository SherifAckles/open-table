import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import * as jose from "jose";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // define errors if there are any
    const errors: string[] = [];
    // Extract to validate the body
    const { email, password } = req.body;

    const validationScheme = [
      {
        valid: validator.isEmail(email),

        //    provide the error msg
        errorMessage: "Email is invalid",
      },
      {
        valid: validator.isLength(password, {
          min: 1,
        }),

        //    provide the error msg
        errorMessage: "Password is invalid",
      },
    ];
    validationScheme.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });
    if (errors.length) {
      return res.status(400).json({ errorMessage: errors[0] });
    }
    //   grab the user and check if he has an account
    const userWithEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    //   if the user doesn't exist in the db return unauthorized http status 404
    if (!userWithEmail) {
      return res
        .status(401)
        .json({ errorMessage: "Email or Password is invalid" });
    }
    //   compare the pass the user gave us with the hashed pass
    const isMatch = await bcrypt.compare(password, userWithEmail.password);
    //if there are different
    if (!isMatch) {
      return res
        .status(401)
        .json({ errorMessage: "Email or Password is invalid" });
    }

    //Create the JWT
    const alg = "HS256";
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new jose.SignJWT({ email: userWithEmail.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);
    return res.status(200).json({
      token,
    });
  }
  return res.status(404).json("Unknown endpoint");
}
