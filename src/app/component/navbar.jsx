import Image from "next/image";
import logo from "../../../public/imgages/LOGO.png"
import Link from 'next/link'

const NavBar=()=>{
    return(
       <div>
  <nav className="navbar sticky-top sticky-topbar">
    <div className="wrapper">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          {/* social media link */}
          <a href="#" className="fa fa-facebook" />
          <a href="#" className="fa fa-twitter" />
          <a href="#" className="fa fa-instagram" />
          <a href="#" className="fa fa-youtube" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><b>call</b></a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#"><b>WhatsApp</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/seminar"><b>Fix Online Seminar</b></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </nav>
  <nav className="navbar navbar-expand-lg navbar2 sticky-top ">
    <div className="container-fluid">
      <Link className="navbar-brand" href="#">
      <Image src={logo} alt="japani language"   width={30} height={24}/>
        {/* <img src="assests/img/LOGO.jpg" alt="Bootstrap" width={30} height={24} /> */}
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-center mx-auto">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="/"><b>HOME</b></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" href="/study"><b>STUDY-SETTLE-JAPAN</b></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" href="/blog"><b>BLOG</b></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" href="/contact"><b>CONTACT US</b></Link>
          </li>
          <li className="nav-item">

            <Link className="nav-link " aria-current="page" href="/dashborad"><b>DASHBOARD</b></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" href="/register"><b>REGISTER</b></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" href="/gust-register"><b>GUEST REGISTER</b></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" href="/login"><b>LOGIN</b></Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <button type="button" className="btn btn-primary me-2" style={{width: '100%', backgroundColor: '#4f46e5'}}>Join Free</button>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </div>
  </nav>
</div>

    )
}
export default NavBar;