import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth/next";
import VK from "next-auth/providers/vk";

export const authOptions = {
  providers: [
    VK({
      clientId: process.env.VK_ID!,
      clientSecret: process.env.VKAUTH_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
};

const handler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, authOptions);

export { handler as GET, handler as POST };
