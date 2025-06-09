"use client";
import { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: "",
  });

  const router = useRouter();

  // API base URL - from .env
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const auth = JSON.parse(window.localStorage.getItem("auth"));
    if (auth) {
      setState(auth);
    }
  }, []);

  useEffect(() => {
    const token = state.token;
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    // Set base URL globally (optional but useful)
    axios.defaults.baseURL = API_BASE_URL;

    // Axios interceptors
    const reqInterceptor = axios.interceptors.request.use((request) => {
      if (request.method?.toUpperCase() === "PUT") {
        console.log("Starting PUT Request", request);
      }
      return request;
    });

    const resInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const res = error.response;
        if (res?.status === 401 && !res.config?.__isRetryRequest) {
          setState({ user: {}, token: "" });
          window.localStorage.removeItem("auth");
          router.push("/login");
        }
        return Promise.reject(error);
      }
    );

    // Clean up interceptors when component unmounts
    return () => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    };
  }, [state.token]);

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
