const Deshbord = () => {
    return (
      <div>
        {/* partial */}
        <div className="page-body-wrapper mt-0" style={{ marginTop: 0 }}>
          {/* partial:partials/_sidebar.html */}
          <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <div className="user-profile">
              <div className="user-image">
                {/* <img src="images/faces/face1.jpg" /> */}
              </div>
              <div className="user-name">Md Rafiqul Islam</div>
              <div className="user-designation">Dhaka, BAngladesh</div>
            </div>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link">
                  <span className="menu-title">Home</span>
                </a>
              </li>
              {/* ... other sidebar items */}
            </ul>
          </nav>
          {/* partial */}
          <div className="main-panel">
            <div className="content-wrapper">
              <div className="container" style={{ width: '60%' }}>
                <div>
                  <h1 className="text-center">Create Blog</h1>
                </div>
                {/* ... rest of the component */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Deshbord;