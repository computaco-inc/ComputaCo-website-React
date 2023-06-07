import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Testimonial from '../components/testimonial'
import Footer from '../components/footer'
import './computatrum.css'

const Computatrum = (props) => {
  return (
    <div className="computatrum-container">
      <Helmet>
        <title>Computatrum - ComputaCo</title>
        <meta
          name="description"
          content="ComputaCo\nComputaCode\nComputatrum\nComputaCombinator\nComputation Redefined\nHuman-Machine Interaction"
        />
        <meta property="og:title" content="Computatrum - ComputaCo" />
        <meta
          property="og:description"
          content="ComputaCo\nComputaCode\nComputatrum\nComputaCombinator\nComputation Redefined\nHuman-Machine Interaction"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="computatrum-hero">
        <div className="computatrum-header">
          <h1 className="computatrum-text">Computatrum</h1>
          <h2>
            <span>Redefining human-computa symbiosis</span>
            <br></br>
          </h2>
          <div className="computatrum-container1">
            <img alt="image" src="/mouse.svg" className="computatrum-image" />
            <span>Coming soon</span>
          </div>
        </div>
        <div className="computatrum-hero-image">
          <img alt="image" src="/logo.svg" className="computatrum-image01" />
        </div>
      </div>
      <div className="computatrum-who">
        <div className="computatrum-header1">
          <div className="computatrum-heading">
            <h2 className="computatrum-text005">
              ComputaCo. Redefining Computation. Revolutionizing Tomorrow.
            </h2>
            <span className="computatrum-text006">
              We aim to redefine the very nature of computation, facilitating
              seamless information exchange between individuals and machines,
              and in the process, unlocking unparalleled levels of productivity
              and creativity. We&apos;re not just building smarter systems;
              we&apos;re building a smarter future.
            </span>
          </div>
        </div>
        <div className="computatrum-preview">
          <div className="computatrum-image02">
            <img
              alt="image"
              src="/preview.svg"
              className="computatrum-image03"
            />
          </div>
          <div className="computatrum-video">
            <video
              src
              poster="/video.svg"
              className="computatrum-video1"
            ></video>
          </div>
        </div>
      </div>
      <div className="computatrum-information">
        <span className="computatrum-description">
          <span>Imagine a computer that understands you,</span>
          <span>
             not only responding to your voice commands but also adapting to
            your unique digital behaviors across all your devices. This is our
            vision for Computatrum—a tool that does more than execute
            instructions; it learns, anticipates, and enhances your every
            interaction. Whether you&apos;re drafting an email, browsing a
            webpage, or navigating a complex application, Computatrum studies
            your habits and provides intelligent assistance, making your tasks
            quicker and more efficient. It&apos;s more than a tool; it&apos;s
            your personal digital ally in a world increasingly reliant on
            technology.
          </span>
        </span>
        <div className="computatrum-purpose">
          <h2 className="computatrum-caption">
            <span>Command Your Digital World</span>
            <br></br>
          </h2>
          <span className="computatrum-description01">
            Whether manipulating a complex 3D model with only a few
            gestures, composing an email with unspoken words, or subtly guide
            your cursor towards a task on your to-do list—only to have
            Computatrum complete the action for you—it&apos;s about getting your
            work done faster and more intuitively, with your devices attuned to
            your needs.
          </span>
        </div>
        <div className="computatrum-purpose1">
          <h2 className="computatrum-caption01">Ubiquitous INTELLIGENCE</h2>
          <span className="computatrum-description02">
            Whether you&apos;re typing an email, browsing a webpage, or
            navigating an app, Computatrum watches your behavior across all your
            devices and learns your habits. It&apos;s not about replacing your
            input; it&apos;s about enhancing it, helping you accomplish tasks
            quicker and more efficiently.
          </span>
        </div>
        <div className="computatrum-purpose2">
          <h2 className="computatrum-caption02">
            <span>Anticipatory Computing</span>
            <br></br>
          </h2>
          <span className="computatrum-description03">
            Imagine your computer starts your favorite playlist as you finish
            your work, or your smartphone orders your usual takeout when
            you&apos;re late from the office. With Computatrum, this
            anticipatory computing is possible. By learning your patterns,
            Computatrum preemptively executes tasks, creating a digital
            environment that is truly customized to you.
          </span>
        </div>
        <div className="computatrum-purpose3">
          <h2 className="computatrum-caption03">
            <span>The Future is in Development</span>
            <br></br>
          </h2>
          <span className="computatrum-description04">
            Our team is hard at work, designing the future features of
            Computatrum. We&apos;re building tools that offer real-time
            analytics, intelligent automation, and adaptive learning to bring
            the most out of your digital interactions. Stay tuned as we continue
            to push the boundaries of what&apos;s possible.
          </span>
        </div>
        <div className="computatrum-purpose4"></div>
        <div className="computatrum-industries">
          <span className="computatrum-caption04">INDUSTRIES</span>
          <div className="computatrum-list">
            <div
              data-role="accordion-container"
              className="computatrum-accordion"
            >
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="computatrum-title">Education</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computatrum-text015">Perspiciatis</span>
                <span className="computatrum-text016">Nemo voluptatem</span>
                <span className="computatrum-text017">Dolore magnam</span>
                <span className="computatrum-text018">Tempora</span>
                <span className="computatrum-text019">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="computatrum-item">
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="computatrum-title01">B2B</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computatrum-text020">Perspiciatis</span>
                <span className="computatrum-text021">Nemo voluptatem</span>
                <span className="computatrum-text022">Dolore magnam</span>
                <span className="computatrum-text023">Tempora</span>
                <span className="computatrum-text024">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="computatrum-item1">
              <div
                data-role="accordion-trigger"
                className="computatrum-trigger2 accordion-trigger accordion-trigger-active"
              >
                <span className="computatrum-title02">Tech Startup</span>
              </div>
              <div
                data-role="accordion-content"
                className="accordion-content accordion-content-active"
              >
                <span className="computatrum-text025">Perspiciatis</span>
                <span className="computatrum-text026">Nemo voluptatem</span>
                <span className="computatrum-text027">Dolore magnam</span>
                <span className="computatrum-text028">Tempora</span>
                <span className="computatrum-text029">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="computatrum-item2">
              <div
                data-role="accordion-trigger"
                className="computatrum-trigger3 accordion-trigger"
              >
                <span className="computatrum-title03">Ecommerce</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computatrum-text030">Perspiciatis</span>
                <span className="computatrum-text031">Nemo voluptatem</span>
                <span className="computatrum-text032">Dolore magnam</span>
                <span className="computatrum-text033">Tempora</span>
                <span className="computatrum-text034">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="computatrum-item3">
              <div
                data-role="accordion-trigger"
                className="computatrum-trigger4 accordion-trigger"
              >
                <span className="computatrum-title04">Marketing</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computatrum-text035">Perspiciatis</span>
                <span className="computatrum-text036">Nemo voluptatem</span>
                <span className="computatrum-text037">Dolore magnam</span>
                <span className="computatrum-text038">Tempora</span>
                <span className="computatrum-text039">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="computatrum-item4">
              <div
                data-role="accordion-trigger"
                className="computatrum-trigger5 accordion-trigger"
              >
                <span className="computatrum-title05">SAAS</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computatrum-text040">Perspiciatis</span>
                <span className="computatrum-text041">Nemo voluptatem</span>
                <span className="computatrum-text042">Dolore magnam</span>
                <span className="computatrum-text043">Tempora</span>
                <span className="computatrum-text044">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="computatrum-item5">
              <div
                data-role="accordion-trigger"
                className="computatrum-trigger6 accordion-trigger"
              >
                <span className="computatrum-title06">Media</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computatrum-text045">Perspiciatis</span>
                <span className="computatrum-text046">Nemo voluptatem</span>
                <span className="computatrum-text047">Dolore magnam</span>
                <span className="computatrum-text048">Tempora</span>
                <span className="computatrum-text049">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="computatrum-item6">
              <div
                data-role="accordion-trigger"
                className="computatrum-trigger7 accordion-trigger"
              >
                <span className="computatrum-title07">Social</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computatrum-text050">Perspiciatis</span>
                <span className="computatrum-text051">Nemo voluptatem</span>
                <span className="computatrum-text052">Dolore magnam</span>
                <span className="computatrum-text053">Tempora</span>
                <span className="computatrum-text054">Reprehenderit qui</span>
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
      <div className="computatrum-section">
        <div className="computatrum-case-studies">
          <div className="computatrum-caption05">
            <span className="computatrum-text055">Roadmap</span>
            <div className="computatrum-date-range">
              <span className="computatrum-text056">JUNE 2023</span>
              <span className="computatrum-text057">——</span>
              <span className="computatrum-text058">DEC 2024</span>
            </div>
          </div>
        </div>
        <div className="computatrum-testimonials">
          <div className="computatrum-header2">
            <span className="computatrum-caption06">What our clients say</span>
            <div className="computatrum-controls">
              <svg
                id="quote-previous"
                viewBox="0 0 1024 1024"
                className="computatrum-icon"
              >
                <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
              <span className="computatrum-text059">——</span>
              <svg
                id="quote-next"
                viewBox="0 0 1024 1024"
                className="computatrum-icon2"
              >
                <path d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
              </svg>
            </div>
          </div>
          <div className="computatrum-row">
            <div className="quote">
              <Testimonial rootClassName="testimonial-root-class-name15"></Testimonial>
            </div>
            <div className="computatrum-quote1 quote">
              <Testimonial
                Name="Coco White"
                Avatar="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&amp;ixlib=rb-4.0.3&amp;h=200"
                Origin="@white_co"
                rootClassName="testimonial-root-class-name16"
              ></Testimonial>
            </div>
            <div className="quote">
              <Testimonial
                Avatar="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY5NzI4OTg4&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="testimonial-root-class-name17"
              ></Testimonial>
            </div>
            <div className="computatrum-gradiant"></div>
          </div>
        </div>
      </div>
      <div className="computatrum-book">
        <div className="computatrum-content1">
          <div className="computatrum-left">
            <h2 className="computatrum-text060">
              Join Us in Redefining the Future
            </h2>
            <span className="computatrum-description05">
              We&apos;re excited to share this journey with you. As we continue
              to develop Computatrum, we invite you to stay updated with us.
              Experience the evolution of human-computer interaction firsthand
              and join us in shaping the future of computation.
            </span>
            <form className="computatrum-form">
              <button className="computatrum-button button">
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
          <img
            alt="image"
            src="/computer.svg"
            className="computatrum-image04"
          />
        </div>
      </div>
      <div className="computatrum-book1">
        <div className="computatrum-content2">
          <div className="computatrum-left1">
            <h2 className="computatrum-text063">
              <span>Early Access</span>
              <br></br>
            </h2>
            <span className="computatrum-description06">
              We&apos;re working as fast as we responsibly can. Hang tight for a
              little while longer. And use the time to prepare yourself for the
              greatest digital transformation humans have ever experienced!
            </span>
            <form className="computatrum-form1">
              <input
                type="text"
                placeholder="email"
                className="computatrum-textinput input"
              />
              <div className="computatrum-container2">
                <input type="checkbox" checked="true" />
                <span>
                  You may store for the purpose of notifying me when it&apos;s
                  my turn
                </span>
              </div>
              <div className="computatrum-container3"></div>
              <button className="computatrum-button1 button">
                <span className="computatrum-text067">Join the Waitlist</span>
              </button>
            </form>
          </div>
          <img
            alt="image"
            src="/computer.svg"
            className="computatrum-image05"
          />
        </div>
      </div>
      <div className="computatrum-section1">
        <div className="computatrum-about-us">
          <div className="computatrum-header3">
            <h2 className="computatrum-description07">
              ComputaCode: The Future of Autonomous Software Engineering
            </h2>
          </div>
          <div className="computatrum-statistics">
            <div className="computatrum-statistic">
              <span className="computatrum-text068">25</span>
              <span className="computatrum-text069">Years of experience</span>
            </div>
            <div className="computatrum-statistic1">
              <span className="computatrum-text070">40+</span>
              <span className="computatrum-text071">
                Years of Experts on board
              </span>
            </div>
            <div className="computatrum-statistic2">
              <span className="computatrum-text072">300+</span>
              <span className="computatrum-text073">Finished projects</span>
            </div>
            <div className="computatrum-statistic3">
              <span className="computatrum-text074">3</span>
              <span className="computatrum-text075">Offices worldwide</span>
            </div>
          </div>
          <div className="computatrum-dna">
            <span className="computatrum-caption07">the vision</span>
            <span className="computatrum-description08">
              Imagine a world where software engineering is as natural as
              conversation and as efficient as the human brain. This is the
              world ComputaCo envisions with ComputaCode, our ambitious
              blueprint for the future of computation.
            </span>
            <span className="computatrum-description09">
              ComputaCode, currently in the conceptual stages, aims to be an
              autonomous software engineer capable of understanding your unique
              needs and transforming them into effective, efficient software
              solutions. It&apos;s not about replacing the human touch in
              coding—it&apos;s about enhancing it with a system designed to
              interpret individual requirements and turn them into digital
              reality.
            </span>
            <span className="computatrum-description10">
              This groundbreaking AI system represents our vision of a
              significant leap forward in how we design and develop software. We
              foresee a shift from intricate code writing to an effortless
              process driven by your ideas.
            </span>
            <span className="computatrum-caption08">
              <span>Intelligence that Grows with You</span>
              <br></br>
            </span>
            <span className="computatrum-description11">
              We&apos;re designing ComputaCode to be a learner, adapter, and
              evolver. Our goal is that, unlike human engineers, ComputaCode
              will work tirelessly, immune to typos, forgetfulness, and learning
              fatigue. We aim to harness advanced machine learning algorithms,
              enabling it to continually improve its understanding of your needs
              for a highly personalized software development process.
            </span>
            <span className="computatrum-caption09">
              <span>Empowering Limitless Creativity</span>
              <br></br>
            </span>
            <span className="computatrum-description12">
              With ComputaCode, we hope your imagination will be the limit.
              We&apos;re working to make this AI-powered system capable of
              transforming your boldest ideas into fully functional software
              without requiring you to write a single line of code. From
              pioneering mobile apps to intricate data analytics platforms,
              we&apos;re building ComputaCode to help turn your creative vision
              into reality.
            </span>
            <span className="computatrum-caption10">
              <span>Accelerating Unprecedented Productivity</span>
              <br></br>
            </span>
            <span className="computatrum-description13">
              We are ComputaCo. We&apos;re reimagining what computation means,
              reengineering the relationship between humans and machines, and
              reshaping the landscape of productivity and creativity.
            </span>
            <span className="computatrum-description14">
              Join us as we embark on this transformative journey. Let&apos;s
              redefine the future of computation together.
            </span>
          </div>
          <div className="computatrum-gallery">
            <img
              alt="image"
              src="/unsplash-image-700w.jpeg"
              className="computatrum-image06"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHx8fDE2ODYxNTM5Nzl8MA&amp;ixlib=rb-4.0.3&amp;w=800"
              className="computatrum-image07"
            />
          </div>
          <div className="computatrum-recruit">
            <div className="computatrum-container4">
              <h2 className="computatrum-text082">
                <span>Calling all intelligences</span>
                <br></br>
              </h2>
              <span className="computatrum-description15">
                <span className="computatrum-text085">
                  We hold ourselves to high standards. Specifically, we&apos;re
                  looking for engineers who are
                </span>
                <span> </span>
                <br></br>
              </span>
            </div>
            <div className="computatrum-sections">
              <div className="computatrum-section2">
                <span className="computatrum-text088">
                  <span>trailblazers</span>
                  <br></br>
                </span>
                <span className="computatrum-text091">
                  ones constantly pushing the envelope, who aren&apos;t afraid
                  to challenge the status quo, never settling for &quot;good
                  enough&quot;
                </span>
              </div>
              <div className="computatrum-section3">
                <span className="computatrum-text092">
                  <span>team players</span>
                  <br></br>
                </span>
                <span className="computatrum-text095">
                  authentic, humble, empathetic, kind individuals
                </span>
              </div>
              <div className="computatrum-section4">
                <span className="computatrum-text096">
                  <span>automators</span>
                  <br></br>
                </span>
                <span className="computatrum-text099">
                  <span>
                    someone who is resourceful with their intelligence and time,
                    who delegates extensively to AI
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="computatrum-section5">
                <span className="computatrum-text102">learners</span>
                <span className="computatrum-text103">
                  someone who actually reads the papers, doesn&apos;t rely on
                  &quot;the way it was done last month&quot;
                </span>
              </div>
            </div>
            <span className="computatrum-description16">
              <span>Is ComputaCo is your calling?</span>
              <br></br>
            </span>
            <button className="computatrum-button2 button">
              <span className="computatrum-text106">
                <span>join us</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <footer className="computatrum-footer">
        <Footer></Footer>
        <div className="computatrum-content3">
          <div className="computatrum-contact">
            <span className="computatrum-email">hello@computaco.ai</span>
            <span className="computatrum-number">+1 682.351.8740</span>
          </div>
          <div className="computatrum-links-row">
            <div className="computatrum-links-column">
              <span className="computatrum-link01">Responsive Web Design</span>
              <span className="computatrum-link02">Design to Code</span>
              <span className="computatrum-link03">
                Static Website Designer
              </span>
              <span className="computatrum-link04">
                Static Website Generator
              </span>
            </div>
            <div className="computatrum-links-column1">
              <span className="computatrum-link05">About</span>
              <span className="computatrum-link06">Team</span>
              <span className="computatrum-link07">News</span>
              <span className="computatrum-link08">Partners</span>
              <span className="computatrum-link09">Careers</span>
              <span className="computatrum-link10">Press &amp; Media</span>
            </div>
          </div>
        </div>
        <div className="computatrum-locations">
          <div className="computatrum-location">
            <span className="computatrum-title08">United States</span>
            <span className="computatrum-details07">
              <span>90210 Broadway Street</span>
              <br></br>
              <span>San Francisco</span>
              <br></br>
              <br></br>
              <span>hola_us@hola.studio</span>
            </span>
          </div>
          <div className="computatrum-location1">
            <span className="computatrum-title09">Romania</span>
            <span className="computatrum-details08">
              <span>115 Turzii Road</span>
              <br></br>
              <span>Cluj Napoca</span>
              <br></br>
              <br></br>
              <span>hola_ro@hola.studio</span>
            </span>
          </div>
          <div className="computatrum-location2">
            <span className="computatrum-title10">United Kingdom</span>
            <span className="computatrum-details09">
              <span>87–135 Brompton Road</span>
              <br></br>
              <span>London</span>
              <br></br>
              <br></br>
              <span>hola_uk@hola.studio</span>
            </span>
          </div>
          <div className="computatrum-location3">
            <span className="computatrum-title11">Spain</span>
            <span className="computatrum-details10">
              <span>34-36 Carrer de Tele</span>
              <br></br>
              <span>Barcelona</span>
              <br></br>
              <br></br>
              <span>hola_sp@hola.studio</span>
            </span>
          </div>
        </div>
        <div className="computatrum-socials">
          <div className="computatrum-row1">
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
          <div className="computatrum-row2">
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

export default Computatrum
