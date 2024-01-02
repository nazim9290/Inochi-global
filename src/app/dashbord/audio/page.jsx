"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import Totalsection from "@/app/component/Totalsection";
const Classes = () => {
    return (
        <>
      <div className="d-flex">
      <SideNavbar />
      <div className="w-75" style={{ marginLeft: 'auto' }}>
<Totalsection/>
      </div>
    </div>
    <Foter/>
    </>
    );
};

export default Classes;
