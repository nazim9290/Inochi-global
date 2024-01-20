"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import PlayListAdd from "../../component/PlayListAdd";

const Classes = () => {
    return (
        <>
      <div className="d-flex">
      <SideNavbar />
      <div className="w-75" style={{ marginLeft: 'auto' }}>
      <PlayListAdd />
      </div>
    </div>
    <Foter/>
    </>
    );
};

export default Classes;
