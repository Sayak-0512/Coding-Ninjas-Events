import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Appbar.css';

export default function Appbar() {
  const [showCourses, setShowCourses] = useState(false);
  const [showPractice, setShowPractice] = useState(false);
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="navbar">
      <Navbar.Brand href="/">
        <img
          src="https://www.codingninjas.com/assets-landing/images/CNLOGO.svg"
          alt="Coding Ninja"
          width="60px"
          height="50px"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown
            title="Courses"
            id="basic-nav-dropdown"
            show={showCourses}
            onMouseEnter={() => setShowCourses(!showCourses)}
            onMouseLeave={() => setShowCourses(false)}
          >
            <NavDropdown.Item href="/">
              <b>FOUNDATION, ALGORITHMIC AND ADVANCED</b>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">
              C++ Foundation with Data Structure
            </NavDropdown.Item>
            <NavDropdown.Item href="/">
              {' '}
              JAVA Foundation with Data Structures{' '}
            </NavDropdown.Item>
            <NavDropdown.Item href="/">
              {' '}
              Interview Preparation Course{' '}
            </NavDropdown.Item>
            <NavDropdown.Item href="/">
              {' '}
              Grokking the Operating Systems Interview{' '}
            </NavDropdown.Item>
            <NavDropdown.Item href="/">
              {' '}
              Competitive Programming Course{' '}
            </NavDropdown.Item>
            <NavDropdown.Item href="/">
              {' '}
              Python Foundation with Data Structures{' '}
            </NavDropdown.Item>
            <NavDropdown.Item href="/">
              {' '}
              Aptitude Preparation Course{' '}
            </NavDropdown.Item>
            <br />
            <NavDropdown.Item href="/">
              <b>CAREER TRACK</b>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">
              {' '}
              Ninja Competitive Programmer Track{' '}
            </NavDropdown.Item>
            <NavDropdown.Item href="/">
              {' '}
              Ninja Android Developer Career Track{' '}
            </NavDropdown.Item>
            <NavDropdown.Item href="/">
              {' '}
              Ninja Web Developer Career Track - NodeJS & ReactJs{' '}
            </NavDropdown.Item>
            <NavDropdown.Item href="/">
              {' '}
              Ninja Data Scientist Career Track{' '}
            </NavDropdown.Item>
            <NavDropdown.Item href="/">
              {' '}
              Ninja Machine Learning Engineer Career Track{' '}
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Practice"
            id="basic-nav-dropdown"
            show={showPractice}
            onMouseEnter={() => setShowPractice(!showPractice)}
            onMouseLeave={() => setShowPractice(false)}
          >
            <NavDropdown.Item href="/">
              <b>CODESTUDIO</b>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/"> Code Problems </NavDropdown.Item>
            <NavDropdown.Item href="/">
              {' '}
              Interview Experiences{' '}
            </NavDropdown.Item>
            <NavDropdown.Item href="/"> Guided Paths </NavDropdown.Item>
            <br />
            <NavDropdown.Item href="/">
              <b>CODEZEN</b>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/"> Dashboard </NavDropdown.Item>
            <NavDropdown.Item href="/"> Problem of the day </NavDropdown.Item>
            <NavDropdown.Item href="/"> Practice </NavDropdown.Item>
            <NavDropdown.Item href="/"> Test </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/">Events</Nav.Link>
          <Nav.Link href="/">Campus Ninja</Nav.Link>
          <Nav.Link href="/">Blog</Nav.Link>
          <Nav.Link href="/">
            <img
              src="https://files.codingninjas.in/cc-desktop-2-5363.svg"
              alt="Career camp"
            />
          </Nav.Link>
        </Nav>

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className="classroom-btn">
              My Classroom
            </Nav.Link>
          </Nav>
          <Button className="login-btn">Login</Button>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
}
