// "use client"
// import SideNavbar from "@/app/component/SideNavbar";
// import Foter from "@/app/component/Foter"

// const Dashbord = () => {
//   return (
//     <>
//       <div className="d-flex">
//       <SideNavbar />
//       <div className="w-75" style={{ marginLeft: 'auto' }}>
//          <p>Home page for tes  ......</p>     
//       </div>
//     </div>
//     <Foter />
//     </>
//   );
// };

// export default Dashbord;
"use client"
import SideNavbar from "@/app/component/SideNavbar";
import BasicExample from "@/app/component/SideDropNav"
import Foter from "@/app/component/Foter";
import React, { useEffect, useContext, useState } from 'react'
import Link from 'next/link';
import { useRouter, usePathname } from "next/navigation";
import logo from "../../../public/imgages/LOGO.png"
import Image from 'next/image';
import { UserContext } from "../../context";

const Dashbord = () => {
  const router = useRouter();


const pathname = usePathname();
const [state, setState] = useContext(UserContext);
const [name, setName] = useState("");
const [image, setImage] = useState({});
useEffect(() => {
    if (state && state.user) {
      setName(state.user.name)
      setImage(state.user.image)

    } else {
      router.push("/login")
    }
  }, [state, router]);
  const isActive = (path) => {
    return pathname === path;
  };
  return (
    <>
        <div className="">
          <SideNavbar />
          <div className="" style={{ marginLeft: 'auto' }}>
            <h6 className=' text-center'>Hello {name}</h6>
          </div>
        </div>
        <div className="d-flex">
          <div className="w-100" style={{ marginTop: 'auto'}}>
 
 <Foter/>
           </div>
        </div>
    </>
  );
};

export default Dashbord;
