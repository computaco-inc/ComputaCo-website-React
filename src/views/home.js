import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavLinks from '../components/nav-links'
import Testimonial from '../components/testimonial'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>ComputaCo</title>
        <meta
          name="description"
          content="ComputaCo\nComputaCode\nComputatrum\nComputaCombinator\nComputation Redefined\nHuman-Machine Interaction"
        />
        <meta property="og:title" content="ComputaCo" />
        <meta
          property="og:description"
          content="ComputaCo\nComputaCode\nComputatrum\nComputaCombinator\nComputation Redefined\nHuman-Machine Interaction"
        />
      </Helmet>
      <div className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-branding">
            <span className="home-text">ComputaCo</span>
          </div>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-right">
                <NavLinks></NavLinks>
                <div className="home-button">
                  <button className="home-work-with-us button">
                    <span className="home-text001">Sign in / up</span>
                    <img
                      alt="image"
                      src="/hamburger.svg"
                      className="home-image"
                    />
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="home-work-with-us1 button">
              <span className="home-text002">work with us</span>
              <img alt="image" src="/hamburger.svg" className="home-image01" />
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-top">
                <div className="home-branding1">
                  <span className="home-text003">hola studio</span>
                </div>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-middle"
              >
                <div className="home-links">
                  <span className="navLink">work</span>
                  <span className="navLink">services</span>
                  <span className="navLink">contact</span>
                </div>
                <button className="home-work-with-us2 button">
                  <span className="home-text004">work with us</span>
                </button>
              </nav>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-header">
          <h1 className="home-text005">ComputaCo</h1>
          <h2>Redefining Computation. Revolutionizing Tomorrow.</h2>
          <div className="home-container1">
            <img alt="image" src="/mouse.svg" className="home-image02" />
            <span>
              We&apos;re under construction right now. Please come back soon!
            </span>
          </div>
        </div>
        <div className="home-hero-image">
          <img alt="image" src="/logo.svg" className="home-image03" />
        </div>
      </div>
      <div className="home-who">
        <div className="home-header1">
          <div className="home-heading">
            <h2 className="home-text008">
              ComputaCo. Redefining Computation. Revolutionizing Tomorrow.
            </h2>
            <span className="home-text009">
              We aim to redefine the very nature of computation, facilitating
              seamless information exchange between individuals and machines,
              and in the process, unlocking unparalleled levels of productivity
              and creativity. We&apos;re not just building smarter systems;
              we&apos;re building a smarter future.
            </span>
          </div>
        </div>
        <div className="home-preview">
          <div className="home-image04">
            <img alt="image" src="/preview.svg" className="home-image05" />
          </div>
          <div className="home-video">
            <video src poster="/video.svg" className="home-video1"></video>
          </div>
        </div>
      </div>
      <div className="home-information">
        <div className="home-purpose">
          <h2 className="home-caption">From Conversation to Code</h2>
          <span className="home-description">
            No more jargon, no more barriers. We&apos;re transforming coding
            into conversation. Just imagine it—your ideas flowing into
            existence.
          </span>
        </div>
        <div className="home-purpose1">
          <h2 className="home-caption1">Digital Clones, Individual Service</h2>
          <span className="home-description01">
            Your unique personality, replicated in your devices. It&apos;s not
            science fiction; it&apos;s our mission. Personalized digital service
            for yourself and your customers like you&apos;ve never experienced.
          </span>
        </div>
        <div className="home-purpose2">
          <h2 className="home-caption2">Computation on Your Terms.</h2>
          <span className="home-description02">
            We&apos;re giving power back to you. We&apos;re erasing the lines
            between human imagination and computational capacity. Your ideas,
            your commands, your wishes—we&apos;re turning them into
            computational reality.
          </span>
        </div>
        <div className="home-industries">
          <span className="home-caption3">INDUSTRIES</span>
          <div className="home-list">
            <div data-role="accordion-container" className="home-accordion">
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="home-title">Education</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text010">Perspiciatis</span>
                <span className="home-text011">Nemo voluptatem</span>
                <span className="home-text012">Dolore magnam</span>
                <span className="home-text013">Tempora</span>
                <span className="home-text014">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item">
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="home-title01">B2B</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text015">Perspiciatis</span>
                <span className="home-text016">Nemo voluptatem</span>
                <span className="home-text017">Dolore magnam</span>
                <span className="home-text018">Tempora</span>
                <span className="home-text019">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item1">
              <div
                data-role="accordion-trigger"
                className="home-trigger2 accordion-trigger accordion-trigger-active"
              >
                <span className="home-title02">Tech Startup</span>
              </div>
              <div
                data-role="accordion-content"
                className="accordion-content accordion-content-active"
              >
                <span className="home-text020">Perspiciatis</span>
                <span className="home-text021">Nemo voluptatem</span>
                <span className="home-text022">Dolore magnam</span>
                <span className="home-text023">Tempora</span>
                <span className="home-text024">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item2">
              <div
                data-role="accordion-trigger"
                className="home-trigger3 accordion-trigger"
              >
                <span className="home-title03">Ecommerce</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text025">Perspiciatis</span>
                <span className="home-text026">Nemo voluptatem</span>
                <span className="home-text027">Dolore magnam</span>
                <span className="home-text028">Tempora</span>
                <span className="home-text029">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item3">
              <div
                data-role="accordion-trigger"
                className="home-trigger4 accordion-trigger"
              >
                <span className="home-title04">Marketing</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text030">Perspiciatis</span>
                <span className="home-text031">Nemo voluptatem</span>
                <span className="home-text032">Dolore magnam</span>
                <span className="home-text033">Tempora</span>
                <span className="home-text034">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item4">
              <div
                data-role="accordion-trigger"
                className="home-trigger5 accordion-trigger"
              >
                <span className="home-title05">SAAS</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text035">Perspiciatis</span>
                <span className="home-text036">Nemo voluptatem</span>
                <span className="home-text037">Dolore magnam</span>
                <span className="home-text038">Tempora</span>
                <span className="home-text039">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item5">
              <div
                data-role="accordion-trigger"
                className="home-trigger6 accordion-trigger"
              >
                <span className="home-title06">Media</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text040">Perspiciatis</span>
                <span className="home-text041">Nemo voluptatem</span>
                <span className="home-text042">Dolore magnam</span>
                <span className="home-text043">Tempora</span>
                <span className="home-text044">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item6">
              <div
                data-role="accordion-trigger"
                className="home-trigger7 accordion-trigger"
              >
                <span className="home-title07">Social</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text045">Perspiciatis</span>
                <span className="home-text046">Nemo voluptatem</span>
                <span className="home-text047">Dolore magnam</span>
                <span className="home-text048">Tempora</span>
                <span className="home-text049">Reprehenderit qui</span>
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
      <div className="home-section">
        <div className="home-case-studies">
          <div className="home-caption4">
            <span className="home-text050">Roadmap</span>
            <div className="home-date-range">
              <span className="home-text051">JUNE 2023</span>
              <span className="home-text052">——</span>
              <span className="home-text053">DEC 2024</span>
            </div>
          </div>
        </div>
        <div className="home-testimonials">
          <div className="home-header2">
            <span className="home-caption5">What our clients say</span>
            <div className="home-controls">
              <svg
                id="quote-previous"
                viewBox="0 0 1024 1024"
                className="home-icon2"
              >
                <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
              <span className="home-text054">——</span>
              <svg
                id="quote-next"
                viewBox="0 0 1024 1024"
                className="home-icon4"
              >
                <path d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
              </svg>
            </div>
          </div>
          <div className="home-row">
            <div className="quote">
              <Testimonial rootClassName="testimonial-root-class-name"></Testimonial>
            </div>
            <div className="home-quote1 quote">
              <Testimonial
                Name="Coco White"
                Avatar="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&amp;ixlib=rb-4.0.3&amp;h=200"
                Origin="@white_co"
                rootClassName="testimonial-root-class-name1"
              ></Testimonial>
            </div>
            <div className="quote">
              <Testimonial
                Avatar="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY5NzI4OTg4&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="testimonial-root-class-name2"
              ></Testimonial>
            </div>
            <div className="home-gradiant"></div>
          </div>
        </div>
      </div>
      <div className="home-book">
        <div className="home-content1">
          <div className="home-left">
            <h2 className="home-text055">
              <span>Early Access</span>
              <br></br>
            </h2>
            <span className="home-description03">
              We&apos;re working as fast as we responsibly can. Hang tight for a
              little while longer. And use the time to prepare yourself for the
              greatest digital transformation humans have ever experienced!
            </span>
            <form className="home-form">
              <button className="home-button1 button">
                <a
                  href="https://cdn.forms-content.sg-form.com/10525b5f-0547-11ee-ae98-e2f0e34d8c7e"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>join the early access group</span>
                  <br></br>
                </a>
              </button>
            </form>
          </div>
          <img alt="image" src="/computer.svg" className="home-image06" />
        </div>
      </div>
      <div className="home-book1">
        <div className="home-content2">
          <div className="home-left1">
            <h2 className="home-text060">
              <span>Early Access</span>
              <br></br>
            </h2>
            <span className="home-description04">
              We&apos;re working as fast as we responsibly can. Hang tight for a
              little while longer. And use the time to prepare yourself for the
              greatest digital transformation humans have ever experienced!
            </span>
            <form className="home-form1">
              <input
                type="text"
                placeholder="email"
                className="home-textinput input"
              />
              <div className="home-container2">
                <input type="checkbox" checked="true" />
                <span>
                  You may store for the purpose of notifying me when it&apos;s
                  my turn
                </span>
              </div>
              <div className="home-container3"></div>
              <button className="home-button2 button">
                <span className="home-text064">Join the Waitlist</span>
              </button>
            </form>
          </div>
          <img alt="image" src="/computer.svg" className="home-image07" />
        </div>
      </div>
      <div className="home-section1">
        <div className="home-about-us">
          <div className="home-header3">
            <span className="home-caption6">About us</span>
            <h2 className="home-description05">
              The Future of Computation: Introducing ComputaCo
            </h2>
          </div>
          <div className="home-statistics">
            <div className="home-statistic">
              <span className="home-text065">25</span>
              <span className="home-text066">Years of experience</span>
            </div>
            <div className="home-statistic1">
              <span className="home-text067">40+</span>
              <span className="home-text068">Years of Experts on board</span>
            </div>
            <div className="home-statistic2">
              <span className="home-text069">300+</span>
              <span className="home-text070">Finished projects</span>
            </div>
            <div className="home-statistic3">
              <span className="home-text071">3</span>
              <span className="home-text072">Offices worldwide</span>
            </div>
          </div>
          <div className="home-dna">
            <span className="home-caption7">the vision</span>
            <span className="home-description06">
              Imagine a world where humans and computers seamlessly interact at
              every level of abstraction. A world where information zips back
              and forth effortlessly between you and your machines—from thoughts
              to microexpressions, conversation to code, data to decisions. What
              if your computer anticipated your needs, intuitively starting
              tasks before you even spoke? What if each machine could be
              tailored to become a digital replica of your unique personality?
            </span>
            <span className="home-description07">
              Welcome to the vision of ComputaCo.
            </span>
            <span className="home-description08">
              At ComputaCo, we&apos;re not just imagining this world—we&apos;re
              building it. Our mission is to redefine the very nature of
              computation, facilitating seamless information exchange between
              individuals and machines, and in the process, unlocking
              unparalleled levels of productivity and creativity.
            </span>
            <span className="home-description09">
              The transformation we envision is profound. Programming will
              reduce to conversation. Software engineering becomes mere
              specification of requirements and natural feedback. The boundary
              between end-users and developers will blur, as everyone receives
              individualized services from digital clones fine-tuned to their
              needs and preferences. The result? A massive surge in productivity
              and creativity across all sectors and industries.
            </span>
            <span className="home-description10">
              In our pursuit to redefine computation, we stand steadfast in our
              belief that artificial intelligence (AI) holds an immense
              potential to revolutionize industries and spur innovation. This
              conviction is the driving force behind our strategy, and
              we&apos;re building a team of brilliant engineers and experts who
              share our passion for innovation. We are looking for
              visionaries—those who don&apos;t just see the future but want to
              create it.
            </span>
            <span className="home-description11">
              We are ComputaCo. We&apos;re reimagining what computation means,
              reengineering the relationship between humans and machines, and
              reshaping the landscape of productivity and creativity.
            </span>
            <span className="home-description12">
              Join us as we embark on this transformative journey. Let&apos;s
              redefine the future of computation together.
            </span>
          </div>
          <div className="home-gallery">
            <img
              alt="image"
              src="/linkedin-sales-solutions-hrhjn6ztgrm-unsplash%201-700w.png"
              className="home-image08"
            />
            <img
              alt="image"
              src="/austin-distel-800w.png"
              className="home-image09"
            />
          </div>
          <div className="home-recruit">
            <div className="home-container4">
              <h2 className="home-text073">
                <span>Calling all intelligences</span>
                <br></br>
              </h2>
              <span className="home-description13">
                <span className="home-text076">
                  We hold ourselves to high standards. Specifically, we&apos;re
                  looking for engineers who are
                </span>
                <span> </span>
                <br></br>
              </span>
            </div>
            <div className="home-sections">
              <div className="home-section2">
                <span className="home-text079">
                  <span>trailblazers</span>
                  <br></br>
                </span>
                <span className="home-text082">
                  ones constantly pushing the envelope, who aren&apos;t afraid
                  to challenge the status quo, never settling for &quot;good
                  enough&quot;
                </span>
              </div>
              <div className="home-section3">
                <span className="home-text083">
                  <span>team players</span>
                  <br></br>
                </span>
                <span className="home-text086">
                  authentic, humble, empathetic, kind individuals
                </span>
              </div>
              <div className="home-section4">
                <span className="home-text087">
                  <span>automators</span>
                  <br></br>
                </span>
                <span className="home-text090">
                  <span>
                    someone who is resourceful with their intelligence and time,
                    who delegates extensively to AI
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-section5">
                <span className="home-text093">learners</span>
                <span className="home-text094">
                  someone who actually reads the papers, doesn&apos;t rely on
                  &quot;the way it was done last month&quot;
                </span>
              </div>
            </div>
            <span className="home-description14">
              <span>Is ComputaCo is your calling?</span>
              <br></br>
            </span>
            <button className="home-button3 button">
              <span className="home-text097">
                <span>join us</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <Footer></Footer>
        <div className="home-content3">
          <div className="home-contact">
            <span className="home-email">hello@computaco.ai</span>
            <span className="home-number">+1 682.351.8740</span>
          </div>
          <div className="home-links-row">
            <div className="home-links-column">
              <span className="home-link04">Responsive Web Design</span>
              <span className="home-link05">Design to Code</span>
              <span className="home-link06">Static Website Designer</span>
              <span className="home-link07">Static Website Generator</span>
            </div>
            <div className="home-links-column1">
              <span className="home-link08">About</span>
              <span className="home-link09">Team</span>
              <span className="home-link10">News</span>
              <span className="home-link11">Partners</span>
              <span className="home-link12">Careers</span>
              <span className="home-link13">Press &amp; Media</span>
            </div>
          </div>
        </div>
        <div className="home-locations">
          <div className="home-location">
            <span className="home-title08">United States</span>
            <span className="home-details07">
              <span>90210 Broadway Street</span>
              <br></br>
              <span>San Francisco</span>
              <br></br>
              <br></br>
              <span>hola_us@hola.studio</span>
            </span>
          </div>
          <div className="home-location1">
            <span className="home-title09">Romania</span>
            <span className="home-details08">
              <span>115 Turzii Road</span>
              <br></br>
              <span>Cluj Napoca</span>
              <br></br>
              <br></br>
              <span>hola_ro@hola.studio</span>
            </span>
          </div>
          <div className="home-location2">
            <span className="home-title10">United Kingdom</span>
            <span className="home-details09">
              <span>87–135 Brompton Road</span>
              <br></br>
              <span>London</span>
              <br></br>
              <br></br>
              <span>hola_uk@hola.studio</span>
            </span>
          </div>
          <div className="home-location3">
            <span className="home-title11">Spain</span>
            <span className="home-details10">
              <span>34-36 Carrer de Tele</span>
              <br></br>
              <span>Barcelona</span>
              <br></br>
              <br></br>
              <span>hola_sp@hola.studio</span>
            </span>
          </div>
        </div>
        <div className="home-socials">
          <div className="home-row1">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/facebook%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/twitter%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/dribbble%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/instagram%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
          <div className="home-row2">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/linkedin%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/youtube%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/telegram%20-%20negative.svg"
                className="social"
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="image"
                src="/medium%20-%20negative.svg"
                className="social"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
