import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const date = new Date();
  const getYear = date.getFullYear();

  // contact
  const handleContact = (e) => {
    e.preventDefault();
  };

  return (
    <div className="footer-container py-3">
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <span className="text-info">Ryan</span> books store
          </h3>

          <p className="footer-links">
            <Link to="">Home</Link>
            <Link to="">Blog</Link>
            <Link to="">Pricing</Link>
            <Link to="">About</Link>
            <Link to="">Faq</Link>
            <Link to="">Contact</Link>
          </p>

          <div className="footer-icons">
            <Link to="">
              <FaFacebook />
            </Link>
            <Link to="">
              <FaTwitter />
            </Link>
            <Link to="">
              <FaLinkedin />
            </Link>
            <Link to="">
              <FaGithub />
            </Link>
          </div>
        </div>

        <div className="footer-right">
          <p>Contact Us</p>

          <form onSubmit={handleContact}>
            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </footer>
      <p className="copyright-title">
        Copyright © {getYear}, All right reserved ryan books store
      </p>
    </div>
  );
};

export default Footer;
