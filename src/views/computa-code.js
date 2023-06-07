import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Testimonial from '../components/testimonial'
import Footer from '../components/footer'
import './computa-code.css'

const ComputaCode = (props) => {
  return (
    <div className="computa-code-container">
      <Helmet>
        <title>ComputaCode - ComputaCo</title>
        <meta
          name="description"
          content="ComputaCo\nComputaCode\nComputatrum\nComputaCombinator\nComputation Redefined\nHuman-Machine Interaction"
        />
        <meta property="og:title" content="ComputaCode - ComputaCo" />
        <meta
          property="og:description"
          content="ComputaCo\nComputaCode\nComputatrum\nComputaCombinator\nComputation Redefined\nHuman-Machine Interaction"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="computa-code-hero">
        <div className="computa-code-header">
          <h1 className="computa-code-text">
            <span className="computa-code-text001">Computa</span>
            <span className="computa-code-text002">Code</span>
          </h1>
          <h2>
            <span>The future of autonomous software engineering</span>
            <br></br>
          </h2>
          <div className="computa-code-container1">
            <img alt="image" src="/mouse.svg" className="computa-code-image" />
            <span>Coming soon</span>
          </div>
        </div>
        <div className="computa-code-hero-image">
          <img alt="image" src="/logo.svg" className="computa-code-image01" />
        </div>
      </div>
      <div className="computa-code-who">
        <div className="computa-code-header1">
          <div className="computa-code-heading">
            <h2 className="computa-code-text007">
              ComputaCo. Redefining Computation. Revolutionizing Tomorrow.
            </h2>
            <span className="computa-code-text008">
              We aim to redefine the very nature of computation, facilitating
              seamless information exchange between individuals and machines,
              and in the process, unlocking unparalleled levels of productivity
              and creativity. We&apos;re not just building smarter systems;
              we&apos;re building a smarter future.
            </span>
          </div>
        </div>
        <div className="computa-code-preview">
          <div className="computa-code-image02">
            <img
              alt="image"
              src="/preview.svg"
              className="computa-code-image03"
            />
          </div>
          <div className="computa-code-video">
            <video
              src
              poster="/video.svg"
              className="computa-code-video1"
            ></video>
          </div>
        </div>
      </div>
      <div className="computa-code-information">
        <span className="computa-code-description">
          Imagine a world where software engineering is as natural as
          conversation and as efficient as the human brain. This is the world
          ComputaCo envisions with ComputaCode, our ambitious blueprint for the
          future of computation.
        </span>
        <span className="computa-code-description01">
          ComputaCode, currently in the conceptual stages, aims to be an
          autonomous software engineer capable of understanding your unique
          needs and transforming them into effective, efficient software
          solutions. It&apos;s not about replacing the human touch in
          coding—it&apos;s about enhancing it with a system designed to
          interpret individual requirements and turn them into digital reality.
        </span>
        <span className="computa-code-description02">
          This groundbreaking AI system represents our vision of a significant
          leap forward in how we design and develop software. We foresee a shift
          from intricate code writing to an effortless process driven by your
          ideas.
        </span>
        <div className="computa-code-purpose">
          <h2 className="computa-code-caption">From Conversation to Code</h2>
          <span className="computa-code-description03">
            No more jargon, no more barriers. We&apos;re transforming coding
            into conversation. Just imagine it—your ideas flowing into
            existence.
          </span>
        </div>
        <div className="computa-code-purpose1">
          <h2 className="computa-code-caption01">
            <span>Intelligence that Grows with You</span>
            <br></br>
          </h2>
          <span className="computa-code-description04">
            We&apos;re designing ComputaCode to be a learner, adapter, and
            evolver. Our goal is that, unlike human engineers, ComputaCode will
            work tirelessly, immune to typos, forgetfulness, and learning
            fatigue. We aim to harness advanced machine learning algorithms,
            enabling it to continually improve its understanding of your needs
            for a highly personalized software development process.
          </span>
        </div>
        <div className="computa-code-purpose2">
          <h2 className="computa-code-caption02">
            <span>Empowering Limitless Creativity</span>
            <br></br>
          </h2>
          <span className="computa-code-description05">
            With ComputaCode, we hope your imagination will be the limit.
            We&apos;re working to make this AI-powered system capable of
            transforming your boldest ideas into fully functional software
            without requiring you to write a single line of code. From
            pioneering mobile apps to intricate data analytics platforms,
            we&apos;re building ComputaCode to help turn your creative vision
            into reality.
          </span>
        </div>
        <div className="computa-code-purpose3">
          <h2 className="computa-code-caption03">
            <span>Accelerating Unprecedented Productivity</span>
            <br></br>
          </h2>
          <span className="computa-code-description06">
            We&apos;re designing ComputaCode to not only simplify the software
            engineering process, but to also make it exponentially more
            productive. By automating traditional code writing, ComputaCode will
            let you focus on what truly matters—conceptualizing ideas and
            solving problems. We&apos;re saying goodbye to debugging marathons
            and hello to a surge in productivity.
          </span>
        </div>
        <div className="computa-code-purpose4">
          <h2 className="computa-code-caption04">
            Prioritizing Privacy and Security
          </h2>
          <span className="computa-code-description07">
            We understand the value of trust, and that’s why we’re placing
            privacy and security at the forefront of ComputaCode’s design. Our
            aim is for ComputaCode to handle your data with the utmost care,
            ensuring all your interactions are confidential and protected.
          </span>
        </div>
        <div className="computa-code-industries">
          <span className="computa-code-caption05">INDUSTRIES</span>
          <div className="computa-code-list">
            <div
              data-role="accordion-container"
              className="computa-code-accordion"
            >
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="computa-code-title">Education</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computa-code-text015">Perspiciatis</span>
                <span className="computa-code-text016">Nemo voluptatem</span>
                <span className="computa-code-text017">Dolore magnam</span>
                <span className="computa-code-text018">Tempora</span>
                <span className="computa-code-text019">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="computa-code-item">
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="computa-code-title01">B2B</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computa-code-text020">Perspiciatis</span>
                <span className="computa-code-text021">Nemo voluptatem</span>
                <span className="computa-code-text022">Dolore magnam</span>
                <span className="computa-code-text023">Tempora</span>
                <span className="computa-code-text024">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="computa-code-item1">
              <div
                data-role="accordion-trigger"
                className="computa-code-trigger2 accordion-trigger accordion-trigger-active"
              >
                <span className="computa-code-title02">Tech Startup</span>
              </div>
              <div
                data-role="accordion-content"
                className="accordion-content accordion-content-active"
              >
                <span className="computa-code-text025">Perspiciatis</span>
                <span className="computa-code-text026">Nemo voluptatem</span>
                <span className="computa-code-text027">Dolore magnam</span>
                <span className="computa-code-text028">Tempora</span>
                <span className="computa-code-text029">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="computa-code-item2">
              <div
                data-role="accordion-trigger"
                className="computa-code-trigger3 accordion-trigger"
              >
                <span className="computa-code-title03">Ecommerce</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computa-code-text030">Perspiciatis</span>
                <span className="computa-code-text031">Nemo voluptatem</span>
                <span className="computa-code-text032">Dolore magnam</span>
                <span className="computa-code-text033">Tempora</span>
                <span className="computa-code-text034">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="computa-code-item3">
              <div
                data-role="accordion-trigger"
                className="computa-code-trigger4 accordion-trigger"
              >
                <span className="computa-code-title04">Marketing</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computa-code-text035">Perspiciatis</span>
                <span className="computa-code-text036">Nemo voluptatem</span>
                <span className="computa-code-text037">Dolore magnam</span>
                <span className="computa-code-text038">Tempora</span>
                <span className="computa-code-text039">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="computa-code-item4">
              <div
                data-role="accordion-trigger"
                className="computa-code-trigger5 accordion-trigger"
              >
                <span className="computa-code-title05">SAAS</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computa-code-text040">Perspiciatis</span>
                <span className="computa-code-text041">Nemo voluptatem</span>
                <span className="computa-code-text042">Dolore magnam</span>
                <span className="computa-code-text043">Tempora</span>
                <span className="computa-code-text044">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="computa-code-item5">
              <div
                data-role="accordion-trigger"
                className="computa-code-trigger6 accordion-trigger"
              >
                <span className="computa-code-title06">Media</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computa-code-text045">Perspiciatis</span>
                <span className="computa-code-text046">Nemo voluptatem</span>
                <span className="computa-code-text047">Dolore magnam</span>
                <span className="computa-code-text048">Tempora</span>
                <span className="computa-code-text049">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="computa-code-item6">
              <div
                data-role="accordion-trigger"
                className="computa-code-trigger7 accordion-trigger"
              >
                <span className="computa-code-title07">Social</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computa-code-text050">Perspiciatis</span>
                <span className="computa-code-text051">Nemo voluptatem</span>
                <span className="computa-code-text052">Dolore magnam</span>
                <span className="computa-code-text053">Tempora</span>
                <span className="computa-code-text054">Reprehenderit qui</span>
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
        <span className="computa-code-description08">
          At ComputaCo, we believe in the transformative power of AI.
          ComputaCode represents our vision of this transformation—an autonomous
          software engineer that will work alongside you, anticipate your needs,
          adapt to your preferences, and accelerate your productivity.
        </span>
      </div>
      <div className="computa-code-section">
        <div className="computa-code-case-studies">
          <div className="computa-code-caption06">
            <span className="computa-code-text055">Roadmap</span>
            <div className="computa-code-date-range">
              <span className="computa-code-text056">JUNE 2023</span>
              <span className="computa-code-text057">——</span>
              <span className="computa-code-text058">DEC 2024</span>
            </div>
          </div>
        </div>
        <div className="computa-code-testimonials">
          <div className="computa-code-header2">
            <span className="computa-code-caption07">What our clients say</span>
            <div className="computa-code-controls">
              <svg
                id="quote-previous"
                viewBox="0 0 1024 1024"
                className="computa-code-icon"
              >
                <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
              <span className="computa-code-text059">——</span>
              <svg
                id="quote-next"
                viewBox="0 0 1024 1024"
                className="computa-code-icon2"
              >
                <path d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
              </svg>
            </div>
          </div>
          <div className="computa-code-row">
            <div className="quote">
              <Testimonial rootClassName="testimonial-root-class-name9"></Testimonial>
            </div>
            <div className="computa-code-quote1 quote">
              <Testimonial
                Name="Coco White"
                Avatar="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&amp;ixlib=rb-4.0.3&amp;h=200"
                Origin="@white_co"
                rootClassName="testimonial-root-class-name10"
              ></Testimonial>
            </div>
            <div className="quote">
              <Testimonial
                Avatar="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY5NzI4OTg4&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="testimonial-root-class-name11"
              ></Testimonial>
            </div>
            <div className="computa-code-gradiant"></div>
          </div>
        </div>
      </div>
      <div className="computa-code-book">
        <div className="computa-code-content1">
          <div className="computa-code-left">
            <h2 className="computa-code-text060">
              <span>Early Access</span>
              <br></br>
            </h2>
            <span className="computa-code-description09">
              Join us as we journey towards the future of computation. With
              ComputaCode, we&apos;ll bring your digital dreams to life
              together.
            </span>
            <form className="computa-code-form">
              <button className="computa-code-button button">
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
            className="computa-code-image04"
          />
        </div>
      </div>
      <div className="computa-code-book1">
        <div className="computa-code-content2">
          <div className="computa-code-left1">
            <h2 className="computa-code-text065">
              <span>Early Access</span>
              <br></br>
            </h2>
            <span className="computa-code-description10">
              We&apos;re working as fast as we responsibly can. Hang tight for a
              little while longer. And use the time to prepare yourself for the
              greatest digital transformation humans have ever experienced!
            </span>
            <form className="computa-code-form1">
              <input
                type="text"
                placeholder="email"
                className="computa-code-textinput input"
              />
              <div className="computa-code-container2">
                <input type="checkbox" checked="true" />
                <span>
                  You may store for the purpose of notifying me when it&apos;s
                  my turn
                </span>
              </div>
              <div className="computa-code-container3"></div>
              <button className="computa-code-button1 button">
                <span className="computa-code-text069">Join the Waitlist</span>
              </button>
            </form>
          </div>
          <img
            alt="image"
            src="/computer.svg"
            className="computa-code-image05"
          />
        </div>
      </div>
      <div className="computa-code-section1">
        <div className="computa-code-about-us">
          <div className="computa-code-header3">
            <h2 className="computa-code-description11">
              ComputaCode: The Future of Autonomous Software Engineering
            </h2>
          </div>
          <div className="computa-code-statistics">
            <div className="computa-code-statistic">
              <span className="computa-code-text070">25</span>
              <span className="computa-code-text071">Years of experience</span>
            </div>
            <div className="computa-code-statistic1">
              <span className="computa-code-text072">40+</span>
              <span className="computa-code-text073">
                Years of Experts on board
              </span>
            </div>
            <div className="computa-code-statistic2">
              <span className="computa-code-text074">300+</span>
              <span className="computa-code-text075">Finished projects</span>
            </div>
            <div className="computa-code-statistic3">
              <span className="computa-code-text076">3</span>
              <span className="computa-code-text077">Offices worldwide</span>
            </div>
          </div>
          <div className="computa-code-dna">
            <span className="computa-code-caption08">the vision</span>
            <span className="computa-code-description12">
              Imagine a world where software engineering is as natural as
              conversation and as efficient as the human brain. This is the
              world ComputaCo envisions with ComputaCode, our ambitious
              blueprint for the future of computation.
            </span>
            <span className="computa-code-description13">
              ComputaCode, currently in the conceptual stages, aims to be an
              autonomous software engineer capable of understanding your unique
              needs and transforming them into effective, efficient software
              solutions. It&apos;s not about replacing the human touch in
              coding—it&apos;s about enhancing it with a system designed to
              interpret individual requirements and turn them into digital
              reality.
            </span>
            <span className="computa-code-description14">
              This groundbreaking AI system represents our vision of a
              significant leap forward in how we design and develop software. We
              foresee a shift from intricate code writing to an effortless
              process driven by your ideas.
            </span>
            <span className="computa-code-caption09">
              <span>Intelligence that Grows with You</span>
              <br></br>
            </span>
            <span className="computa-code-description15">
              We&apos;re designing ComputaCode to be a learner, adapter, and
              evolver. Our goal is that, unlike human engineers, ComputaCode
              will work tirelessly, immune to typos, forgetfulness, and learning
              fatigue. We aim to harness advanced machine learning algorithms,
              enabling it to continually improve its understanding of your needs
              for a highly personalized software development process.
            </span>
            <span className="computa-code-caption10">
              <span>Empowering Limitless Creativity</span>
              <br></br>
            </span>
            <span className="computa-code-description16">
              With ComputaCode, we hope your imagination will be the limit.
              We&apos;re working to make this AI-powered system capable of
              transforming your boldest ideas into fully functional software
              without requiring you to write a single line of code. From
              pioneering mobile apps to intricate data analytics platforms,
              we&apos;re building ComputaCode to help turn your creative vision
              into reality.
            </span>
            <span className="computa-code-caption11">
              <span>Accelerating Unprecedented Productivity</span>
              <br></br>
            </span>
            <span className="computa-code-description17">
              We are ComputaCo. We&apos;re reimagining what computation means,
              reengineering the relationship between humans and machines, and
              reshaping the landscape of productivity and creativity.
            </span>
            <span className="computa-code-description18">
              Join us as we embark on this transformative journey. Let&apos;s
              redefine the future of computation together.
            </span>
          </div>
          <div className="computa-code-gallery">
            <img
              alt="image"
              src="/unsplash-image-700w.jpeg"
              className="computa-code-image06"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHx8fDE2ODYxNTM5Nzl8MA&amp;ixlib=rb-4.0.3&amp;w=800"
              className="computa-code-image07"
            />
          </div>
          <div className="computa-code-recruit">
            <div className="computa-code-container4">
              <h2 className="computa-code-text084">
                <span>Calling all intelligences</span>
                <br></br>
              </h2>
              <span className="computa-code-description19">
                <span className="computa-code-text087">
                  We hold ourselves to high standards. Specifically, we&apos;re
                  looking for engineers who are
                </span>
                <span> </span>
                <br></br>
              </span>
            </div>
            <div className="computa-code-sections">
              <div className="computa-code-section2">
                <span className="computa-code-text090">
                  <span>trailblazers</span>
                  <br></br>
                </span>
                <span className="computa-code-text093">
                  ones constantly pushing the envelope, who aren&apos;t afraid
                  to challenge the status quo, never settling for &quot;good
                  enough&quot;
                </span>
              </div>
              <div className="computa-code-section3">
                <span className="computa-code-text094">
                  <span>team players</span>
                  <br></br>
                </span>
                <span className="computa-code-text097">
                  authentic, humble, empathetic, kind individuals
                </span>
              </div>
              <div className="computa-code-section4">
                <span className="computa-code-text098">
                  <span>automators</span>
                  <br></br>
                </span>
                <span className="computa-code-text101">
                  <span>
                    someone who is resourceful with their intelligence and time,
                    who delegates extensively to AI
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="computa-code-section5">
                <span className="computa-code-text104">learners</span>
                <span className="computa-code-text105">
                  someone who actually reads the papers, doesn&apos;t rely on
                  &quot;the way it was done last month&quot;
                </span>
              </div>
            </div>
            <span className="computa-code-description20">
              <span>Is ComputaCo is your calling?</span>
              <br></br>
            </span>
            <button className="computa-code-button2 button">
              <span className="computa-code-text108">
                <span>join us</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <footer className="computa-code-footer">
        <Footer></Footer>
        <div className="computa-code-content3">
          <div className="computa-code-contact">
            <span className="computa-code-email">hello@computaco.ai</span>
            <span className="computa-code-number">+1 682.351.8740</span>
          </div>
          <div className="computa-code-links-row">
            <div className="computa-code-links-column">
              <span className="computa-code-link01">Responsive Web Design</span>
              <span className="computa-code-link02">Design to Code</span>
              <span className="computa-code-link03">
                Static Website Designer
              </span>
              <span className="computa-code-link04">
                Static Website Generator
              </span>
            </div>
            <div className="computa-code-links-column1">
              <span className="computa-code-link05">About</span>
              <span className="computa-code-link06">Team</span>
              <span className="computa-code-link07">News</span>
              <span className="computa-code-link08">Partners</span>
              <span className="computa-code-link09">Careers</span>
              <span className="computa-code-link10">Press &amp; Media</span>
            </div>
          </div>
        </div>
        <div className="computa-code-locations">
          <div className="computa-code-location">
            <span className="computa-code-title08">United States</span>
            <span className="computa-code-details07">
              <span>90210 Broadway Street</span>
              <br></br>
              <span>San Francisco</span>
              <br></br>
              <br></br>
              <span>hola_us@hola.studio</span>
            </span>
          </div>
          <div className="computa-code-location1">
            <span className="computa-code-title09">Romania</span>
            <span className="computa-code-details08">
              <span>115 Turzii Road</span>
              <br></br>
              <span>Cluj Napoca</span>
              <br></br>
              <br></br>
              <span>hola_ro@hola.studio</span>
            </span>
          </div>
          <div className="computa-code-location2">
            <span className="computa-code-title10">United Kingdom</span>
            <span className="computa-code-details09">
              <span>87–135 Brompton Road</span>
              <br></br>
              <span>London</span>
              <br></br>
              <br></br>
              <span>hola_uk@hola.studio</span>
            </span>
          </div>
          <div className="computa-code-location3">
            <span className="computa-code-title11">Spain</span>
            <span className="computa-code-details10">
              <span>34-36 Carrer de Tele</span>
              <br></br>
              <span>Barcelona</span>
              <br></br>
              <br></br>
              <span>hola_sp@hola.studio</span>
            </span>
          </div>
        </div>
        <div className="computa-code-socials">
          <div className="computa-code-row1">
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
          <div className="computa-code-row2">
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

export default ComputaCode
