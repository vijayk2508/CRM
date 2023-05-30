// Function to get the cookie value by name

import { setCookie } from "../utils/constant";
import Service from "./service";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<any> {
  try {
    const response = await Service.post("/user/login", { email, password });
    console.log(response.data);

    const { token } = response?.data?.data;

    // Store the token in a cookie
    setCookie("userToken", token); // Assuming you have a function to set the cookie

    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
}
