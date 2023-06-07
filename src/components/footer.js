import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-header">
      <div className="footer-container">
        <span className="footer-branding">{props.Branding}</span>
        <div className="footer-socials">
          <a href="mailto:hello@computaco.ai?subject=" className="footer-link">
            {props.text}
          </a>
          <a
            href="https://twitter.com/computaco"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link1"
          >
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="social"
            />
          </a>
          <a
            href="https://www.pinterest.com/computacoai/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link2"
          >
            <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon">
              <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857-43.429 0-84.571-6.286-124.571-18.286 16.571-26.286 35.429-60 44.571-93.714 0 0 5.143-19.429 30.857-120.571 14.857 29.143 59.429 54.857 106.857 54.857 141.143 0 237.143-128.571 237.143-301.143 0-129.714-110.286-251.429-278.286-251.429-208 0-313.143 149.714-313.143 274.286 0 75.429 28.571 142.857 89.714 168 9.714 4 18.857 0 21.714-11.429 2.286-7.429 6.857-26.857 9.143-34.857 2.857-11.429 1.714-14.857-6.286-24.571-17.714-21.143-29.143-48-29.143-86.286 0-110.857 82.857-210.286 216-210.286 117.714 0 182.857 72 182.857 168.571 0 126.286-56 233.143-139.429 233.143-45.714 0-80-37.714-69.143-84.571 13.143-55.429 38.857-115.429 38.857-155.429 0-36-19.429-66.286-59.429-66.286-46.857 0-84.571 48.571-84.571 113.714 0 0 0 41.714 14.286 69.714-48 203.429-56.571 238.857-56.571 238.857-8 33.143-8.571 70.286-7.429 101.143-154.857-68-262.857-222.286-262.857-402.286 0-242.286 196.571-438.857 438.857-438.857s438.857 196.571 438.857 438.857z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/computaco/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link3"
          >
            <img
              alt={props.image_alt4}
              src={props.image_src4}
              className="social"
            />
          </a>
          <a
            href="https://www.youtube.com/@ComputaCoInc"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link4"
          >
            <img
              alt={props.image_alt5}
              src={props.image_src5}
              className="social"
            />
          </a>
        </div>
      </div>
      <div className="footer-container1">
        <div className="footer-container2">
          <Link to="/computa-code" className="footer-navlink">
            {props.text3}
          </Link>
          <Link to="/computatrum" className="footer-navlink1">
            {props.text4}
          </Link>
          <Link to="/computa-combinator" className="footer-link5">
            {props.text5}
          </Link>
        </div>
        <div className="footer-container3">
          <Link to="/about" className="footer-navlink2">
            {props.text42}
          </Link>
          <a
            href="mailto:jacob.valdez@computaco.ai?subject=Exciting Investment Opportunity - Let's Discuss Potential Partnership"
            className="footer-link6"
          >
            {props.text31}
          </a>
          <a
            href="mailto:jacob.valdez@computaco.ai?subject=Interested in work at ComputaCo Inc (please tell me your skillz and share links to prev work)"
            className="footer-link7"
          >
            {props.text311}
          </a>
        </div>
        <div className="footer-container4">
          <Link to="/acceptable-use" className="footer-navlink3">
            {props.text61}
          </Link>
          <Link to="/privacy" className="footer-link8">
            {props.text51}
          </Link>
        </div>
      </div>
      <span className="footer-text">{props.text7}</span>
    </div>
  )
}

Footer.defaultProps = {
  text6: 'Terms of Service',
  link_text1: 'https://example.com',
  image_alt5: 'image',
  image_src2: '73af6611-a392-4f94-924d-0f338800d008',
  text5: 'ComputaCombinator',
  image_alt2: 'image',
  image_src1: '/twitter%20-%20negative.svg',
  image_alt4: 'image',
  image_src4: '/linkedin%20-%20negative.svg',
  image_src6: 'd72d9e6a-ea58-4257-a35a-49031d860c21',
  link_text3: 'https://example.com',
  text31: 'Investors',
  text2: 'Text',
  text1: 'Text',
  link_text41: 'https://example.com',
  link_text12: 'https://example.com',
  link_text22: 'https://example.com',
  link_text2: 'https://example.com',
  link_text31: 'https://example.com',
  image_alt6: 'image',
  link_text111: 'https://example.com',
  link_text11: 'https://example.com',
  image_alt1: 'image',
  image_src3: 'f59f4852-948e-4273-a7d4-752bda749a27',
  image_alt7: 'image',
  text42: 'About Us',
  text51: 'Privacy',
  text3: 'ComputaCode',
  text61: 'Acceptable Use',
  image_src7: '0665ff6f-91fa-4722-b24d-d7e13f111333',
  image_src5: '/youtube%20-%20negative.svg',
  text311: 'Careers',
  text: 'hello@computaco.ai',
  text4: 'Computatrum',
  image_src: '7a51e82a-f354-4daf-b830-3d1508376f78',
  text7: 'copyright © 2023 ComputaCo INC',
  Branding: 'ComputaCo',
  link_text: 'https://mailto://hello@computaco.ai',
  link_text4: 'https://example.com',
  image_alt3: 'image',
  text41: 'Legal',
  text32: 'FAQ',
  link_text21: 'https://example.com',
  image_alt: 'image',
}

Footer.propTypes = {
  text6: PropTypes.string,
  link_text1: PropTypes.string,
  image_alt5: PropTypes.string,
  image_src2: PropTypes.string,
  text5: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt4: PropTypes.string,
  image_src4: PropTypes.string,
  image_src6: PropTypes.string,
  link_text3: PropTypes.string,
  text31: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  link_text41: PropTypes.string,
  link_text12: PropTypes.string,
  link_text22: PropTypes.string,
  link_text2: PropTypes.string,
  link_text31: PropTypes.string,
  image_alt6: PropTypes.string,
  link_text111: PropTypes.string,
  link_text11: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt7: PropTypes.string,
  text42: PropTypes.string,
  text51: PropTypes.string,
  text3: PropTypes.string,
  text61: PropTypes.string,
  image_src7: PropTypes.string,
  image_src5: PropTypes.string,
  text311: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  image_src: PropTypes.string,
  text7: PropTypes.string,
  Branding: PropTypes.string,
  link_text: PropTypes.string,
  link_text4: PropTypes.string,
  image_alt3: PropTypes.string,
  text41: PropTypes.string,
  text32: PropTypes.string,
  link_text21: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Footer
