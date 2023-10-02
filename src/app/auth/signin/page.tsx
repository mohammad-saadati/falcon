import Login from "@/components/Forms/Login";
import CheckExist from "@/components/Forms/CheckExist";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

export default function SignIn(props: Props) {
  return (
    <>
      <Login
        error={props.searchParams?.error}
        callbackUrl={props.searchParams?.callbackUrl}
      />
    </>
  );
}
