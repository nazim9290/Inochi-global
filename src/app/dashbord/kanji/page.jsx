"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import ChartComponent from "@/app/component/ChartComponent";
import Link from "next/link";
import { useRouter } from 'next/navigation'
const Hirangana = () => {
  const router=useRouter();
  let _id=2
  const handleCardClick = () => {
    router.push("/dashbord/kanjidata");
    // console.log(data._id)
  };
  return (
    <>
      <div className="d-flex">
        <SideNavbar />
        <div className="w-75" style={{ marginLeft: 'auto' }}>
          <h1 className="text-center" style={{ color: "black" }}>Kanji </h1>
          <div className="leson container">
            <h1>Lets Learn Kanji</h1>
            <p>Master Japan With the Basic</p>

          </div>
          <div style={{ border: "1px solid black", padding: "20px",  }}>
            <p>LESSON 1</p>
            <div className="d-flex justify-content-between align-items-center">
              <span><b>Kanji</b></span>
              <div>
                <butun type="button" className="btn btn-sm"
                  style={{ fontSize: 'small', color: "blue", marginRight: "10px", backgroundColor: "#c7d2fe" }}>{`Start Quiz`}</butun>
                <butun onClick={handleCardClick} style={{ cursor: 'pointer' }}
                 type="button" className="btn btn-primary btn-sm">{`Show Lesson`}</butun>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Foter />
    </>
  );
};

export default Hirangana;
