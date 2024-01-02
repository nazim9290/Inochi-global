// Corrected import statement for useEffect
"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../../public/imgages/LOGO.png";
import { Navbar as BootstrapNavbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Navbar = () => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  useEffect(() => {
    // Add an event listener to handle scroll and add a sticky class
    const handleScroll = () => {
      const navbar = document.getElementById('navbar2');
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('sticky');
        } else {
          navbar.classList.remove('sticky');
        }
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div>
        <nav className="navbar">
          <div className="wrapper">
            <BootstrapNavbar bg="light" expand="lg" className="navbar navbar-expand-lg">
              <Container fluid>
                <a href="#" className="fa fa-facebook" />
                <a href="#" className="fa fa-twitter" />
                <a href="#" className="fa fa-instagram" />
                <a href="#" className="fa fa-youtube" />
                <BootstrapNavbar.Toggle aria-controls="navbarNav" onClick={handleNavbarToggle} />
                <BootstrapNavbar.Collapse id="navbarNav">
                  <Nav className="navbar-nav mx-auto">
                    <Nav.Link href="#"><b>call</b></Nav.Link>
                    <Nav.Link href="#"><b>WhatsApp</b></Nav.Link>
                    <Nav.Link href="seminar.html"><b>Fix Online Seminar</b></Nav.Link>
                  </Nav>
                </BootstrapNavbar.Collapse>
              </Container>
            </BootstrapNavbar>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar2 sticky-top">
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
                <Nav.Link href="/guest-register"><b>GUEST REGISTER</b></Nav.Link>
                <Nav.Link href="/login"><b>LOGIN</b></Nav.Link>
              </Nav>
              <form className="d-flex" role="search">
                <button type="button" className="btn btn-primary me-2" style={{ width: '100%', backgroundColor: '#4f46e5' }}>Join Free</button>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              </form>
            </BootstrapNavbar.Collapse>
          </Container>
        </nav>
        <>
        </>
      </div>
    </div>
  );
};

export default Navbar;
