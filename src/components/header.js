import React from "react"
import { Link } from "gatsby"
import logo from "../images/DeBellaLogoH.png"

const Header = ({ toggleSidebar, isOpen }) => {
  return (
    <header>
      <nav>
        <div className="navbar">
          <Link to="/" onClick={isOpen ? toggleSidebar : () => {}}>
            <img className="nav-logo" src={logo} alt="debella logo" />
          </Link>
          <button
            id="nav-icon"
            className={`${isOpen ? "open" : ""}`}
            onClick={toggleSidebar}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="desktop-page-links">
            <li>
              <Link
                to="/"
                className="hover-underline-animation-full"
              >
                Home
              </Link>
            </li>
            <li>
              <Link className="hover-underline-animation-full" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover-underline-animation-full"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <ul className={`mobile-page-links ${isOpen ? "show" : "hide"}`}>
          <li>
            <Link
              className="hover-underline-animation-full"
              to="/"
              onClick={toggleSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover-underline-animation-full"
              to="/about"
              onClick={toggleSidebar}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="hover-underline-animation-full"
              to="/contact"
              onClick={toggleSidebar}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
