import axios from "axios";
import { APIS } from "../utils/constant";

export async function getAllCustomer() {
  try {
    const res = await axios.get(APIS.GET_ALL_CUSTOMERS);
    console.log(res.data);

    return;
  } catch (error) {
    console.error(error);
  }
}


