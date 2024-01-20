"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import Examlist from "@/app/component/Examlist";

const Page = () => {
    return (
        <>
      <div className="d-flex">
      <SideNavbar />
      <div className="w-75" style={{ marginLeft: 'auto' }}>
        <Examlist />
      </div>
    </div>
    <Foter/>
    </>
    );
};

export default Page;
