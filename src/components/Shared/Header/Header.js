import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="header-container">
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="navber-container py-4"
        >
          <Container fluid>
            <Navbar.Brand>
              <Link to="/" className="fs-3 fw-bold">
                Ryan Books Store
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to="/" className="fs-6 fw-bold">
                    Ryan Books Store
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className="me-3" to="/home">
                    Home
                  </Link>
                  <Link className="me-3" to="/blogs">
                    Blogs
                  </Link>
                  <Link className="me-3" to="/manage-inventory">
                    Manage Inventory
                  </Link>
                  <Link className="me-3" to="/add-items">
                    Add items
                  </Link>
                  {user ? (
                    <Link className="me-3" onClick={() => signOut(auth)} to="">
                      Logout
                    </Link>
                  ) : (
                    <Link className="me-3" to="/login">
                      Login
                    </Link>
                  )}

                  {/* <Link className="me-3" to="/signup">
                    Register
                  </Link> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
