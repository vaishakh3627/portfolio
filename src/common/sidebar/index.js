import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

import { FaHome, FaRegFilePdf } from "react-icons/fa";
import { MdOutlineAccountCircle, MdMailOutline } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

import "./style.scss";

const SideBar = () => {
  return (
    <>
      <div className="sidebar-wrapper">
        <a className="sidebar-menu" href="#banner">
          <FaHome className="sidebar-icon home" />
        </a>
        <a className="sidebar-menu" href="#about">
          <MdOutlineAccountCircle className="sidebar-icon" />
        </a>
        <a className="sidebar-menu" href="#resume">
          <FaRegFilePdf className="sidebar-icon" />
        </a>
        <a className="sidebar-menu" href="#service">
          <RiCustomerService2Fill className="sidebar-icon" />
        </a>
        <a className="sidebar-menu" href="#banner">
          <MdMailOutline className="sidebar-icon" />
        </a>
      </div>
      <Navbar collapseOnSelect expand="lg" fixed="top" className="header">
        <Container>
          <Navbar.Brand href="#home">
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="toggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#banner" className="p-2 text-center navbar-view">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="p-2 text-center navbar-view">
                About
              </Nav.Link>
              <Nav.Link href="#resume" className="p-2 text-center navbar-view">
                Resume
              </Nav.Link>
              <Nav.Link href="#service" className="p-2 text-center navbar-view">
                Services
              </Nav.Link>
              <Nav.Link href="#contact" className="p-2 text-center navbar-view">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default SideBar;
