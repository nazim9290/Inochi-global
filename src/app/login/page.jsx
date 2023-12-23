"use client"
import { useRouter } from "next/navigation";
import { UserContext } from "../component/router/UserRoute";

import NavBar from "../component/navbar";
import Subsscribe from '../component/subscribe'
import TopBanner from "../component/TopBanner";
import Fotter from '../component/Foter';
import logo from "../../../public/imgages/1.jpg";
import { useState } from "react";
import MainBanner from "../component/MainBanner";
import ContactForm from "../component/ContactForm";
import LoginFrom from "../component/LoginFrom.jsx"

const Login = () => {
  return (
    <div>
      <NavBar />
      <MainBanner title="Login" />
      <LoginFrom />
      <Subsscribe />
      <Fotter />

    </div>
  );
}

export default Login;
