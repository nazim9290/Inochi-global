// "use client"
// import SideNavbar from "@/app/component/SideNavbar";
// import Foter from "@/app/component/Foter"

// const Dashbord = () => {
//   return (
//     <>
//       <div className="d-flex">
//       <SideNavbar />
//       <div className="w-75" style={{ marginLeft: 'auto' }}>
//          <p>Home page for tes  ......</p>     
//       </div>
//     </div>
//     <Foter />
//     </>
//   );
// };

// export default Dashbord;
"use client"
import SideNavbar from "@/app/component/SideNavbar";
import BasicExample from "@/app/component/SideDropNav"
import Foter from "@/app/component/Foter";
const Dashbord = () => {
  return (
    <>
        <div className="">
          <SideNavbar />
          <div className="" style={{ marginLeft: 'auto' }}>
            <p>
              
            </p>
          </div>
        </div>
        <div className="d-flex">
          <div className="w-100" style={{ marginTop: 'auto'}}>
 
 <Foter/>
           </div>
        </div>
    </>
  );
};

export default Dashbord;
