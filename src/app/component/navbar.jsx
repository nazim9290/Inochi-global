"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../../public/imgages/LOGO.png";
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

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

  return (
    <div className="w-full bg-base-100 shadow">
      <div>
        <nav className="navbar w-full bg-base-100">
          <div className="wrapper">
            <BootstrapNavbar bg="light" expand="lg" className="navbar navbar-expand-lg">
              <Container fluid>
                
                
                  <Nav className="navbar-nav mx-auto">
                    <Nav.Link href="#"><b>call</b></Nav.Link>
                    <Nav.Link href="#"><b>WhatsApp</b></Nav.Link>
                    <Nav.Link href="#"><b>Fix Online Seminar</b></Nav.Link>
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
            <BootstrapNavbar.Toggle aria-controls="navbarSupportedContent" onClick={handleNavbarToggle} />
            <BootstrapNavbar.Collapse in={isNavbarExpanded}>
              <Nav className="navbar-nav me-auto mb-2 mb-lg-0 navbar-center mx-auto">
              <Nav.Link href="/"><b>HOME</b></Nav.Link>
                <Nav.Link href="/study"><b>STUDY-SETTLE-JAPAN</b></Nav.Link>
                <Nav.Link href="/blog"><b>BLOG</b></Nav.Link>
                <Nav.Link href="/contact"><b>CONTACT US</b></Nav.Link>
                <Nav.Link href="/dashbord"><b>DASHBOARD</b></Nav.Link>
                <Nav.Link href="/register"><b>REGISTER</b></Nav.Link>
                {/* <Nav.Link href="/guest-register"><b>GUEST REGISTER</b></Nav.Link> */}
                <Nav.Link href="/login"><b>LOGIN</b></Nav.Link>
              </Nav>
              <form className="d-flex" role="search">
              <button type="button" className="btn btn-primary me-2" style={{ width: '100%', backgroundColor: '#4f46e5' }}>Join Free</button>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              
              </form>
            </BootstrapNavbar.Collapse>
          </Container>
        </nav>
        {/* The rest of your component */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Navbar;
