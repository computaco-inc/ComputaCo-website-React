import React from 'react'

import PropTypes from 'prop-types'

import NavLinks from './nav-links'
import './navbar.css'

const Navbar = (props) => {
  return (
    <div className="navbar-navbar">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <div className="navbar-branding">
          <a
            href={props.link_text1}
            target="_blank"
            rel="noreferrer noopener"
            className="navbar-link"
          >
            {props.text6}
          </a>
        </div>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="navbar-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="navbar-nav"
          >
            <div className="navbar-right">
              <NavLinks></NavLinks>
              <div className="navbar-button">
                <button className="navbar-work-with-us button">
                  <span className="navbar-text">{props.text4}</span>
                  <img
                    alt={props.image_alt1}
                    src={props.image_src1}
                    className="navbar-image"
                  />
                </button>
              </div>
            </div>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="navbar-burger-menu">
          <button className="navbar-work-with-us1 button">
            <span className="navbar-text1">{props.text1}</span>
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="navbar-image1"
            />
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="navbar-nav1"
          >
            <div className="navbar-top">
              <div className="navbar-branding1">
                <span className="navbar-text2">{props.text2}</span>
              </div>
              <div data-thq="thq-close-menu" className="navbar-menu-close">
                <svg viewBox="0 0 1024 1024" className="navbar-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="navbar-middle"
            >
              <div className="navbar-links">
                <span className="navLink">{props.computacode}</span>
                <span className="navLink">{props.computatrum}</span>
                <span className="navLink">{props.computacombinator}</span>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

Navbar.defaultProps = {
  text: 'ComputaCo',
  text1: 'work with us',
  image_src: '/hamburger.svg',
  image_alt: 'image',
  text2: 'ComputaCo',
  computacode: 'ComputaCode',
  computatrum: 'Computratrum',
  computacombinator: 'ComputaCombinator',
  text3: 'work with us',
  text4: 'Sign in / up',
  image_src1: '/hamburger.svg',
  image_alt1: 'image',
  text5: 'Link',
  link_text: 'https://example.com',
  text6: 'ComputaCo',
  link_text1: 'https://example.com',
}

Navbar.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text2: PropTypes.string,
  computacode: PropTypes.string,
  computatrum: PropTypes.string,
  computacombinator: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  text5: PropTypes.string,
  link_text: PropTypes.string,
  text6: PropTypes.string,
  link_text1: PropTypes.string,
}

export default Navbar
