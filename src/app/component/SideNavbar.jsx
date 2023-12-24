
import React from 'react'
import Link from 'next/link';
import "./Sidebar.css";
import logo from "../../../public/imgages/LOGO.png"
import Image from 'next/image';

const SideNavbar = () => {
  return (
      <>
        <div className='sidebar'>
            <div className='img-container text-center'>
                <Image src={logo} alt="admin avatar" />
            </div>
            <p>Rafiq Islam</p>
            <p>Dhaka,Banglaseh</p>
            <h6 className='mt-3'>Dashboard</h6>
            <div className='sidebar-container'>
                <div>
                    <Link href="/dashbord">Dashboard</Link>
                </div>
                <div>
                    <Link href="">Teacher</Link>
                </div>
                <div>
                    <Link href="/dashbord/blog">Blog</Link>
                </div>
                <div>
                    <Link href="/dashbord/account">Account</Link>
                </div>
                
                <div>
                    <Link href="/admin/dashboard/create/question">Create Question</Link>
                </div>
                {/* View Question */}
                <div>
                    <Link href="/admin/dashboard/question/list">All Question</Link>
                </div>
            </div>
        </div>
      </>
  )
}

export default SideNavbar