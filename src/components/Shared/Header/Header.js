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
        <Navbar key={expand} expand={expand} className="navber-container py-4">
          <Container fluid>
            <Navbar.Brand>
              <Link to="/" className="fs-2 fw-bold ms-0 ms-md-5 logo">
                <span className="text-info fs-2 me-2">Ryan </span>Books Store
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

                  {/* private items  */}
                  {user && (
                    <>
                      <Link className="me-3" to="/manage-inventory">
                        Manage Inventory
                      </Link>
                      <Link className="me-3" to="/add-items">
                        Add items
                      </Link>
                      <Link className="me-3" to="/my-items">
                        My items
                      </Link>
                    </>
                  )}

                  {/* --------contact route--------- */}
                  <Link className="me-3 mb-3 mb-md-0" to="/contact">
                    Contact
                  </Link>
                  {/* ================ */}

                  {user ? (
                    <Link
                      className="me-3 bg-danger px-4 p-1 fw-bold text-light rounded"
                      onClick={() => signOut(auth)}
                      to=""
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link
                      className="me-3 bg-danger px-4 p-1 fw-bold text-light rounded"
                      to="/login"
                    >
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
