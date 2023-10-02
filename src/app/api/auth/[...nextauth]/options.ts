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
      async authorize(credentials: UserCredentialsConfig) {
        const res = await login(credentials.phoneNumber, credentials.password);

        console.log(res.success, res);

        const user = {
          name: res.result.user.name,
          image: res.result.token.token_type,
          email: res.result.user.avatar,
          id: res.result.token.access_token,
          token_type: res.result.token.token_type,
          test: res.result.token.token_type,
        };

        if (res.success) return user;

        if (!res.success) {
          console.log(res);
          return null;
        }

        const { response } = res;

        if (response?.status === 404) {
          console.log(
            "authorize///////",
            response.status,
            response.statusText,
            response
          );
          return null;
        }

        console.log("authorize///////", res, response);
        // return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signIn",
  },
};
