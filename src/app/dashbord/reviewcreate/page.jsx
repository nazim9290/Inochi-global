"use client"
import SideNavbar from "@/app/component/SideNavbar";
import Foter from "@/app/component/Foter";
import Review from "@/app/component/review"
const Blog = () => {
  return (
    <>
      <div className="d-flex">
      <SideNavbar />
      <div className="w-75" style={{ marginLeft: 'auto' }}>
<Review/>
      </div>
    </div>
    <Foter/>
    </>
  );
};

export default Blog;
