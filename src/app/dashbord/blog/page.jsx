"use client"
import SideNavbar from "@/app/component/SideNavbar";
import CreateBlog from '../../component/createBlog';
import Foter from "@/app/component/Foter";

const Blog = () => {
  return (
    <>
      <div className="">
      <SideNavbar />
      <div className="" style={{ marginLeft: 'auto' }}>
        <CreateBlog/>
      </div>
    </div>
    <Foter/>
    </>
  );
};

export default Blog;
