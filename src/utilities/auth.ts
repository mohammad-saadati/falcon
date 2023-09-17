import axios from "@/utilities/axios";

export const login = async (phoneNumber: string, password: string) => {
  try {
    const res = await axios.post("/user/login", {
      phone_number: phoneNumber,
      password: password,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
