import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";
export async function middleware(req: NextRequest, res: NextResponse) {
 

  //get the header from the NextApiRequest
  const bearerToken = req.headers.get("authorization")as string;
  //if the header in there(the key header)
  if (!bearerToken) {
   return new NextResponse(
      JSON.stringify({errorMessage:"Unauthorized request"}),{status:401}
    )
    };
    
  //split the token from the bearerToken token
  const token = bearerToken.split(" ")[1];

  if (!token) {
   return new NextResponse(
     JSON.stringify({ errorMessage: "Unauthorized request" }),
     { status: 401 }
   );
  }
  //if we have token let's verify it
  //GRAB THE SECRET TOKEN TO IDENTIFY THE TOKEN
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized request" }),
      { status: 401 }
    );
  }
}
//just protect the auth route not all pages
export const config = {
  matcher: ["/api/auth/me"],
};
