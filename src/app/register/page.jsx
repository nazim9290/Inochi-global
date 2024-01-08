"use client"

import NavBar from "../component/navbar";
import Subsscribe from '../component/subscribe'
import TopBanner from "../component/TopBanner";
import Fotter from '../component/Foter';
import logo from "../../../public/imgages/1.jpg";
import { useState } from "react";
import MainBanner from "../component/MainBanner";
import ContactForm from "../component/ContactForm";

import RegistrationForm from "../component/registrationForm"
const Register = () => {
  return (
    <div>
      <NavBar />
      <MainBanner title="Register" />

<RegistrationForm/>

      {/* from end */}
      <Subsscribe />
      <Fotter />

    </div>
  );
}

export default Register;
