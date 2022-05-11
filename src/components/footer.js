import React from "react"
import logo from "../images/DeBellaTxt.png"
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="footer-logos">
        <img
          src={logo}
          alt="debella seal and coating"
          className="footer-text-logo"
        />
        <div className="footer-social">
          <a
            href="https://www.instagram.com/debellasealcoating"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare className="footer-social-icon" />
          </a>
          <a
            href="https://www.facebook.com/debellasealcoating"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare className="footer-social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="contact-info">
          <p>
            Tel | <a href="tel: +1-845-568-7983">(845) 568-7983</a>
          </p>
          <p>
            Email |{" "}
            <a href="mailto:office@debellasealcoating.com">
              office@debellasealcoating.com
            </a>
          </p>
        </div>
        <p className="copyright">
          &copy;{new Date().getFullYear()}
          &nbsp;<span>DeBella Seal Coating LLC</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
