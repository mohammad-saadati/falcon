import axios from "@/utilities/axios";

export const login = async (phoneNumber, password) => {
  try {
    const res = await axios.post("/user/login", {
      phone_number: phoneNumber,
      password: password,
    });

    console.log("login = async (phoneNumber, password)", res);
  } catch (error) {}
};
