"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import EditProfile from "@/app/component/EditProfile";
const Address = () => {
    return (
        <>
      <div className="">
      <SideNavbar />
      <div className="" style={{ marginLeft: 'auto' }}>
       <EditProfile/>
      </div>
    </div>
    <Foter/>
    </>
    );
};

export default Address;
