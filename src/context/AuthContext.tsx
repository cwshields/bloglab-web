import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest } from "../axios/authApi";

const AUTH_STORAGE_KEY = "bloglab-auth-user";
const TOKEN_STORAGE_KEY = "bloglab-auth-token";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function readStoredUser(): User | null {
  const stored = localStorage.getItem(AUTH_STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}

function persistSession(user: User, token: string) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
}

function clearSession() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  localStorage.removeItem(TOKEN_STORAGE_KEY);
}

function errorMessage(err: unknown): string {
  const axiosError = err as { response?: { data?: { message?: string } } };
  return (
    axiosError.response?.data?.message ??
    "Something went wrong. Please try again."
  );
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(readStoredUser);

  const login: AuthContextValue["login"] = async (identifier, password) => {
    try {
      const { user: loggedInUser, token } = await loginRequest(
        identifier,
        password,
      );
      setUser(loggedInUser);
      persistSession(loggedInUser, token);
      return null;
    } catch (err) {
      return errorMessage(err);
    }
  };

  const signup: AuthContextValue["signup"] = async (data) => {
    if (data.password1 !== data.password2) {
      return "Passwords do not match.";
    }
    if (!data.agree) {
      return "You must agree to the Terms & Conditions.";
    }
    try {
      const { user: newUser, token } = await registerRequest({
        email: data.email,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password1,
      });
      setUser(newUser);
      persistSession(newUser, token);
      return null;
    } catch (err) {
      return errorMessage(err);
    }
  };

  const logout = () => {
    setUser(null);
    clearSession();
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
