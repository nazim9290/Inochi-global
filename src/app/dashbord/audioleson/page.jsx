"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import FullLeasonDesh from "@/app/component/FullLeasonDesh";
const Page = () => {
    return (
        <>
      <div className="">
      <SideNavbar />
      <div className="" style={{ marginLeft: 'auto' }}>
    <FullLeasonDesh/>
      </div>
    </div>
    <Foter/>
    </>
    );
};
// audioleson
export default Page;
