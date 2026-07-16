import axios from "axios";

export const API_BASE_URL =
  "https://zea1btt963.execute-api.eu-west-1.amazonaws.com/dev/";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});
