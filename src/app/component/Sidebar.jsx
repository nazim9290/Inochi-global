import Link from 'next/link';

import "./Sidebar.css";

const Sidebar = () => {
  return (
      <>
        <div className='sidebar'>
            <div className='img-container text-center'>
            </div>
            <div className='sidebar-container'>
                <div>
                 
                    <Link to="/admin/dashboard">Dashboard</Link>
                </div>
                <div>
                   
                    <Link to="">Teacher</Link>
                </div>
                <div>
                    
                    <Link to="/admin/dashboard/students">Students List</Link>
                </div>
                <div>
             
                    <Link to="/admin/dashboard/">Course</Link>
                </div>
                <div>
                   
                    <Link to="/admin/dashboard/create/question">Create Question</Link>
                </div>
                {/* View Question */}
                <div>
                    <Link to="/admin/dashboard/question/list">All Question</Link>
                </div>
            </div>
        </div>
      </>
  )
}

export default Sidebar