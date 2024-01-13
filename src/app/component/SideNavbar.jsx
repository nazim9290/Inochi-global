"use client"
import React, { useEffect ,useContext, useState} from 'react'
import Link from 'next/link';
import "./Sidebar.css";
import logo from "../../../public/imgages/LOGO.png"
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { UserContext } from "../../context";

const SideNavbar = () => {
  const pathname = usePathname();
  const [state, setState] = useContext(UserContext);
  const [name, setName] = useState("");
  const [image, setImage] = useState({});

  useEffect(() => {
    if (state && state.user) {
        setName(state.user.name)
        setImage(state.user.image)

    }
}, [state]);
// console.log(image)
  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <>
      <div className='sidebar'>
        <div className='img-container text-center'>
{image ?
(
  <>
  <Image src={image.url} width={30} height={30} alt="admin avatar" />

  </>
):(
<>
<Image src={logo} width={30} height={30} alt="admin avatar" />

</>
)
}
        </div>
        <h6 className=' text-center'>Rafiq Islam</h6>

        <p className="text-center">Dhaka, Banglaseh</p>
        <div className='sidebar-container'>
          <div className={`sidebar-item ${isActive('/dashbord') ? 'active' : ''}`}>
            <Link href="/dashbord">Home</Link>
          </div>
          <div className={`sidebar-item ${isActive('/dashbord/profile') ? 'active' : ''}`}>
            <Link href="/dashbord/profile">Profile</Link>
          </div>
          <div className={`sidebar-item ${isActive('/dashbord/classes') ? 'active' : ''}`}>
            <Link href="/dashbord/classes">My Classes</Link>
          </div>
          <div className={`sidebar-item ${isActive('/dashbord/blog') ? 'active' : ''}`}>
            <Link href="/dashbord/blog">Create Blog</Link>
          </div>
          <div className={`sidebar-item ${isActive('/dashbord/audio') ? 'active' : ''}`}>
            <Link href="/dashbord/audio">Audio</Link>
          </div>
           <div className={`sidebar-item ${isActive('/dashbord/reviewcreate') ? 'active' : ''}`}>
            <Link href="/dashbord/reviewcreate">Give Us Your FeedBack</Link>
          </div>
          <div className={`sidebar-item ${isActive('/dashbord/address') ? 'active' : ''}`}>
            <Link href="/dashbord/address">Address</Link>
          </div>
          <div className={`sidebar-item ${isActive('/dashbord/account') ? 'active' : ''}`}>
            <Link href="/dashbord/account">Accounts</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNavbar;
