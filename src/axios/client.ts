import axios from "axios";
import { configure } from "axios-hooks";

export const API_BASE_URL =
  "https://zea1btt963.execute-api.eu-west-1.amazonaws.com/dev/";

export const TOKEN_STORAGE_KEY = "bloglab-auth-token";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// axios-hooks (used by useGetData) defaults to the global axios instance,
// which skips the Authorization interceptor above. Without this, the API
// never sees who's viewing, so viewer-dependent fields like a comment's
// isOwnComment always come back false.
configure({ axios: apiClient });
