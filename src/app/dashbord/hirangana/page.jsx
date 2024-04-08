"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import ChartComponent from "@/app/component/ChartComponent";
import Link from "next/link";
const Hirangana = () => {
  return (
    <>
      <div className="d-flex">
        <SideNavbar />
        <div className="w-75" style={{ marginLeft: 'auto' }}>
          <Link href="/dashbord/katakanta">
            <h1 className="text-center" style={{ color: "black" }}>Katakanta</h1>
          </Link>
          <ChartComponent page="Hiragana" />
        </div>
      </div>
      <Foter />
    </>
  );
};

export default Hirangana;
