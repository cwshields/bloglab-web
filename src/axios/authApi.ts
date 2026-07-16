import { apiClient } from "./client";

export type AuthResponse = {
  user: User;
  token: string;
};

export type RegisterPayload = {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
};

export async function loginRequest(
  identifier: string,
  password: string,
): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>("/login", {
    identifier,
    password,
  });
  return data;
}

export async function registerRequest(
  payload: RegisterPayload,
): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>("/register", payload);
  return data;
}
