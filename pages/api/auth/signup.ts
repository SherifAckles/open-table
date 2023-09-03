import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // EXTRACT THE BODY
  const { firstName, lastName, email, phone, city, password } = req.body;

  const errors: string[] = [];
  const responseData = {
    hello: "body",
  };

  // Validate the user inputs
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
      errorMessage: "Phone is invalid",
    },
    {
      valid: validator.isLength(city, { min: 1 }),
      errorMessage: "City is invalid",
    },
    {
      valid: validator.isStrongPassword(password),
      errorMessage: "Please create a strong password",
    },
  ];

  // Iterate through each validation rule in the validationSchema
  validationSchema.forEach((check) => {
    // Check if the validation rule's result is not valid (e.g., if the input didn't pass validation)
    if (!check.valid) {
      // If not valid, add the associated error message to the 'errors' array
      errors.push(check.errorMessage);
    }
  });

  // IF THERE IS AN ERROR RETURN JUST THE FIRST ONE FOR NOW
  if (errors.length) {
    return res.status(400).json({ errorMessage: errors[0] });
  }
  // if everything is valid then return the responseData
  if (req.method === "POST") {
    res.status(200).json(responseData);
  }
}
