// Import required modules and libraries
import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";

// Create an instance of PrismaClient for database operations
const prisma = new PrismaClient();

// Define an asynchronous function to handle the API request
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check if the HTTP request method is POST
  if (req.method === "POST") {
    // Extract user data from the request body
    const { firstName, lastName, email, phone, city, password } = req.body;

    // Initialize an array to store validation errors
    const errors: string[] = [];

    // Define a validation schema for user input
    const validationSchema = [
      {
        valid: validator.isLength(firstName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "First name is invalid",
      },
      {
        valid: validator.isLength(lastName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "Last name is invalid",
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is invalid",
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: "Phone number is invalid",
      },
      {
        valid: validator.isLength(city, { min: 1 }),
        errorMessage: "City is invalid",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: "Password is not strong enough",
      },
    ];

    // Iterate through each validation rule in the validation schema
    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage); // Add error messages for invalid inputs
      }
    });

    // If there are validation errors, return the first error found
    if (errors.length) {
      return res.status(400).json({ errorMessage: errors[0] });
    }

    // Check if the email is associated with another account in the database
    const userWithEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userWithEmail) {
      return res
        .status(400)
        .json({ errorMessage: "Email is associated with another account" });
    }

    // Hash the user's password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database with the validated and hashed data
    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        password: hashedPassword,
        city,
        phone,
        email,
      },
    });

    // Create a JSON Web Token (JWT) for user authentication
    const alg = "HS256";
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new jose.SignJWT({ email: user.email })
      .setProtectedHeader({ alg })
      .setExpirationTime("24h")
      .sign(secret);

    // Create and return a successful response with user data
    return res.status(200).json({
      token,
    });
  }

  // If the request method is not POST, return a 404 status for an unknown endpoint
  return res.status(404).json("Unknown endpoint");
}
