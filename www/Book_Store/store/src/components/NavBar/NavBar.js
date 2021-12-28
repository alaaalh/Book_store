/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import Navbar from "react-bootstrap/Navbar";

import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/images/book.png";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

// import { NavLink } from 'react-router-dom'
// import { NavLink } from 'rea';

export default function NavBar() {
  const linkStyle = {
    textDecoration: "none",
    padding: "7px",
  };
  const isLogin = localStorage.getItem('token')
  const handleLogOut = ()=>{
    localStorage.removeItem('token')
  }

  
  return (
    <div>
      <Navbar
        bg="info"
        expand="lg"
        style={{ position: "fixed", top: "0", width: "100%", zIndex: "9999" }}
      >
        <img
          src={image}
          alt="book"
          style={{ width: "32px", height: "32px", marginLeft: "40px" }}
        />
        <Navbar.Brand href="#home" className="px-3">
          Book Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {isLogin ? (
        <Link to="/contact" style={linkStyle}>
          CONTACT US
        </Link>
        ):(
          <Link to="/register" style={linkStyle}>
          CONTACT US
        </Link>
        )}
        {isLogin ? (
        <Link to="/whoare" style={linkStyle}>
          WHO ARE
        </Link>
        ):(
          <Link to="/register" style={linkStyle}>
          WHO ARE
        </Link>
        )}
        <NavDropdown title="Graduate Studies">
          <NavDropdown.Item>Literature and political science</NavDropdown.Item>
          <NavDropdown.Item>management and economy</NavDropdown.Item>
          <NavDropdown.Item>Private education</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Diplomas">
          <NavDropdown.Item>economics and management</NavDropdown.Item>
          <NavDropdown.Item>Sociology</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Academic courses">
          <NavDropdown.Item>Home Economics</NavDropdown.Item>
        </NavDropdown>
        <div className="offset-2 d-flex">
          <div className="px-2">
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#c824b4",
                marginBottom: "-5px",
                color: "white",
                textAlign: "center",
              }}
            >
              {localStorage.getItem("cart")}
            </div>
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          {isLogin ? (
            <NavDropdown title = 'log out' className='px-2'>
              <LinkContainer to="/login">
              <NavDropdown.Item onClick={handleLogOut}>log out</NavDropdown.Item>
            </LinkContainer>
            </NavDropdown>
          ):(
          <NavDropdown title="sign in" className="px-2">
            <LinkContainer to="/login">
              <NavDropdown.Item>Login</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/register">
              <NavDropdown.Item>register</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          )}
        </div>
      </Navbar>
    </div>
  );
}
