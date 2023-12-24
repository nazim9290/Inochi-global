"use client"
import React, { useEffect } from 'react'
import Link from 'next/link';
import "./Sidebar.css";
import logo from "../../../public/imgages/LOGO.png"
import Image from 'next/image';
import { usePathname } from 'next/navigation'

const SideNavbar = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    console.log(pathname, "test");
    return pathname === path;
  };

  return (
    <>
      <div className='sidebar'>
        <div className='img-container text-center'>
          <Image src={logo} alt="admin avatar" />
        </div>
        <h6 className=' text-center'>Rafiq Islam</h6>

        <p className="text-center">Dhaka, Banglaseh</p>
        <div className='sidebar-container'>
          <div className={`sidebar-item ${isActive('/dashbord') ? 'active' : ''}`}>
            <Link href="/dashbord">Home</Link>
          </div>
          <div className={`sidebar-item ${isActive('/student') ? 'active' : ''}`}>
            <Link href="/student">Students</Link>
          </div>
          <div className={`sidebar-item ${isActive('/dashbord/blog') ? 'active' : ''}`}>
            <Link href="/dashbord/blog">Create Blog</Link>
          </div>
          <div className={`sidebar-item ${isActive('/dashbord/account') ? 'active' : ''}`}>
            <Link href="/dashbord/account">Accounts</Link>
          </div>
          {/* Add similar checks for other links */}
        </div>
      </div>
    </>
  );
}

export default SideNavbar;
