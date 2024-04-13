import axios from "axios";

const BASE_URL = "http://soaf:3000";

export const axiosBase = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
