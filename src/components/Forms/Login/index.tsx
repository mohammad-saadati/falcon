"use client";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, cssTransition, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// TODO: uninstall it
// import "animate.css";

export default function Login() {
  const { handleSubmit } = useForm();
  const notify = (msg) => toast(msg);

  const handleForm = () => {
    notify("یه چیزی درست نیست");
  };

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit(handleForm)}>
        <label>1</label>
        <input className="border" type="text" />

        <label>2</label>
        <input className="border" type="text" />

        <button type="submit">ورود</button>
      </form>
      <ToastContainer
        rtl
        progressStyle={{ background: "red" }}
        transition={Slide}
      />
    </>
  );
}
