import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth/next";
import VK from "next-auth/providers/vk";
import { NextRequest, NextResponse } from "next/server";

export const authOptions = {
  providers: [
    VK({
      clientId: process.env.VK_ID!,
      clientSecret: process.env.VKAUTH_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
};

const handler = (req: NextRequest, res: NextResponse) =>
  NextAuth(
    req as unknown as NextApiRequest,
    res as unknown as NextApiResponse,
    authOptions
  );

export { handler as GET, handler as POST };
