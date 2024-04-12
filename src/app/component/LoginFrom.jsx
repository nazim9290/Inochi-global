"use client"
import axios from 'axios';
// LoginFrom.js
/* use client */
import React, { useContext, useState } from 'react';
import { useRouter } from "next/navigation";
import { UserContext } from "../../context";

const LoginForm = () => {
  const [phone, setPhone] = useState('');
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
// console.log(phone,password)
      // Perform login logic (e.g., send data to the server)
      const { data } = await axios.post("/api/login", {
        password,
        phone
      })
      console.log(data)
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
    <h3 className="text-info text-center my-5" style={{ marginTop: '7%' }}><b className="my-5">Log in</b></h3>
    <div className="wrapper1 card border border-white">
        <form  className="needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Phone</label>
               <input
                        type="name"
                        className="form-control"
                        placeholder="Enter your Mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                <div className="invalid-feedback">
                    Please enter a phone.
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />
                <div className="invalid-feedback">
                    Please enter a password.
                </div>
            </div>
            <button type="submit" className="btn btn-outline-info w-100">Log in</button>
        </form>
    </div>
</div>
  );
};

export default LoginForm;

