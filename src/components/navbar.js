import React from 'react'
import { Link } from 'react-router-dom'

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
                <span className="navLink navbar-computacode">
                  {props.computacode1}
                </span>
                <span className="navLink navbar-computatrum">
                  {props.computatrum}
                </span>
                <span className="navLink navbar-computacombinator">
                  {props.computacombinator}
                </span>
                <Link to="/computa-code" className="navbar-link1 navLink">
                  {props.Link}
                </Link>
                <Link to="/computatrum" className="navbar-link2 navLink">
                  {props.Link1}
                </Link>
                <Link to="/computa-combinator" className="navbar-link3 navLink">
                  {props.Link2}
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}

Navbar.defaultProps = {
  Link1: 'Computatrum',
  computacombinator: 'ComputaCombinator',
  text9: 'Link',
  text4: 'Sign in / up',
  link_text3: 'https://example.com',
  Link: 'ComputaCode',
  text1: 'work with us',
  computacode: 'ComputaCode',
  text2: 'ComputaCo',
  image_src1: '/hamburger.svg',
  text: 'ComputaCo',
  computatrum: 'Computratrum',
  text5: 'Link',
  text7: 'Link',
  text3: 'work with us',
  Link2: 'ComputaCombinator',
  link_text4: 'https://example.com',
  link_text2: 'https://example.com',
  image_src: '/hamburger.svg',
  link_text: 'https://example.com',
  link_text1: 'https://example.com',
  image_alt: 'image',
  text6: 'ComputaCo',
  text8: 'Link',
  image_alt1: 'image',
  computacode1: 'ComputaCode',
}

Navbar.propTypes = {
  Link1: PropTypes.string,
  computacombinator: PropTypes.string,
  text9: PropTypes.string,
  text4: PropTypes.string,
  link_text3: PropTypes.string,
  Link: PropTypes.string,
  text1: PropTypes.string,
  computacode: PropTypes.string,
  text2: PropTypes.string,
  image_src1: PropTypes.string,
  text: PropTypes.string,
  computatrum: PropTypes.string,
  text5: PropTypes.string,
  text7: PropTypes.string,
  text3: PropTypes.string,
  Link2: PropTypes.string,
  link_text4: PropTypes.string,
  link_text2: PropTypes.string,
  image_src: PropTypes.string,
  link_text: PropTypes.string,
  link_text1: PropTypes.string,
  image_alt: PropTypes.string,
  text6: PropTypes.string,
  text8: PropTypes.string,
  image_alt1: PropTypes.string,
  computacode1: PropTypes.string,
}

export default Navbar
