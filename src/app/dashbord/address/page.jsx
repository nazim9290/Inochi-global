"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import EditProfile from "@/app/component/EditProfile";
const Address = () => {
    return (
        <>
      <div className="d-flex">
      <SideNavbar />
      <div className="w-75" style={{ marginLeft: 'auto' }}>
<EditProfile/>
      </div>
    </div>
    <Foter/>
    </>
    );
};

export default Address;
