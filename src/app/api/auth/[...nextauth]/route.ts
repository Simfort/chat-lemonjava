import NextAuth from "next-auth";
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

export default NextAuth(authOptions);
