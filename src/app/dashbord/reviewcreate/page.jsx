"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import Review from "@/app/component/Review"
const ReviewCreate = () => {
  return (
    <>
      <div className="">
      <SideNavbar />
      <div className="" style={{ marginLeft: 'auto' }}>
<Review/>
      </div>
    </div>
    <Foter/>
    </>
  );
};

export default ReviewCreate;
