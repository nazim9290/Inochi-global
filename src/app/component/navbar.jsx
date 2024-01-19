"use client"
import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../../public/imgages/LOGO.png";
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// 
import { UserContext } from "../../context";

const Navbar = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const handleNavbarToggle = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };
  const [state, setState] = useContext(UserContext);
  const [image, setImage] = useState({});
  const [name,setName]=useState("")
  useEffect(() => {
    if (state && state.user) {
        setImage(state.user.image)
        setName(state.user.name)
    }
}, [state]);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar2');
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('fixed-top');
        } else {
          navbar.classList.remove('fixed-top');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const phoneNumber= 8801985080372
  const formattedPhoneNumber = phoneNumber

  // Create the WhatsApp link
  const whatsappLink = `https://wa.me/${formattedPhoneNumber}`;
  return (
    <div className="w-full bg-base-100 shadow">
      <div>
        <nav className="navbar w-full bg-base-100"
          style={{ backgroundColor: "#60004B", color: "white" }}>
          <div className="wrapper">
            <BootstrapNavbar

              expand="lg" className="navbar navbar-expand-lg">
              <Container fluid>
                {/* Your social media icons here */}
                <a  style={{color:"white"}} href=" https://www.facebook.com/inochi.education" >
                  <FacebookRoundedIcon sx={{ fontSize: 30 }} />
                </a>
                <a href="#" style={{color:"white"}}  >
                  <InstagramIcon sx={{ fontSize: 30 }} />
                </a>

                <a  style={{color:"white"}} 
                href="https://www.youtube.com/@inochiGlobalEducation" >
                  <YouTubeIcon sx={{ fontSize: 30 }} />
                </a>
                <a style={{color:"white"}} href="https://www.linkedin.com/company/inochi-"  >
                  <LinkedInIcon sx={{ fontSize: 30 }} />
                </a>
                <Link href="#"  style={{ color: 'white', marginLeft: '5px' ,marginRight:"5px" }}>
                <b style={{ color: "white"  ,textDecoretion:"none"}} >call</b>

                </Link>
                <Link  style={{ color: 'white', marginLeft: '5px' ,marginRight:"5px" }} href={whatsappLink}><b style={{ color: "white" }}>WhatsApp</b></Link>
                <Link href="/seminar" style={{ color: 'white', marginLeft: '5px' ,marginRight:"5px" }}><b style={{ color: "white" }}>Fix Online Seminar</b></Link>               
                <Nav className="navbar-nav mx-auto">
                 
                </Nav>
              </Container>
            </BootstrapNavbar>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar2" id="navbar2">
          <Container fluid>
            <a className="navbar-brand" href="/">
              <Image src={logo} alt="Bootstrap" width={30} height={24} />
            </a>
            <BootstrapNavbar.Toggle aria-controls="navbarSupportedContent"
              onClick={handleNavbarToggle} />

            <BootstrapNavbar.Collapse in={isNavbarExpanded}>
              <Nav className="navbar-nav me-auto mb-2 mb-lg-0 navbar-center mx-auto">
                <Nav.Link href="/"><b>
                HOME</b></Nav.Link>
                <Nav.Link href="/study"><b>STUDY-SETTLE-JAPAN</b></Nav.Link>
                <Nav.Link href="/about"><b>ABOUT-US</b></Nav.Link>
                <Nav.Link href="/blog"><b>BLOG</b></Nav.Link>
                <Nav.Link href="/contact"><b>CONTACT US</b></Nav.Link>
                {
                   name  ?(
                    <>
                    <Nav.Link href="/dashbord"><b>DASHBOARD</b></Nav.Link>
                    </>
                  ):(
                    <>
                    <Nav.Link href="/register"><b>REGISTER</b></Nav.Link>
                <Nav.Link href="/login"><b>LOGIN</b></Nav.Link>
                    </>
                  )
                }
                
              </Nav>
              <form className="d-flex" role="search">
                <button type="button" className="btn btn-primary me-2" style={{ width: '100%', backgroundColor: '#4f46e5' }}>Join Free</button>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              </form>
            </BootstrapNavbar.Collapse>
          </Container>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
