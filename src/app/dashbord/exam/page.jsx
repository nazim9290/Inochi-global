"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import Examlist from "@/app/component/Examlist";

const Page = () => {
    return (
        <>
      <div className="">
      <SideNavbar />
      <div className="" style={{ marginLeft: 'auto' }}>
        <Examlist />
      </div>
    </div>
    <Foter/>
    </>
    );
};

export default Page;
