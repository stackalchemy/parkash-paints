import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Search, X, ChevronDown } from "lucide-react";

const productMenu = [
  {
    title: "Interior Walls",
    items: [
      "Interior Water-Based Primer",
      "Plastic Paint – Super Quality",
      "Interior Plastic Paint",
      "Oil Bond Distemper"
    ]
  },
  {
    title: "Exterior Walls",
    items: [
      "Exterior Water-Based Primer",
      "Exterior Plastic Paint"
    ]
  },
  {
    title: "Wood & Metal",
    items: [
      "Enamel Solvent Primer",
      "Red Oxide Metal Primer"
    ]
  },
  
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="nav-inner">

        {/* LOGO */}
        <Link
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            <i></i>
            <i></i>
            <i></i>
          </span>

          <span className="brand-name">
            PRAKASH
            <small>PAINTS</small>
          </span>
        </Link>


        {/* NAVIGATION */}
        <nav className={`nav-links ${open ? "mobile-open" : ""}`}>

          <NavLink
            to="/"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>


          {/* PRODUCTS MEGA MENU */}
          <div
            className={`mega-nav-item ${
              productsOpen ? "is-open" : ""
            }`}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >

            <button
              className="products-trigger"
              onClick={() =>
                setProductsOpen(!productsOpen)
              }
            >
              Products
              <ChevronDown size={14} />
            </button>


            {/* MEGA MENU */}
            <div className="mega-menu">

              <div className="mega-menu-inner">

                {productMenu.map((column) => (

                  <div
                    className="mega-column"
                    key={column.title}
                  >

                    <h4>
                      {column.title}
                    </h4>


                    {column.items.map((item) => (

                      <Link
                        to="/products"
                        key={item}
                        onClick={() => {
                          setProductsOpen(false);
                          setOpen(false);
                        }}
                      >
                        {item}
                      </Link>

                    ))}

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* OTHER NAV ITEMS */}

          <NavLink
            to="/colours"
            onClick={() => setOpen(false)}
          >
            Colour Ideas
          </NavLink>


          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
          >
            About Us
          </NavLink>

        </nav>


        {/* RIGHT SIDE */}

        <div className="nav-actions">

          <button
            className="icon-btn"
            aria-label="Search"
          >
            <Search size={19} />
          </button>


          <Link
            to="/about"
            className="dark-btn contact-btn"
          >
            Contact Us
          </Link>


          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

      </div>

    </header>
  );
}