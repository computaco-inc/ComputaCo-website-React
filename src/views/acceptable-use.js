import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './acceptable-use.css'

const AcceptableUse = (props) => {
  return (
    <div className="acceptable-use-container">
      <Helmet>
        <title>Acceptable-Use - ComputaCo</title>
        <meta
          name="description"
          content="ComputaCo\nComputaCode\nComputatrum\nComputaCombinator\nComputation Redefined\nHuman-Machine Interaction"
        />
        <meta property="og:title" content="Acceptable-Use - ComputaCo" />
        <meta
          property="og:description"
          content="ComputaCo\nComputaCode\nComputatrum\nComputaCombinator\nComputation Redefined\nHuman-Machine Interaction"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="acceptable-use-hero">
        <div className="acceptable-use-header">
          <h1 className="acceptable-use-text">Acceptable Use</h1>
          <div className="acceptable-use-container1"></div>
        </div>
      </div>
      <div className="acceptable-use-information">
        <span className="acceptable-use-description">
          <span>
            Thank you for visiting the ComputaCo website. This Acceptable Use
            Policy (the &quot;Policy&quot;) governs your use of our website,
            including all content, features, and services provided by ComputaCo
            (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing
            or using our website, you agree to comply with this Policy. If you
            do not agree with the terms outlined in this Policy, please refrain
            from using our website.
          </span>
          <br></br>
          <br></br>
          <span className="acceptable-use-text04">
            1. Compliance with Laws and Regulations
          </span>
          <br className="acceptable-use-text05"></br>
          <br></br>
          <span>
            When using our website, you must comply with all applicable laws,
            regulations, and third-party rights. This includes, but is not
            limited to, laws regarding intellectual property rights, privacy,
            data protection, and defamation. You are solely responsible for
            ensuring that your use of our website is lawful and does not
            infringe upon the rights of others.
          </span>
          <br></br>
          <br></br>
          <span className="acceptable-use-text10">
            2. Prohibited Activities
          </span>
          <br className="acceptable-use-text11"></br>
          <br></br>
          <span>
            The following activities are strictly prohibited when using our
            website:
          </span>
          <br></br>
          <br></br>
          <span className="acceptable-use-text16">a. Unauthorized Access:</span>
          <span>
            {' '}
            Accessing or attempting to access unauthorized areas of our website,
            computer systems, or networks.
          </span>
          <br></br>
          <span className="acceptable-use-text19">b. Malicious Actions:</span>
          <span>
            {' '}
            Engaging in any activity that may disrupt, damage, or impair the
            performance, functionality, or security of our website or its
            associated systems.
          </span>
          <br></br>
          <span className="acceptable-use-text22">c. Unauthorized Use:</span>
          <span>
            {' '}
            Using our website for any unlawful or unauthorized purpose,
            including but not limited to, distributing malware, phishing, or
            engaging in any form of hacking or unauthorized data access.
          </span>
          <br></br>
          <span className="acceptable-use-text25">
            d. Intellectual Property Infringement:
          </span>
          <span>
            {' '}
            Using our website to transmit, distribute, or store any material
            that infringes upon the intellectual property rights of others.
          </span>
          <br></br>
          <span className="acceptable-use-text28">
            e. Offensive or Harmful Content:
          </span>
          <span>
            {' '}
            Posting, transmitting, or distributing any content that is
            defamatory, obscene, abusive, hateful, or otherwise objectionable.
          </span>
          <br></br>
          <span className="acceptable-use-text31">
            f. Spamming and Unsolicited Communication:
          </span>
          <span>
            {' '}
            Sending unsolicited promotional or commercial communications,
            including spam, junk mail, or similar content.
          </span>
          <br></br>
          <span className="acceptable-use-text34">g. Impersonation:</span>
          <span>
            {' '}
            Falsely representing yourself as another individual or entity when
            using our website.
          </span>
          <br></br>
          <br></br>
          <span className="acceptable-use-text38">3. Security and Privacy</span>
          <br className="acceptable-use-text39"></br>
          <br></br>
          <span>
            We take the security and privacy of our users seriously. When using
            our website, you agree to:
          </span>
          <br></br>
          <br></br>
          <span className="acceptable-use-text44">
            a. Protect Your Credentials:
          </span>
          <span>
            {' '}
            Keep your account credentials, if applicable, confidential and do
            not share them with others.
          </span>
          <br></br>
          <span className="acceptable-use-text47">b. Privacy:</span>
          <span>
            {' '}
            Comply with our
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <Link to="/privacy" className="acceptable-use-navlink">
            Privacy Policy
          </Link>
          <span>
            , available on our website, which outlines how we collect, use, and
            protect your personal information.
          </span>
          <br></br>
          <br></br>
          <span className="acceptable-use-text52">
            4. Third-Party Websites and Content
          </span>
          <br className="acceptable-use-text53"></br>
          <br></br>
          <span>
            Our website may contain links to third-party websites or content
            that we do not control. We are not responsible for the content,
            privacy practices, or security of any third-party websites or
            content. Your use of such websites or content is at your own risk,
            and you should review the applicable terms and policies of those
            third parties.
          </span>
          <br></br>
          <br></br>
          <span className="acceptable-use-text58">
            5. Modifications to the Policy
          </span>
          <br className="acceptable-use-text59"></br>
          <br></br>
          <span>
            We reserve the right to modify or update this Policy at any time,
            without prior notice. Any changes to the Policy will be effective
            immediately upon posting on our website. Your continued use of our
            website after any modifications to the Policy constitutes your
            acceptance of the revised terms.
          </span>
          <br></br>
          <br></br>
          <span className="acceptable-use-text64">6. Contact Us</span>
          <br className="acceptable-use-text65"></br>
          <br></br>
          <span>
            If you have any questions, concerns, or feedback regarding this
            Policy, please contact us at
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="mailto:legal@computaco.ai?subject="
            className="acceptable-use-link"
          >
            legal@computaco.ai
          </a>
          <span>.</span>
          <br></br>
          <br></br>
          <span>
            By using the ComputaCo website, you acknowledge and agree to abide
            by this Acceptable Use Policy. Failure to comply with this Policy
            may result in the termination or restriction of your access to our
            website.
          </span>
          <br></br>
          <br></br>
          <span>Last updated: June 7, 2023 14:39 CT</span>
          <br></br>
        </span>
      </div>
      <footer className="acceptable-use-footer">
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default AcceptableUse
