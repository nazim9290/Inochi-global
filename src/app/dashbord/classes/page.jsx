"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import YouTubePlaylist from "@/app/component/YouTubePlaylist";
const Classes = () => {
    return (
        <>
      <div className="d-flex">
      <SideNavbar />
      <div className="w-75" style={{ marginLeft: 'auto' }}>
      {/* <YouTubePlaylist /> */}
      </div>
    </div>
    <Foter/>
    </>
    );
};

export default Classes;
