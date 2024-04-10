"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import FullLeasonDesh from "@/app/component/FullLeasonDesh";
const Page = () => {
    return (
        <>
      <div className="d-flex  sideres">
      <SideNavbar />
      <div className="w-75" style={{ marginLeft: 'auto' }}>
    <FullLeasonDesh/>
      </div>
    </div>
    <Foter/>
    </>
    );
};
// audioleson
export default Page;
