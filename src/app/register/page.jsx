"use client"

import NavBar from "../component/navbar";
import Subsscribe from '../component/subscribe'
import TopBanner from "../component/TopBanner";
import Fotter from '../component/Foter';
import logo from "../../../public/imgages/1.jpg";
import { useState } from "react";


const Contact = () => {
const [name,setname]=useState(" ");
  const imgsour = logo
  return (
    <div>
      <NavBar />
      <TopBanner title="Register" imgsour={imgsour} />
      {/* form start */}
     



      {/* from end */}
      <Subsscribe />
      <Fotter />

    </div>
  );
}

export default Contact;
