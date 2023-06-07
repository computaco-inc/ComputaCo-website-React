import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Testimonial from '../components/testimonial'
import Footer from '../components/footer'
import './privacy.css'

const Privacy = (props) => {
  return (
    <div className="privacy-container">
      <Helmet>
        <title>Privacy - ComputaCo</title>
        <meta
          name="description"
          content="ComputaCo\nComputaCode\nComputatrum\nComputaCombinator\nComputation Redefined\nHuman-Machine Interaction"
        />
        <meta property="og:title" content="Privacy - ComputaCo" />
        <meta
          property="og:description"
          content="ComputaCo\nComputaCode\nComputatrum\nComputaCombinator\nComputation Redefined\nHuman-Machine Interaction"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="privacy-hero">
        <div className="privacy-header">
          <h1 className="privacy-text">Privacy</h1>
          <div className="privacy-container1"></div>
        </div>
      </div>
      <div className="privacy-information">
        <span className="privacy-description">
          At ComputaCo, we are committed to protecting your privacy and ensuring
          the security of your personal information. This Privacy Policy
          explains how we collect, use, and safeguard the data you provide to
          us. We encourage you to read this policy to understand our practices
          regarding your personal information.
        </span>
        <span className="privacy-description1">Here&apos;s the gist:</span>
        <div className="privacy-purpose">
          <h2 className="privacy-caption">Collection and Use of Information</h2>
          <span className="privacy-description2">
            ComputaCo collects personal information voluntarily provided by
            users, such as names, email addresses, and contact information.
            Additionally, usage data, including IP addresses, device
            information, and browsing patterns, may be automatically collected.
            The collected information is used to provide and improve products
            and services, communicate with users, conduct research and
            analytics, and ensure legal compliance and protection.
          </span>
        </div>
        <div className="privacy-purpose1">
          <h2 className="privacy-caption1">Data Sharing and Security</h2>
          <span className="privacy-description3">
            ComputaCo may engage third-party service providers to assist in
            delivering products and services, with access to personal
            information limited to the necessary extent. In the event of a
            business transfer, user information may be disclosed or transferred
            as part of the transaction. Legal requirements may also necessitate
            the disclosure of information. The company employs industry-standard
            security measures to protect personal data, although absolute
            security cannot be guaranteed.
          </span>
        </div>
        <div className="privacy-purpose2">
          <h2 className="privacy-caption2">User Rights and Choices</h2>
          <span className="privacy-description4">
            <span>
              Users have the right to access and update their personal
              information held by ComputaCo. Opting out of receiving marketing
              communications is possible by following the provided instructions.
              The website does not respond to Do Not Track signals, but users
              can manage cookie preferences through browser settings. The
              privacy policy does not cover individuals under the age of 13, and
              ComputaCo does not knowingly collect personal information from
              children in that age group.
            </span>
            <br></br>
          </span>
        </div>
        <span className="privacy-description5">
          <span className="privacy-text003">Full Privacy Policy</span>
          <br className="privacy-text004"></br>
          <br></br>
          <span>
            At ComputaCo, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, and safeguard the data you
            provide to us. We encourage you to read this policy to understand
            our practices regarding your personal information.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text009">1. Information We Collect</span>
          <br className="privacy-text010"></br>
          <br></br>
          <span className="privacy-text012">1.1 Personal Information</span>
          <br className="privacy-text013"></br>
          <span>
            When you interact with our website, products, or services, we may
            collect personal information that you voluntarily provide to us.
            This may include your name, email address, contact information, and
            any other information you choose to provide.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text017">1.2 Usage Data</span>
          <br className="privacy-text018"></br>
          <span>
            We may also collect certain information automatically when you visit
            our website or use our services. This may include your IP address,
            device information, browser type, operating system, usage patterns,
            and other technical information. We use this information to analyze
            trends, administer our website, improve our services, and gather
            demographic information for internal purposes.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text022">2. Use of Information</span>
          <br className="privacy-text023"></br>
          <br></br>
          <span className="privacy-text025">
            2.1 Providing and Improving Our Services
          </span>
          <br className="privacy-text026"></br>
          <span>
            We may use the information we collect to provide, maintain, and
            improve our products and services. This includes processing your
            inquiries, delivering requested information, personalizing your
            experience, and addressing any issues or concerns you may have.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text030">2.2 Communication</span>
          <br className="privacy-text031"></br>
          <span>
            We may use your contact information to communicate with you
            regarding updates, announcements, marketing materials, and other
            information related to our products and services. You can opt out of
            receiving these communications at any time by following the
            instructions provided in the communication.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text035">2.3 Research and Analytics</span>
          <br className="privacy-text036"></br>
          <span>
            We may use the information we collect for research and analytical
            purposes, such as analyzing usage trends, measuring the
            effectiveness of our marketing campaigns, and improving our products
            and services based on user behavior and feedback.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text040">
            2.4 Legal Compliance and Protection
          </span>
          <br className="privacy-text041"></br>
          <span>
            We may use your information to comply with applicable laws,
            regulations, or legal processes. Additionally, we may use your
            information to protect our rights, privacy, safety, or property, as
            well as the rights, privacy, safety, or property of our users or
            others.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text045">3. Data Sharing</span>
          <br className="privacy-text046"></br>
          <br></br>
          <span className="privacy-text048">
            3.1 Third-Party Service Providers
          </span>
          <br className="privacy-text049"></br>
          <span>
            We may engage third-party service providers to assist us in
            delivering our products and services or to perform certain functions
            on our behalf. These service providers have access to your personal
            information only to the extent necessary to perform their services
            and are obligated to protect your information.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text053">3.2 Business Transfers</span>
          <br className="privacy-text054"></br>
          <span>
            In the event of a merger, acquisition, or sale of all or a portion
            of our assets, your information may be transferred or disclosed as
            part of that transaction. We will notify you via email and/or a
            prominent notice on our website of any such change in ownership or
            control of your personal information.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text058">3.3 Legal Requirements</span>
          <br className="privacy-text059"></br>
          <span>
            We may disclose your information if required to do so by law or in
            response to valid legal requests, such as subpoenas or court orders.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text063">4. Data Security</span>
          <br className="privacy-text064"></br>
          <br></br>
          <span>
            We employ industry-standard security measures to protect your
            personal information from unauthorized access, disclosure,
            alteration, or destruction. However, no method of transmission over
            the internet or electronic storage is completely secure, and we
            cannot guarantee the absolute security of your information.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text069">5. Data Retention</span>
          <br className="privacy-text070"></br>
          <br></br>
          <span>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law. We will
            delete or anonymize your information when it is no longer needed for
            the purposes for which it was collected.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text075">6. Your Rights and Choices</span>
          <br className="privacy-text076"></br>
          <br></br>
          <span className="privacy-text078">6.1 Access and Update</span>
          <br className="privacy-text079"></br>
          <span>
            You have the right to access and update your personal information
            that we hold. If you wish to review or modify any information you
            have provided to us, please contact us using the information
            provided at the end of this Privacy Policy.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text083">6.2 Opt-Out</span>
          <br className="privacy-text084"></br>
          <span>
            You can opt out of receiving marketing communications from us by
            following the instructions provided in the communication. Please
            note that even if you opt out, we may still send you non-promotional
            messages related to your interactions with us.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text088">6.3 Do Not Track</span>
          <br className="privacy-text089"></br>
          <span>
            Our website does not respond to Do Not Track signals. However, you
            can configure your browser settings to block cookies or alert you
            when cookies are being sent. Please refer to your browser&apos;s
            help section for instructions on how to manage your cookie
            preferences.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text093">7. Children&apos;s Privacy</span>
          <br className="privacy-text094"></br>
          <br></br>
          <span>
            Our website and services are not intended for children under the age
            of 13. We do not knowingly collect personal information from
            individuals under 13 years of age. If we become aware that we have
            inadvertently collected personal information from a child under 13,
            we will take steps to delete the information as soon as possible.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text099">
            8. Changes to this Privacy Policy
          </span>
          <br className="privacy-text100"></br>
          <br></br>
          <span>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal obligations. We will post the
            revised Privacy Policy on this page and indicate the date of the
            last update. We encourage you to review this Privacy Policy
            periodically to stay informed about our data practices.
          </span>
          <br></br>
          <br></br>
          <span className="privacy-text105">9. Contact Us</span>
          <br className="privacy-text106"></br>
          <br></br>
          <span>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us at:
          </span>
          <br></br>
          <br></br>
          <span>ComputaCo</span>
          <br></br>
          <span>Address: 10601 Calarance Dr. Frisco TX 75033</span>
          <br></br>
          <span>
            Email:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="mailto:privacy@computaco.ai?subject="
            className="privacy-link"
          >
            privacy@computaco.ai
          </a>
          <br></br>
          <span>
            Phone:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a href="tel:+16823518740" className="privacy-link1">
            +1 (682) 351 - 8740
          </a>
          <br></br>
          <br></br>
          <span>Last updated: June 7, 2023 14:23 CT</span>
          <br></br>
        </span>
        <div className="privacy-industries">
          <span className="privacy-caption3">INDUSTRIES</span>
          <div className="privacy-list">
            <div data-role="accordion-container" className="privacy-accordion">
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="privacy-title">Education</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="privacy-text122">Perspiciatis</span>
                <span className="privacy-text123">Nemo voluptatem</span>
                <span className="privacy-text124">Dolore magnam</span>
                <span className="privacy-text125">Tempora</span>
                <span className="privacy-text126">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="privacy-item">
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="privacy-title1">B2B</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="privacy-text127">Perspiciatis</span>
                <span className="privacy-text128">Nemo voluptatem</span>
                <span className="privacy-text129">Dolore magnam</span>
                <span className="privacy-text130">Tempora</span>
                <span className="privacy-text131">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="privacy-item1">
              <div
                data-role="accordion-trigger"
                className="privacy-trigger2 accordion-trigger accordion-trigger-active"
              >
                <span className="privacy-title2">Tech Startup</span>
              </div>
              <div
                data-role="accordion-content"
                className="accordion-content accordion-content-active"
              >
                <span className="privacy-text132">Perspiciatis</span>
                <span className="privacy-text133">Nemo voluptatem</span>
                <span className="privacy-text134">Dolore magnam</span>
                <span className="privacy-text135">Tempora</span>
                <span className="privacy-text136">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="privacy-item2">
              <div
                data-role="accordion-trigger"
                className="privacy-trigger3 accordion-trigger"
              >
                <span className="privacy-title3">Ecommerce</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="privacy-text137">Perspiciatis</span>
                <span className="privacy-text138">Nemo voluptatem</span>
                <span className="privacy-text139">Dolore magnam</span>
                <span className="privacy-text140">Tempora</span>
                <span className="privacy-text141">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="privacy-item3">
              <div
                data-role="accordion-trigger"
                className="privacy-trigger4 accordion-trigger"
              >
                <span className="privacy-title4">Marketing</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="privacy-text142">Perspiciatis</span>
                <span className="privacy-text143">Nemo voluptatem</span>
                <span className="privacy-text144">Dolore magnam</span>
                <span className="privacy-text145">Tempora</span>
                <span className="privacy-text146">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="privacy-item4">
              <div
                data-role="accordion-trigger"
                className="privacy-trigger5 accordion-trigger"
              >
                <span className="privacy-title5">SAAS</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="privacy-text147">Perspiciatis</span>
                <span className="privacy-text148">Nemo voluptatem</span>
                <span className="privacy-text149">Dolore magnam</span>
                <span className="privacy-text150">Tempora</span>
                <span className="privacy-text151">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="privacy-item5">
              <div
                data-role="accordion-trigger"
                className="privacy-trigger6 accordion-trigger"
              >
                <span className="privacy-title6">Media</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="privacy-text152">Perspiciatis</span>
                <span className="privacy-text153">Nemo voluptatem</span>
                <span className="privacy-text154">Dolore magnam</span>
                <span className="privacy-text155">Tempora</span>
                <span className="privacy-text156">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="privacy-item6">
              <div
                data-role="accordion-trigger"
                className="privacy-trigger7 accordion-trigger"
              >
                <span className="privacy-title7">Social</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="privacy-text157">Perspiciatis</span>
                <span className="privacy-text158">Nemo voluptatem</span>
                <span className="privacy-text159">Dolore magnam</span>
                <span className="privacy-text160">Tempora</span>
                <span className="privacy-text161">Reprehenderit qui</span>
              </div>
            </div>
          </div>
          <div>
            <DangerousHTML
              html={`<script>
      /*
  Accordion - Code Embed
  */

  /* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
  the Accordions will still work*/

  const listenForUrlChangesAccordion = () => {
        let url = location.href;
        document.body.addEventListener(
          "click",
          () => {
            requestAnimationFrame(() => {
              if (url !== location.href) {
                runAccordionCodeEmbed();
                url = location.href;
              }
            });
          },
          true
        );
      };


  const runAccordionCodeEmbed = () => {
      const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
      const allTriggers = document.querySelectorAll('[data-role="accordion-trigger"]'); // All accordion triggers
      const allContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content

      accordionContainers.forEach((container) => {
        const accordionTrigger = container.querySelector('[data-role="accordion-trigger"]'); // Scopped accordion trigger
        const accordionContent = container.querySelector('[data-role="accordion-content"]'); // Scopped accordion content

        accordionTrigger.addEventListener("click", ()=>{
          /*
          Uncomment the code bellow to make all the other sections
          collapse when clicking on one of them.

          allTriggers.forEach(trigger => trigger.classList.remove("accordion-trigger-active"))
          allContents.forEach(content => content.classList.remove("accordion-content-active"))
          */
          if(accordionContent.classList.contains("accordion-content-active")){
            accordionContent.classList.remove("accordion-content-active");
            accordionTrigger.classList.remove("accordion-trigger-active")
          } else {
            accordionContent.classList.add("accordion-content-active");
            accordionTrigger.classList.add("accordion-trigger-active")
          }
        })

      });
  }

  runAccordionCodeEmbed()
  listenForUrlChangesAccordion()

  /*
  Here's what the above is doing:
      1. Selects all accordion containers, contents, and icons
      2. Hides all accordion contents
      3. Adds an event listener to each accordion container
      4. When an accordion container is clicked, it:
          - Hides all accordion contents
          - Resets all icon transforms to 0deg (default)
          - Checks if this container has class "accordion-open"
              - If it does, it removes class "accordion-open"
              - If it doesn't, it:
                  - Removes class "accordion-open" from all containers
                  - Adds class "accordion-open" to this container
                  - Shows accordion content
                  - Rotates accordion icon 180deg
  */
</script>
`}
            ></DangerousHTML>
          </div>
        </div>
      </div>
      <div className="privacy-section">
        <div className="privacy-case-studies">
          <div className="privacy-caption4">
            <span className="privacy-text162">Roadmap</span>
            <div className="privacy-date-range">
              <span className="privacy-text163">JUNE 2023</span>
              <span className="privacy-text164">——</span>
              <span className="privacy-text165">DEC 2024</span>
            </div>
          </div>
        </div>
        <div className="privacy-testimonials">
          <div className="privacy-header1">
            <span className="privacy-caption5">What our clients say</span>
            <div className="privacy-controls">
              <svg
                id="quote-previous"
                viewBox="0 0 1024 1024"
                className="privacy-icon"
              >
                <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
              <span className="privacy-text166">——</span>
              <svg
                id="quote-next"
                viewBox="0 0 1024 1024"
                className="privacy-icon2"
              >
                <path d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
              </svg>
            </div>
          </div>
          <div className="privacy-row">
            <div className="quote">
              <Testimonial rootClassName="testimonial-root-class-name21"></Testimonial>
            </div>
            <div className="privacy-quote1 quote">
              <Testimonial
                Name="Coco White"
                Avatar="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&amp;ixlib=rb-4.0.3&amp;h=200"
                Origin="@white_co"
                rootClassName="testimonial-root-class-name22"
              ></Testimonial>
            </div>
            <div className="quote">
              <Testimonial
                Avatar="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY5NzI4OTg4&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="testimonial-root-class-name23"
              ></Testimonial>
            </div>
            <div className="privacy-gradiant"></div>
          </div>
        </div>
      </div>
      <div className="privacy-book">
        <div className="privacy-content1">
          <div className="privacy-left">
            <h2 className="privacy-text167">
              <span>Early Access</span>
              <br></br>
            </h2>
            <span className="privacy-description6">
              We&apos;re working as fast as we responsibly can. Hang tight for a
              little while longer. And use the time to prepare yourself for the
              greatest digital transformation humans have ever experienced!
            </span>
            <form className="privacy-form">
              <input
                type="text"
                placeholder="email"
                className="privacy-textinput input"
              />
              <div className="privacy-container2">
                <input type="checkbox" checked="true" />
                <span>
                  You may store for the purpose of notifying me when it&apos;s
                  my turn
                </span>
              </div>
              <div className="privacy-container3"></div>
              <button className="privacy-button button">
                <span className="privacy-text171">Join the Waitlist</span>
              </button>
            </form>
          </div>
          <img alt="image" src="/computer.svg" className="privacy-image" />
        </div>
      </div>
      <footer className="privacy-footer">
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Privacy
