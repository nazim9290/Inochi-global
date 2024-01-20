"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import ChartComponent from "@/app/component/ChartComponent";
import Link from "next/link";
const Katakanta = () => {
  return (
    <>
      <div className="d-flex">
        <SideNavbar />
        <div className="w-75" style={{ marginLeft: 'auto' }}>
          <Link href="/dashbord/hirangana">
            <h1 className="text-center" style={{ color: "black" }}>Hirangana</h1>
          </Link>
          <ChartComponent page="Katakanta" />
        </div>
      </div>
      <Foter />
    </>
  );
};

export default Katakanta;
// katakanta