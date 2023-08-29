import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: {
          label: "Username",
          type: "username",
          placeholder: "username",
        },
        phone_number: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        try {
          const response = await fetch(
            "https://didanist.com/api/v1_0/user/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(credentials),
            }
          );

          const data = await response.json();

          if (response.ok && data.success) {
            return {};
          } else {
            return { msb: "error happened" };
          }
        } catch (err) {
          return { err };
        }
      },
    }),
  ],
  pages: {},
};
