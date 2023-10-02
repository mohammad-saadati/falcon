"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const SigninButton = () => {
  const { data: session, status } = useSession();

  if (session && session.user) {
    return <button onClick={() => signOut()}>signOut</button>;
  }
  return <button onClick={() => signIn()}>signIn</button>;
  // return <Link href="/auth/signin">Login</Link>;
};

export default SigninButton;
