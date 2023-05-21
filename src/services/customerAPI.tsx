import axios from "axios";
import { APIS } from "../utils/constant";
import { iCustomer } from "../interfaces/iCustomer";

export async function getAllCustomer(): Promise<iCustomer[]> {
  try {
    const res = await axios.get<iCustomer[]>(APIS.CUSTOMERS);

    let data: iCustomer[] = res.data;
    data = data.sort(
      (a: iCustomer, b: iCustomer) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch customer data');
  }
}

// Function to save a new customer

export const saveCustomer = async (customerData: any) => {
  try {
    const res = await axios.post(APIS.CUSTOMERS, customerData);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Function to update a customer
export const updateCustomer = async (customerId: string, customerData: any) => {
  try {
    const res: any = axios.put(`${APIS.CUSTOMERS}/${customerId}`, customerData);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Function to delete a customer
export const deleteCustomer = async (customerId: string) => {
  try {
    const res: any = axios.delete(`${APIS.CUSTOMERS}/${customerId}`);
    console.log(res.data);
    return res.data;
    // return axios.delete(`/api/customers/${customerId}`);
  } catch (error) {
    console.log(error);
  }
};
