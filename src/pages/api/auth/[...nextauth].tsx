import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      // @ts-ignore
      clientId: process.env.GITHUB_ID,
      // @ts-ignore
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  secret: "760kb/mVEPKQRF0EX0d3llbgHwA9JIyLAmyhuFtv9gc",
};
export default NextAuth(authOptions);
