import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/utilities/auth";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phoneNumber: {
          label: "phoneNumber",
          type: "phoneNumber",
          placeholder: "phoneNumber",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        try {
          const response = await login(
            credentials.phoneNumber,
            credentials.password
          );
          return {};
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signIn",
    signUp: "/auth/signup",
  },
};
