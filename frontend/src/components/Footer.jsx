import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main container">
        <div className="footer-brand">
          <div className="brand footer-logo">
            <span className="brand-mark"><i></i><i></i><i></i></span>
            <span className="brand-name">PRAKASH<small>PAINTS</small></span>
          </div>
          <p>Building colourful spaces for a brighter tomorrow.</p>
          <div className="socials">
            <a href="#" aria-label="Instagram"><Instagram/></a>
            <a href="#" aria-label="Facebook"><Facebook/></a>
            <a href="#" aria-label="LinkedIn"><Linkedin/></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/products">Products</Link>
          <Link to="/colours">Colour Ideas</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div className="footer-col">
          <h4>Products</h4>
          <a href="/products">Interior Paints</a>
          <a href="/products">Exterior Paints</a>
          <a href="/products">Wood & Metal</a>
          <a href="/products">Industrial Coatings</a>
        </div>
        <div className="footer-col">
          <h4>Get in touch</h4>
          <p>For product enquiries, dealer support and project requirements.</p>
          <Link className="footer-contact" to="/about">Contact us <ArrowUpRight size={16}/></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 Parkash Paints. All rights reserved.</span>
          <span>Made for better spaces.</span>
        </div>
      </div>
    </footer>
  );
}