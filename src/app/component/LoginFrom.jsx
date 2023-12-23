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

  const handleSubmit = async(e) => {
    try {
        e.preventDefault();
    setLoading(true);

    // Perform login logic (e.g., send data to the server)
     const {data}=await axios.post("/login",{
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
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

