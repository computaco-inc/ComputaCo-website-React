import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Testimonial from '../components/testimonial'
import Footer from '../components/footer'
import './computa-combinator.css'

const ComputaCombinator = (props) => {
  return (
    <div className="computa-combinator-container">
      <Helmet>
        <title>ComputaCombinator - ComputaCo</title>
        <meta
          name="description"
          content="ComputaCo\nComputaCode\nComputatrum\nComputaCombinator\nComputation Redefined\nHuman-Machine Interaction"
        />
        <meta property="og:title" content="ComputaCombinator - ComputaCo" />
        <meta
          property="og:description"
          content="ComputaCo\nComputaCode\nComputatrum\nComputaCombinator\nComputation Redefined\nHuman-Machine Interaction"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="computa-combinator-hero">
        <div className="computa-combinator-header">
          <h1 className="computa-combinator-text">
            <span className="computa-combinator-text001">Computa</span>
            <span className="computa-combinator-text002">Combinator</span>
            <br></br>
          </h1>
          <h2>
            <span>Turning startup dreams into profit machines</span>
            <br></br>
          </h2>
          <div className="computa-combinator-container1">
            <img
              alt="image"
              src="/mouse.svg"
              className="computa-combinator-image"
            />
            <span>Coming soon</span>
          </div>
        </div>
        <div className="computa-combinator-hero-image">
          <img
            alt="image"
            src="/logo.svg"
            className="computa-combinator-image01"
          />
        </div>
      </div>
      <div className="computa-combinator-who">
        <div className="computa-combinator-header1">
          <div className="computa-combinator-heading">
            <h2 className="computa-combinator-text008">
              ComputaCo. Redefining Computation. Revolutionizing Tomorrow.
            </h2>
            <span className="computa-combinator-text009">
              We aim to redefine the very nature of computation, facilitating
              seamless information exchange between individuals and machines,
              and in the process, unlocking unparalleled levels of productivity
              and creativity. We&apos;re not just building smarter systems;
              we&apos;re building a smarter future.
            </span>
          </div>
        </div>
        <div className="computa-combinator-preview">
          <div className="computa-combinator-image02">
            <img
              alt="image"
              src="/preview.svg"
              className="computa-combinator-image03"
            />
          </div>
          <div className="computa-combinator-video">
            <video
              src
              poster="/video.svg"
              className="computa-combinator-video1"
            ></video>
          </div>
        </div>
      </div>
      <div className="computa-combinator-information">
        <span className="computa-combinator-description">
          <span>
            As the world of innovation grows faster and more dynamic, we believe
            that the process of transforming an idea into a fully-fledged
            business needs to be swift, efficient, and streamlined. That&apos;s
            the driving force behind ComputaCombinator.
          </span>
          <br></br>
        </span>
        <span className="computa-combinator-description01">
          <span>
            We&apos;re preparing an accelerator that transforms start-up ideas
            into a profit machines in just three days. Powered by
            ComputaCo&apos;s comprehensive suite of automation tools,
            ComputaCombinator will aim to facilitate end-to-end business
            processes, from sales and marketing to development and public
            relations.
          </span>
          <br></br>
        </span>
        <div className="computa-combinator-purpose">
          <h2 className="computa-combinator-caption">
            <span>Building in Public, Together</span>
            <br></br>
          </h2>
          <span className="computa-combinator-description02">
            In embracing the #buildinpublic movement, we aim to livestream
            ComputaCombinator sessions on Twitter Spaces. This transparent
            approach will not only foster community, but also provide real-time
            insights, collaboration, and feedback—an invaluable resource for any
            burgeoning start-up.
          </span>
        </div>
        <div className="computa-combinator-purpose1">
          <h2 className="computa-combinator-caption01">
            <span>Let the computa search for Venture Capital</span>
            <br></br>
          </h2>
          <span className="computa-combinator-description03">
            Venture capital plays an essential role in the start-up ecosystem,
            providing the financial fuel to transform ambitious ideas into
            thriving businesses. Recognizing this, we&apos;re designing
            ComputaCombinator to connect promising entrepreneurs with the
            venture capital network.
          </span>
          <span className="computa-combinator-description04">
            We envisage ComputaCombinator as a potent springboard into the
            venture capital world—a place where startups aren&apos;t just born,
            but where they&apos;re nurtured, financed, and set on a path to
            success. It&apos;s all part of our commitment to providing a
            comprehensive, end-to-end solution for tomorrow&apos;s
            entrepreneurial leaders.
          </span>
        </div>
        <div className="computa-combinator-purpose2">
          <h2 className="computa-combinator-caption02">
            <span>A Rigorous Journey of Transformation</span>
            <br></br>
          </h2>
          <span className="computa-combinator-description05">
            <span>
              Each week, we plan to accept the top 100 applicants into the
              ComputaCombinator program. Participants should prepare for three
              back-to-back, 10-hour days designed to rapidly shape your business
              dreams into a Minimum Viable Product (MVP) with users. While this
              process will be intensive, the result will be a fast-tracked
              transformation from idea to reality.
            </span>
            <br></br>
          </span>
        </div>
        <div className="computa-combinator-industries">
          <span className="computa-combinator-caption03">INDUSTRIES</span>
          <div className="computa-combinator-list">
            <div
              data-role="accordion-container"
              className="computa-combinator-accordion"
            >
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="computa-combinator-title">Education</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computa-combinator-text022">Perspiciatis</span>
                <span className="computa-combinator-text023">
                  Nemo voluptatem
                </span>
                <span className="computa-combinator-text024">
                  Dolore magnam
                </span>
                <span className="computa-combinator-text025">Tempora</span>
                <span className="computa-combinator-text026">
                  Reprehenderit qui
                </span>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="computa-combinator-item"
            >
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="computa-combinator-title01">B2B</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computa-combinator-text027">Perspiciatis</span>
                <span className="computa-combinator-text028">
                  Nemo voluptatem
                </span>
                <span className="computa-combinator-text029">
                  Dolore magnam
                </span>
                <span className="computa-combinator-text030">Tempora</span>
                <span className="computa-combinator-text031">
                  Reprehenderit qui
                </span>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="computa-combinator-item1"
            >
              <div
                data-role="accordion-trigger"
                className="computa-combinator-trigger2 accordion-trigger accordion-trigger-active"
              >
                <span className="computa-combinator-title02">Tech Startup</span>
              </div>
              <div
                data-role="accordion-content"
                className="accordion-content accordion-content-active"
              >
                <span className="computa-combinator-text032">Perspiciatis</span>
                <span className="computa-combinator-text033">
                  Nemo voluptatem
                </span>
                <span className="computa-combinator-text034">
                  Dolore magnam
                </span>
                <span className="computa-combinator-text035">Tempora</span>
                <span className="computa-combinator-text036">
                  Reprehenderit qui
                </span>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="computa-combinator-item2"
            >
              <div
                data-role="accordion-trigger"
                className="computa-combinator-trigger3 accordion-trigger"
              >
                <span className="computa-combinator-title03">Ecommerce</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computa-combinator-text037">Perspiciatis</span>
                <span className="computa-combinator-text038">
                  Nemo voluptatem
                </span>
                <span className="computa-combinator-text039">
                  Dolore magnam
                </span>
                <span className="computa-combinator-text040">Tempora</span>
                <span className="computa-combinator-text041">
                  Reprehenderit qui
                </span>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="computa-combinator-item3"
            >
              <div
                data-role="accordion-trigger"
                className="computa-combinator-trigger4 accordion-trigger"
              >
                <span className="computa-combinator-title04">Marketing</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computa-combinator-text042">Perspiciatis</span>
                <span className="computa-combinator-text043">
                  Nemo voluptatem
                </span>
                <span className="computa-combinator-text044">
                  Dolore magnam
                </span>
                <span className="computa-combinator-text045">Tempora</span>
                <span className="computa-combinator-text046">
                  Reprehenderit qui
                </span>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="computa-combinator-item4"
            >
              <div
                data-role="accordion-trigger"
                className="computa-combinator-trigger5 accordion-trigger"
              >
                <span className="computa-combinator-title05">SAAS</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computa-combinator-text047">Perspiciatis</span>
                <span className="computa-combinator-text048">
                  Nemo voluptatem
                </span>
                <span className="computa-combinator-text049">
                  Dolore magnam
                </span>
                <span className="computa-combinator-text050">Tempora</span>
                <span className="computa-combinator-text051">
                  Reprehenderit qui
                </span>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="computa-combinator-item5"
            >
              <div
                data-role="accordion-trigger"
                className="computa-combinator-trigger6 accordion-trigger"
              >
                <span className="computa-combinator-title06">Media</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computa-combinator-text052">Perspiciatis</span>
                <span className="computa-combinator-text053">
                  Nemo voluptatem
                </span>
                <span className="computa-combinator-text054">
                  Dolore magnam
                </span>
                <span className="computa-combinator-text055">Tempora</span>
                <span className="computa-combinator-text056">
                  Reprehenderit qui
                </span>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="computa-combinator-item6"
            >
              <div
                data-role="accordion-trigger"
                className="computa-combinator-trigger7 accordion-trigger"
              >
                <span className="computa-combinator-title07">Social</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="computa-combinator-text057">Perspiciatis</span>
                <span className="computa-combinator-text058">
                  Nemo voluptatem
                </span>
                <span className="computa-combinator-text059">
                  Dolore magnam
                </span>
                <span className="computa-combinator-text060">Tempora</span>
                <span className="computa-combinator-text061">
                  Reprehenderit qui
                </span>
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
      <div className="computa-combinator-section">
        <div className="computa-combinator-case-studies">
          <div className="computa-combinator-caption04">
            <span className="computa-combinator-text062">Roadmap</span>
            <div className="computa-combinator-date-range">
              <span className="computa-combinator-text063">JUNE 2023</span>
              <span className="computa-combinator-text064">——</span>
              <span className="computa-combinator-text065">DEC 2024</span>
            </div>
          </div>
        </div>
        <div className="computa-combinator-testimonials">
          <div className="computa-combinator-header2">
            <span className="computa-combinator-caption05">
              What our clients say
            </span>
            <div className="computa-combinator-controls">
              <svg
                id="quote-previous"
                viewBox="0 0 1024 1024"
                className="computa-combinator-icon"
              >
                <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
              <span className="computa-combinator-text066">——</span>
              <svg
                id="quote-next"
                viewBox="0 0 1024 1024"
                className="computa-combinator-icon2"
              >
                <path d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
              </svg>
            </div>
          </div>
          <div className="computa-combinator-row">
            <div className="quote">
              <Testimonial rootClassName="testimonial-root-class-name12"></Testimonial>
            </div>
            <div className="computa-combinator-quote1 quote">
              <Testimonial
                Name="Coco White"
                Avatar="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&amp;ixlib=rb-4.0.3&amp;h=200"
                Origin="@white_co"
                rootClassName="testimonial-root-class-name13"
              ></Testimonial>
            </div>
            <div className="quote">
              <Testimonial
                Avatar="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY5NzI4OTg4&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="testimonial-root-class-name14"
              ></Testimonial>
            </div>
            <div className="computa-combinator-gradiant"></div>
          </div>
        </div>
      </div>
      <div className="computa-combinator-book">
        <div className="computa-combinator-content1">
          <div className="computa-combinator-left">
            <h2 className="computa-combinator-text067">
              <span>Early Access</span>
              <br></br>
            </h2>
            <span className="computa-combinator-description06">
              Join us as we develop ComputaCombinator, and prepare to elevate
              your entrepreneurial journey. We look forward to supporting you in
              transforming your dreams into thriving businesses.
            </span>
            <a
              href="https://cdn.forms-content.sg-form.com/10525b5f-0547-11ee-ae98-e2f0e34d8c7e"
              target="_blank"
              rel="noreferrer noopener"
              className="computa-combinator-link button"
            >
              <span>
                <span>join the early access group</span>
                <br></br>
              </span>
            </a>
          </div>
          <img
            alt="image"
            src="/computer.svg"
            className="computa-combinator-image04"
          />
        </div>
      </div>
      <div className="computa-combinator-book1">
        <div className="computa-combinator-content2">
          <div className="computa-combinator-left1">
            <h2 className="computa-combinator-text073">
              <span>Early Access</span>
              <br></br>
            </h2>
            <span className="computa-combinator-description07">
              We&apos;re working as fast as we responsibly can. Hang tight for a
              little while longer. And use the time to prepare yourself for the
              greatest digital transformation humans have ever experienced!
            </span>
            <form className="computa-combinator-form">
              <input
                type="text"
                placeholder="email"
                className="computa-combinator-textinput input"
              />
              <div className="computa-combinator-container2">
                <input type="checkbox" checked="true" />
                <span>
                  You may store for the purpose of notifying me when it&apos;s
                  my turn
                </span>
              </div>
              <div className="computa-combinator-container3"></div>
              <button className="computa-combinator-button button">
                <span className="computa-combinator-text077">
                  Join the Waitlist
                </span>
              </button>
            </form>
          </div>
          <img
            alt="image"
            src="/computer.svg"
            className="computa-combinator-image05"
          />
        </div>
      </div>
      <div className="computa-combinator-section1">
        <div className="computa-combinator-about-us">
          <div className="computa-combinator-header3">
            <h2 className="computa-combinator-description08">
              ComputaCode: The Future of Autonomous Software Engineering
            </h2>
          </div>
          <div className="computa-combinator-statistics">
            <div className="computa-combinator-statistic">
              <span className="computa-combinator-text078">25</span>
              <span className="computa-combinator-text079">
                Years of experience
              </span>
            </div>
            <div className="computa-combinator-statistic1">
              <span className="computa-combinator-text080">40+</span>
              <span className="computa-combinator-text081">
                Years of Experts on board
              </span>
            </div>
            <div className="computa-combinator-statistic2">
              <span className="computa-combinator-text082">300+</span>
              <span className="computa-combinator-text083">
                Finished projects
              </span>
            </div>
            <div className="computa-combinator-statistic3">
              <span className="computa-combinator-text084">3</span>
              <span className="computa-combinator-text085">
                Offices worldwide
              </span>
            </div>
          </div>
          <div className="computa-combinator-dna">
            <span className="computa-combinator-caption06">the vision</span>
            <span className="computa-combinator-description09">
              Imagine a world where software engineering is as natural as
              conversation and as efficient as the human brain. This is the
              world ComputaCo envisions with ComputaCode, our ambitious
              blueprint for the future of computation.
            </span>
            <span className="computa-combinator-description10">
              ComputaCode, currently in the conceptual stages, aims to be an
              autonomous software engineer capable of understanding your unique
              needs and transforming them into effective, efficient software
              solutions. It&apos;s not about replacing the human touch in
              coding—it&apos;s about enhancing it with a system designed to
              interpret individual requirements and turn them into digital
              reality.
            </span>
            <span className="computa-combinator-description11">
              This groundbreaking AI system represents our vision of a
              significant leap forward in how we design and develop software. We
              foresee a shift from intricate code writing to an effortless
              process driven by your ideas.
            </span>
            <span className="computa-combinator-caption07">
              <span>Intelligence that Grows with You</span>
              <br></br>
            </span>
            <span className="computa-combinator-description12">
              We&apos;re designing ComputaCode to be a learner, adapter, and
              evolver. Our goal is that, unlike human engineers, ComputaCode
              will work tirelessly, immune to typos, forgetfulness, and learning
              fatigue. We aim to harness advanced machine learning algorithms,
              enabling it to continually improve its understanding of your needs
              for a highly personalized software development process.
            </span>
            <span className="computa-combinator-caption08">
              <span>Empowering Limitless Creativity</span>
              <br></br>
            </span>
            <span className="computa-combinator-description13">
              With ComputaCode, we hope your imagination will be the limit.
              We&apos;re working to make this AI-powered system capable of
              transforming your boldest ideas into fully functional software
              without requiring you to write a single line of code. From
              pioneering mobile apps to intricate data analytics platforms,
              we&apos;re building ComputaCode to help turn your creative vision
              into reality.
            </span>
            <span className="computa-combinator-caption09">
              <span>Accelerating Unprecedented Productivity</span>
              <br></br>
            </span>
            <span className="computa-combinator-description14">
              We are ComputaCo. We&apos;re reimagining what computation means,
              reengineering the relationship between humans and machines, and
              reshaping the landscape of productivity and creativity.
            </span>
            <span className="computa-combinator-description15">
              Join us as we embark on this transformative journey. Let&apos;s
              redefine the future of computation together.
            </span>
          </div>
          <div className="computa-combinator-gallery">
            <img
              alt="image"
              src="/unsplash-image-700w.jpeg"
              className="computa-combinator-image06"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHx8fDE2ODYxNTM5Nzl8MA&amp;ixlib=rb-4.0.3&amp;w=800"
              className="computa-combinator-image07"
            />
          </div>
          <div className="computa-combinator-recruit">
            <div className="computa-combinator-container4">
              <h2 className="computa-combinator-text092">
                <span>Calling all intelligences</span>
                <br></br>
              </h2>
              <span className="computa-combinator-description16">
                <span className="computa-combinator-text095">
                  We hold ourselves to high standards. Specifically, we&apos;re
                  looking for engineers who are
                </span>
                <span> </span>
                <br></br>
              </span>
            </div>
            <div className="computa-combinator-sections">
              <div className="computa-combinator-section2">
                <span className="computa-combinator-text098">
                  <span>trailblazers</span>
                  <br></br>
                </span>
                <span className="computa-combinator-text101">
                  ones constantly pushing the envelope, who aren&apos;t afraid
                  to challenge the status quo, never settling for &quot;good
                  enough&quot;
                </span>
              </div>
              <div className="computa-combinator-section3">
                <span className="computa-combinator-text102">
                  <span>team players</span>
                  <br></br>
                </span>
                <span className="computa-combinator-text105">
                  authentic, humble, empathetic, kind individuals
                </span>
              </div>
              <div className="computa-combinator-section4">
                <span className="computa-combinator-text106">
                  <span>automators</span>
                  <br></br>
                </span>
                <span className="computa-combinator-text109">
                  <span>
                    someone who is resourceful with their intelligence and time,
                    who delegates extensively to AI
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="computa-combinator-section5">
                <span className="computa-combinator-text112">learners</span>
                <span className="computa-combinator-text113">
                  someone who actually reads the papers, doesn&apos;t rely on
                  &quot;the way it was done last month&quot;
                </span>
              </div>
            </div>
            <span className="computa-combinator-description17">
              <span>Is ComputaCo is your calling?</span>
              <br></br>
            </span>
            <button className="computa-combinator-button1 button">
              <span className="computa-combinator-text116">
                <span>join us</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <footer className="computa-combinator-footer">
        <Footer></Footer>
        <div className="computa-combinator-content3">
          <div className="computa-combinator-contact">
            <span className="computa-combinator-email">hello@computaco.ai</span>
            <span className="computa-combinator-number">+1 682.351.8740</span>
          </div>
          <div className="computa-combinator-links-row">
            <div className="computa-combinator-links-column">
              <span className="computa-combinator-link01">
                Responsive Web Design
              </span>
              <span className="computa-combinator-link02">Design to Code</span>
              <span className="computa-combinator-link03">
                Static Website Designer
              </span>
              <span className="computa-combinator-link04">
                Static Website Generator
              </span>
            </div>
            <div className="computa-combinator-links-column1">
              <span className="computa-combinator-link05">About</span>
              <span className="computa-combinator-link06">Team</span>
              <span className="computa-combinator-link07">News</span>
              <span className="computa-combinator-link08">Partners</span>
              <span className="computa-combinator-link09">Careers</span>
              <span className="computa-combinator-link10">
                Press &amp; Media
              </span>
            </div>
          </div>
        </div>
        <div className="computa-combinator-locations">
          <div className="computa-combinator-location">
            <span className="computa-combinator-title08">United States</span>
            <span className="computa-combinator-details07">
              <span>90210 Broadway Street</span>
              <br></br>
              <span>San Francisco</span>
              <br></br>
              <br></br>
              <span>hola_us@hola.studio</span>
            </span>
          </div>
          <div className="computa-combinator-location1">
            <span className="computa-combinator-title09">Romania</span>
            <span className="computa-combinator-details08">
              <span>115 Turzii Road</span>
              <br></br>
              <span>Cluj Napoca</span>
              <br></br>
              <br></br>
              <span>hola_ro@hola.studio</span>
            </span>
          </div>
          <div className="computa-combinator-location2">
            <span className="computa-combinator-title10">United Kingdom</span>
            <span className="computa-combinator-details09">
              <span>87–135 Brompton Road</span>
              <br></br>
              <span>London</span>
              <br></br>
              <br></br>
              <span>hola_uk@hola.studio</span>
            </span>
          </div>
          <div className="computa-combinator-location3">
            <span className="computa-combinator-title11">Spain</span>
            <span className="computa-combinator-details10">
              <span>34-36 Carrer de Tele</span>
              <br></br>
              <span>Barcelona</span>
              <br></br>
              <br></br>
              <span>hola_sp@hola.studio</span>
            </span>
          </div>
        </div>
        <div className="computa-combinator-socials">
          <div className="computa-combinator-row1">
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
          <div className="computa-combinator-row2">
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

export default ComputaCombinator
