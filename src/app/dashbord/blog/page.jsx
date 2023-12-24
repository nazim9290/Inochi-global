"use client"
import SideNavbar from "@/app/component/SideNavbar";
import CreateBlog from '../../component/createBlog';

const Blog = () => {
  return (
    <div className="d-flex">
      <SideNavbar />
      <div className="w-75" style={{ marginLeft: 'auto' }}>
<CreateBlog/>
     
      </div>
    </div>
  );
};

export default Blog;
