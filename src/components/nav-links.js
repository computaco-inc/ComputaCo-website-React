import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './nav-links.css'

const NavLinks = (props) => {
  return (
    <div className="nav-links-links">
      <Link to="/computa-code" className="nav-links-link navLink">
        {props.Link}
      </Link>
      <Link to="/computatrum" className="nav-links-link1 navLink">
        {props.Link1}
      </Link>
      <Link to="/computa-combinator" className="nav-links-link2 navLink">
        {props.Link2}
      </Link>
    </div>
  )
}

NavLinks.defaultProps = {
  Link1: 'Computatrum',
  Link: 'ComputaCode',
  Link2: 'ComputaCombinator',
  Link3: 'ComputaCo',
}

NavLinks.propTypes = {
  Link1: PropTypes.string,
  Link: PropTypes.string,
  Link2: PropTypes.string,
  Link3: PropTypes.string,
}

export default NavLinks
