"use client"
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserContext } from "../../../context";

const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(false);
  const router = useRouter();
  const [state] = useContext(UserContext);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const { data } = await axios.get(`/api/profile`);
        if (data.ok) {
          setOk(true);
        } else {
          router.push("/login");
        }
      } catch (err) {
        console.error("Error fetching current user:", err);
        router.push("/login");
      }
    };

    if (state && state.token) {
      fetchCurrentUser();
    } else {
      // Redirect to login if no token is available
      router.push("/login");
    }
  }, [state,router]);

  useEffect(() => {
    // Trigger the getCurrentUser function after 1 second if the state is still null
    const timer = setTimeout(() => {
      if (process.browser && state === null) {
        fetchCurrentUser();
      }
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [state]);

  return !ok ? <p>Loading ...</p> : <>{children}</>;
};

export default UserRoute;
