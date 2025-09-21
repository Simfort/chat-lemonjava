import NextAuth, { NextAuthConfig } from "next-auth";
import VK from "next-auth/providers/vk";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET, // Добавьте эту строку
  providers: [
    VK({
      clientId: process.env.VK_ID,
      clientSecret: process.env.VKAUTH_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  pages: {
    signIn: "/", // Укажите ваш путь для входа
    error: "/api/auth/error",
  },
} satisfies NextAuthConfig;

export default NextAuth(authOptions);
