"use client"
import axios from 'axios';
// LoginFrom.js
/* use client */
import React, { useContext, useState } from 'react';
import { useRouter } from "next/navigation";
import { UserContext } from "../../context";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [state, setState] = useContext(UserContext);

  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      // Perform login logic (e.g., send data to the server)
      const { data } = await axios.post("/login", {
        password,
        email
      })
      setState({
        user: data.user,
        token: data.token,
      });
      // save in local storage
      window.localStorage.setItem("auth", JSON.stringify(data));
      router.push("/");
    } catch (error) {
      console.log("error")
    }


  };
  if (state && state.token) router.push("/");


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required />
          <div className="invalid-feedback">
            Please enter a name.
          </div>
        </div>
        {/*  */}
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Password:</label>
          <input type="text"
            className="form-control"
            placeholder="Enter your email"
            value={password}
            onChange={handlePasswordChange}
            required />
          <div className="invalid-feedback">
            Please enter Your Password.
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

