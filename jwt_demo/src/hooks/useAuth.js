import { useCallback, useState } from "react";
import { login, logout, loggedIn, getData } from "../../apiFacade";

export function useAuth() {
  const [username, setUsername] = useState("Guest");

  const [protectedData, setProtectedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signIn = useCallback(async (username, password) => {
    setLoading(true);
    setError(null);
    setProtectedData(null);

    try {
      const username = await login(username, password);
      setUsername(username);

      const token = localStorage.getItem("jwtToken");
      if (!token) throw new Error("Login succeeded but no token was returned.");

      const data = await getData();
      setProtectedData(data);
      return true;
    } catch (err) {
      const message = err?.error?.message || err?.message || "Login failed";
      setError(message);
      setUsername(null);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(() => {
    logout();
    setUsername(null);
    setError(null);
    setProtectedData(null);
  }, []);

  const fetchProtectedData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getData();
      setProtectedData(data);
      return data;
    } catch (err) {
      const message = err?.error?.message || err?.error || "You are not authorized";
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    username,
    setUsername,
    protectedData,
    loading,
    error,
    isAuthenticated: loggedIn(),
    signIn,
    signOut,
    fetchProtectedData,
  };
}
