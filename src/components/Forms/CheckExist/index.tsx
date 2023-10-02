"use client";
import { useState, useRef } from "react";
import useSWR from "swr";
import axios from "@/utilities/axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function index() {
  const notify = (msg) => toast(msg);
  const [checkExistAPI, setCheckexistAPI] = useState<null | string>();
  const prevPhoneRef = useRef();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const phone = watch("phone-number");

  const fetcher = () =>
    axios
      .post(checkExistAPI, { phone_number: phone })
      .then((res) => {
        const { data } = res;

        // console.log('data', data);

        // console.log('*1*1*1*1*', data.message);

        if (!data.success) {
          notify(data.message);
        }
      })
      .catch((error) => {
        notify(error.message);
        // console.log("error *******", error.message, error);
      });

  // const { data, error, isLoading } = useSWR(
  //   () => (checkExistAPI ? [phone] : null),
  //   fetcher
  // );
  const { data, error, isLoading, mutate } = useSWR(checkExistAPI, fetcher);

  const handleForm = (data) => {
    setCheckexistAPI("/v1_0/user/check_exist");

    if (prevPhoneRef.current !== phone) mutate();

    prevPhoneRef.current = phone;

    console.log(data, error, isLoading);
  };
  const phoneValidation = (value) => {
    const isValidPhoneNumber = /^\d{10}$/.test(value); // Check if it's exactly 10 digits
    return isValidPhoneNumber || "شماره موبایل باید دقیقاً 10 رقم باشد";
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleForm)}>
        <label className="block">شماره خود را وارد کنید</label>
        <input
          value={phone}
          className="border"
          type="text"
          placeholder="9058938839"
          {...register("phone-number", {
            required: "شماره موبایل را وارد کنید",
            minLength: {
              value: 10,
              message: "شماره موبایل باید دقیقا 10 رقم باشد.",
            },
            maxLength: {
              value: 10,
              message: "شماره موبایل باید دقیقا 10 رقم باشد.",
            },
            validate: phoneValidation,
          })}
        />
        {errors["phone-number"] && (
          <p role="alert">{errors["phone-number"].message}</p>
        )}
        {isLoading ? <div>is loading</div> : null}
        <button className="block" type="submit">
          ورود/ثبت نام
        </button>
      </form>
      <ToastContainer rtl />
    </>
  );
}
