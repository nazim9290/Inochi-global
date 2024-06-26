"use client"
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useContext, useState } from 'react'
import Link from 'next/link';
import { useRouter, usePathname } from "next/navigation";
import logo from "../../../public/imgages/LOGO.png"
import Image from 'next/image';
import { UserContext } from "../../context";

function SideNavDrop() {
    const router = useRouter();


  const pathname = usePathname();
  const [state, setState] = useContext(UserContext);
  const [name, setName] = useState("");
  const [image, setImage] = useState({});

  const logout = () => {
    router.push("/login");

    window.localStorage.removeItem("auth");

    setState({ user: {}, token: "" });
  };
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
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        DashBoard
        
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
        <div className='img-container text-center'>
          {image ?
            (
              <>
                <Image src={image.url} width={30} height={30} alt="admin avatar" />

              </>
            ) : (
              <>
                <Image src={logo} width={30} height={30} alt="admin avatar" />

              </>
            )
          }
          </div>
          <h6 className=' text-center'>{name}</h6>
          <p className="text-center">Dhaka, Banglaseh</p>
        </Dropdown.Item>
        <Dropdown.Item>
        <div className={`sidebar-item ${isActive('/dashbord') ? 'active' : ''}`}>
            <Link href="/dashbord">Home</Link>
          </div>
        </Dropdown.Item>

    
        <Dropdown.Item>
        <div className={`sidebar-item ${isActive('/dashbord/profile') ? 'active' : ''}`}>
            <Link href="/dashbord/profile">Profile</Link>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>

        <div className={`sidebar-item ${isActive('/dashbord/classes') ? 'active' : ''}`}>
            <Link href="/dashbord/classes">My Classes</Link>
          </div>
          </Dropdown.Item>
          <Dropdown.Item>
          <div className={`sidebar-item ${isActive('/dashbord/blog') ? 'active' : ''}`}>
            <Link href="/dashbord/blog">Create Blog</Link>
          </div>
          </Dropdown.Item>
          <Dropdown.Item>

          <div className={`sidebar-item ${isActive('/dashbord/exam') ? 'active' : ''}`}>
            <Link href="/dashbord/exam">Exam</Link>
          </div>
          </Dropdown.Item>
          <Dropdown.Item>

          <div className={`sidebar-item ${isActive('/dashbord/audioleson') ? 'active' : ''}`}>
            <Link href="/dashbord/audioleson">Audio Leson</Link>
          </div>
          </Dropdown.Item>
          <Dropdown.Item>

          <div className={`sidebar-item ${isActive('/dashbord/reviewcreate') ? 'active' : ''}`}>
            <Link href="/dashbord/reviewcreate">Give Us Your FeedBack</Link>
          </div>
          </Dropdown.Item>
          <Dropdown.Item>
          <div className="sidebar-item ">
            <a onClick={logout}>
              Logout
            </a>
          </div>
          </Dropdown.Item>
        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SideNavDrop;