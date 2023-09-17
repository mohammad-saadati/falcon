"use client";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, cssTransition, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
// TODO: uninstall it
// import "animate.css";

type Props = {
  className?: string;
  callbackUrl?: string;
  error?: string;
};
type Inputs = {
  phone_number: string;
  password: string;
};

const Login = (props: Props) => {
  const { data: session, status } = useSession();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const notify = (msg) => toast(msg);

  useEffect(() => {
    console.log("useEffect", session, status);
  }, [session, status]);

  const onSubmit = async (data) => {
    try {
      const res = await signIn("credentials", {
        phoneNumber: data.phone_number,
        password: data.password,
        redirect: false,
      });

      if (res?.error && res?.error === "CredentialsSignin") {
        console.log("onSubmit", res);
        notify("نام کاربری یا رمز عبور اشتباه است");
      }
    } catch (error) {
      console.log("Login function: ", error);
    }
  };

  return (
    <>
      <div>{JSON.stringify(session)}</div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label>1</label>
        <input
          className="border"
          type="text"
          defaultValue=""
          {...register("phone_number", {
            required: "این فیلد الزامی است",
            pattern: {
              value: /^\d{10}$/,
              message: "شماره همراه باید 10 رقم باشد",
            },
          })}
          onInput={(e) =>
            (e.target.value = e.target.value.replace(/[^0-9]$/g, ""))
          }
        />
        {errors.phone_number && <span>{errors.phone_number.message}</span>}

        <label>2</label>
        <input
          className="border"
          type="text"
          defaultValue=""
          {...register("password", {
            required: "این فیلد الزامی است",
            minLength: {
              value: 8,
              message: "رمزعبور باید حداقل 8 کاراکتر باشد.",
            },
          })}
        />
        {errors.password && (
          <span className="text-xs text-red-400">
            {errors.password.message}
          </span>
        )}

        <button type="submit">ورود</button>
      </form>
      <ToastContainer
        rtl
        progressStyle={{ background: "red" }}
        transition={Slide}
      />
    </>
  );
};

export default Login;
