import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
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
      <Navbar></Navbar>
      <div className="home-hero">
        <div className="home-header">
          <h1 className="home-text">ComputaCo</h1>
          <h2>Redefining Computation. Revolutionizing Tomorrow.</h2>
          <div className="home-container1">
            <img alt="image" src="/mouse.svg" className="home-image" />
          </div>
        </div>
        <div className="home-hero-image">
          <img alt="image" src="/logo.svg" className="home-image1" />
        </div>
      </div>
      <div className="home-who">
        <div className="home-header1">
          <div className="home-heading">
            <h2 className="home-text02">
              ComputaCo. Redefining Computation. Revolutionizing Tomorrow.
            </h2>
            <span className="home-text03">
              We aim to redefine the very nature of computation, facilitating
              seamless information exchange between individuals and machines,
              and in the process, unlocking unparalleled levels of productivity
              and creativity. We&apos;re not just building smarter systems;
              we&apos;re building a smarter future.
            </span>
          </div>
        </div>
        <div className="home-preview">
          <div className="home-image2">
            <img alt="image" src="/preview.svg" className="home-image3" />
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
                <span className="home-text04">Perspiciatis</span>
                <span className="home-text05">Nemo voluptatem</span>
                <span className="home-text06">Dolore magnam</span>
                <span className="home-text07">Tempora</span>
                <span className="home-text08">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item">
              <div data-role="accordion-trigger" className="accordion-trigger">
                <span className="home-title1">B2B</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text09">Perspiciatis</span>
                <span className="home-text10">Nemo voluptatem</span>
                <span className="home-text11">Dolore magnam</span>
                <span className="home-text12">Tempora</span>
                <span className="home-text13">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item1">
              <div
                data-role="accordion-trigger"
                className="home-trigger2 accordion-trigger accordion-trigger-active"
              >
                <span className="home-title2">Tech Startup</span>
              </div>
              <div
                data-role="accordion-content"
                className="accordion-content accordion-content-active"
              >
                <span className="home-text14">Perspiciatis</span>
                <span className="home-text15">Nemo voluptatem</span>
                <span className="home-text16">Dolore magnam</span>
                <span className="home-text17">Tempora</span>
                <span className="home-text18">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item2">
              <div
                data-role="accordion-trigger"
                className="home-trigger3 accordion-trigger"
              >
                <span className="home-title3">Ecommerce</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text19">Perspiciatis</span>
                <span className="home-text20">Nemo voluptatem</span>
                <span className="home-text21">Dolore magnam</span>
                <span className="home-text22">Tempora</span>
                <span className="home-text23">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item3">
              <div
                data-role="accordion-trigger"
                className="home-trigger4 accordion-trigger"
              >
                <span className="home-title4">Marketing</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text24">Perspiciatis</span>
                <span className="home-text25">Nemo voluptatem</span>
                <span className="home-text26">Dolore magnam</span>
                <span className="home-text27">Tempora</span>
                <span className="home-text28">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item4">
              <div
                data-role="accordion-trigger"
                className="home-trigger5 accordion-trigger"
              >
                <span className="home-title5">SAAS</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text29">Perspiciatis</span>
                <span className="home-text30">Nemo voluptatem</span>
                <span className="home-text31">Dolore magnam</span>
                <span className="home-text32">Tempora</span>
                <span className="home-text33">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item5">
              <div
                data-role="accordion-trigger"
                className="home-trigger6 accordion-trigger"
              >
                <span className="home-title6">Media</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text34">Perspiciatis</span>
                <span className="home-text35">Nemo voluptatem</span>
                <span className="home-text36">Dolore magnam</span>
                <span className="home-text37">Tempora</span>
                <span className="home-text38">Reprehenderit qui</span>
              </div>
            </div>
            <div data-role="accordion-container" className="home-item6">
              <div
                data-role="accordion-trigger"
                className="home-trigger7 accordion-trigger"
              >
                <span className="home-title7">Social</span>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <span className="home-text39">Perspiciatis</span>
                <span className="home-text40">Nemo voluptatem</span>
                <span className="home-text41">Dolore magnam</span>
                <span className="home-text42">Tempora</span>
                <span className="home-text43">Reprehenderit qui</span>
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
            <span className="home-text44">Roadmap</span>
            <div className="home-date-range">
              <span className="home-text45">JUNE 2023</span>
              <span className="home-text46">——</span>
              <span className="home-text47">DEC 2024</span>
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
                className="home-icon"
              >
                <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
              <span className="home-text48">——</span>
              <svg
                id="quote-next"
                viewBox="0 0 1024 1024"
                className="home-icon2"
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
            <h2 className="home-text49">
              <span>Early Access</span>
              <br></br>
            </h2>
            <span className="home-description03">
              We&apos;re working as fast as we responsibly can. Hang tight for a
              little while longer. And use the time to prepare yourself for the
              greatest digital transformation humans have ever experienced!
            </span>
            <form className="home-form">
              <button className="home-button button">
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
          <img alt="image" src="/computer.svg" className="home-image4" />
        </div>
      </div>
      <div className="home-book1">
        <div className="home-content2">
          <div className="home-left1">
            <h2 className="home-text54">
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
              <button className="home-button1 button">
                <span className="home-text58">Join the Waitlist</span>
              </button>
            </form>
          </div>
          <img alt="image" src="/computer.svg" className="home-image5" />
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
              <span className="home-text59">25</span>
              <span className="home-text60">Years of experience</span>
            </div>
            <div className="home-statistic1">
              <span className="home-text61">40+</span>
              <span className="home-text62">Years of Experts on board</span>
            </div>
            <div className="home-statistic2">
              <span className="home-text63">300+</span>
              <span className="home-text64">Finished projects</span>
            </div>
            <div className="home-statistic3">
              <span className="home-text65">3</span>
              <span className="home-text66">Offices worldwide</span>
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
              src="/unsplash-image-700w.jpeg"
              className="home-image6"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHx8fDE2ODYxNTM5Nzl8MA&amp;ixlib=rb-4.0.3&amp;w=800"
              className="home-image7"
            />
          </div>
          <div className="home-recruit">
            <div className="home-container4">
              <h2 className="home-text67">
                <span>Calling all intelligences</span>
                <br></br>
              </h2>
              <span className="home-description13">
                <span className="home-text70">
                  We hold ourselves to high standards. Specifically, we&apos;re
                  looking for engineers who are
                </span>
                <span> </span>
                <br></br>
              </span>
            </div>
            <div className="home-sections">
              <div className="home-section2">
                <span className="home-text73">
                  <span>trailblazers</span>
                  <br></br>
                </span>
                <span className="home-text76">
                  ones constantly pushing the envelope, who aren&apos;t afraid
                  to challenge the status quo, never settling for &quot;good
                  enough&quot;
                </span>
              </div>
              <div className="home-section3">
                <span className="home-text77">
                  <span>team players</span>
                  <br></br>
                </span>
                <span className="home-text80">
                  authentic, humble, empathetic, kind individuals
                </span>
              </div>
              <div className="home-section4">
                <span className="home-text81">
                  <span>automators</span>
                  <br></br>
                </span>
                <span className="home-text84">
                  <span>
                    someone who is resourceful with their intelligence and time,
                    who delegates extensively to AI
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-section5">
                <span className="home-text87">learners</span>
                <span className="home-text88">
                  someone who actually reads the papers, doesn&apos;t rely on
                  &quot;the way it was done last month&quot;
                </span>
              </div>
            </div>
            <span className="home-description14">
              <span>Is ComputaCo is your calling?</span>
              <br></br>
            </span>
            <button className="home-button2 button">
              <span className="home-text91">
                <span>join us</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Home
