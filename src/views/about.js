import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Testimonial from '../components/testimonial'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - ComputaCo</title>
        <meta
          name="description"
          content="ComputaCo\nComputaCode\nComputatrum\nComputaCombinator\nComputation Redefined\nHuman-Machine Interaction"
        />
        <meta property="og:title" content="About - ComputaCo" />
        <meta
          property="og:description"
          content="ComputaCo\nComputaCode\nComputatrum\nComputaCombinator\nComputation Redefined\nHuman-Machine Interaction"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="about-hero">
        <div className="about-header">
          <h1 className="about-text">ComputaCo</h1>
          <h2 className="about-text01">
            Who are we? Why are we here? Where are we going?
          </h2>
          <div className="about-container1">
            <img alt="image" src="/mouse.svg" className="about-image" />
          </div>
        </div>
        <div className="about-hero-image">
          <img alt="image" src="/logo.svg" className="about-image1" />
        </div>
      </div>
      <div className="about-who">
        <div className="about-header1">
          <div className="about-heading">
            <h2 className="about-text02">
              Redefining Computation. Revolutionizing Tomorrow.
            </h2>
            <span className="about-text03">
              We are shaping the future of computation and revolutionizing the
              way humans and machines interact. Our vision is to create a world
              where information seamlessly flows between individuals and
              computers, unlocking unparalleled levels of productivity and
              creativity. We are not just imagining this world—we are actively
              building it.
            </span>
            <span className="about-text04">
              We believe in the transformative power of artificial intelligence
              (AI) to redefine industries and drive innovation. Our dedicated
              team of brilliant engineers and experts shares a passion for
              innovation and a deep understanding of cutting-edge technologies
              like AI, machine learning, and automation. Together, we are at the
              forefront of the autonomous systems revolution.
            </span>
            <span className="about-text05">
              We are committed to facilitating seamless information exchange
              between individuals and machines, blurring the boundaries between
              end-users and developers, and enabling personalized services
              through digital clones tailored to individual needs and
              preferences. The result will be a surge in productivity and
              creativity across all sectors and industries.
            </span>
            <span className="about-text06">
              <span>
                We have developed three groundbreaking initiatives that embody
                our vision and commitment to reshaping the future of
                computation:
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Link to="/computa-code" className="about-navlink">
                ComputaCode
              </Link>
              <span>
                ,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Link to="/computatrum" className="about-navlink1">
                Computatrum
              </Link>
              <span>
                , and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Link to="/computa-combinator" className="about-navlink2">
                ComputaCombinator
              </Link>
              <span>.</span>
            </span>
          </div>
        </div>
        <div className="about-preview">
          <div className="about-image2">
            <img alt="image" src="/preview.svg" className="about-image3" />
          </div>
          <div className="about-video">
            <video src poster="/video.svg" className="about-video1"></video>
          </div>
        </div>
      </div>
      <div className="about-information">
        <div className="about-purpose">
          <h2 className="about-caption">ComputaCode</h2>
          <span className="about-description">
            ComputaCode represents the future of software engineering. It
            transforms coding from an arcane discipline into a natural
            conversation, allowing your ideas to flow effortlessly into
            existence. Our autonomous software engineer, ComputaCode, is
            designed to understand your unique needs and translate them into
            effective and efficient software solutions. With advanced machine
            learning algorithms, ComputaCode continuously improves its
            understanding of your requirements, enabling highly personalized
            software development and empowering limitless creativity.
          </span>
        </div>
        <div className="about-purpose1">
          <h2 className="about-caption1">Computatrum</h2>
          <span className="about-description1">
            Computatrum is your personal digital ally. It goes beyond executing
            instructions and adapts to your unique digital behaviors across all
            your devices. By studying your habits, Computatrum provides
            intelligent assistance, making your tasks quicker and more
            efficient. Whether you&apos;re drafting an email, browsing the web,
            or navigating complex applications, Computatrum anticipates your
            needs and enhances your interactions, redefining the symbiosis
            between humans and computers.
          </span>
        </div>
        <div className="about-purpose2">
          <h2 className="about-caption2">Computacombinator</h2>
          <span className="about-description2">
            <span>
              ComputaCombinator is our accelerator program designed to transform
              startup dreams into profit machines. In just three days, we
              leverage the power of ComputaCo&apos;s automation tools to
              streamline and fast-track the end-to-end business processes of
              promising entrepreneurs. By embracing the #buildinpublic movement,
              we provide transparency and real-time collaboration through
              livestreamed sessions, fostering community and connecting startups
              with the venture capital network.
            </span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="about-section">
        <div className="about-case-studies">
          <div className="about-caption3">
            <span className="about-text13">Roadmap</span>
            <div className="about-date-range">
              <span className="about-text14">JUNE</span>
              <span className="about-text15">——</span>
              <span className="about-text16">DEC 2023</span>
            </div>
          </div>
          <div className="about-container2">
            <h2 className="about-text17">June 2023</h2>
            <ul color="white" className="about-ul list">
              <li className="about-li list-item Content">
                <p className="about-text18">
                  Launch ComputaCode alpha version, providing early access to
                  selected users for testing and feedback
                </p>
              </li>
              <li color="white" className="about-li01 list-item">
                <p className="about-text19">
                  Begin refining and enhancing ComputaCode based on user
                  feedback and initial performance evaluations.
                </p>
              </li>
              <li className="about-li02 list-item">
                <p className="about-text20">
                  Initiate partnerships with software development companies to
                  explore integration opportunities.
                </p>
              </li>
            </ul>
          </div>
          <div className="about-container3">
            <h2 className="about-text21">July 2023</h2>
            <ul color="white" className="about-ul1 list">
              <li className="about-li03 list-item Content">
                <p className="about-text22">
                  Expand the user base for ComputaCode alpha version, allowing
                  more users to experience the benefits of our autonomous
                  software engineering system.
                </p>
              </li>
              <li color="white" className="about-li04 list-item">
                <p className="about-text23">
                  Conduct in-depth user surveys and feedback sessions to gather
                  valuable insights for further improvements.
                </p>
              </li>
              <li className="about-li05 list-item">
                <p className="about-text24">
                  Establish a dedicated research team to focus on advancing
                  machine learning algorithms and personalization capabilities.
                </p>
              </li>
            </ul>
          </div>
          <div className="about-container4">
            <h2 className="about-text25">August 2023</h2>
            <ul color="white" className="about-ul2 list">
              <li className="about-li06 list-item Content">
                <p className="about-text26">
                  <span>
                    Release ComputaCode beta version, incorporating major
                    enhancements and improvements based on user feedback and
                    internal research.
                  </span>
                  <br></br>
                </p>
              </li>
              <li color="white" className="about-li07 list-item">
                <p className="about-text29">
                  <span>
                    Expand marketing efforts to increase awareness and adoption
                    of ComputaCode among software developers, entrepreneurs, and
                    businesses.
                  </span>
                  <br></br>
                </p>
              </li>
              <li className="about-li08 list-item">
                <p className="about-text32">
                  <span>
                    Collaborate with educational institutions to introduce
                    ComputaCode into their curriculum and foster the next
                    generation of software engineers.
                  </span>
                  <br></br>
                </p>
              </li>
            </ul>
          </div>
          <div className="about-container5">
            <h2 className="about-text35">September 2023</h2>
            <ul color="white" className="about-ul3 list">
              <li className="about-li09 list-item Content">
                <p className="about-text36">
                  <span>
                    Launch Computatrum prototype, offering a limited version of
                    our intelligent computing tool to a select group of users.
                  </span>
                  <br></br>
                </p>
              </li>
              <li color="white" className="about-li10 list-item">
                <p className="about-text39">
                  <span>
                    Gather user feedback and conduct usability testing to
                    identify areas for optimization and further development.
                  </span>
                  <br></br>
                </p>
              </li>
              <li className="about-li11 list-item">
                <p className="about-text42">
                  <span>
                    Explore strategic partnerships with hardware manufacturers
                    to integrate Computatrum into their devices and expand its
                    reach.
                  </span>
                  <br></br>
                </p>
              </li>
            </ul>
          </div>
          <div className="about-container6">
            <h2 className="about-text45">October 2023</h2>
            <ul color="white" className="about-ul4 list">
              <li className="about-li12 list-item Content">
                <p className="about-text46">
                  <span>
                    Release ComputaCombinator pilot program, inviting startups
                    to participate in the three-day accelerator designed to
                    transform their ideas into Minimum Viable Products (MVPs).
                  </span>
                  <br></br>
                </p>
              </li>
              <li color="white" className="about-li13 list-item">
                <p className="about-text49">
                  Livestream ComputaCombinator sessions on Twitter Spaces to
                  foster community engagement, collaboration, and real-time
                  feedback.
                </p>
              </li>
              <li className="about-li14 list-item">
                <p className="about-text50">
                  <span>
                    Establish relationships with venture capital firms to
                    connect promising entrepreneurs from ComputaCombinator with
                    potential funding opportunities.
                  </span>
                  <br></br>
                </p>
              </li>
            </ul>
          </div>
          <div className="about-container7">
            <h2 className="about-text53">November 2023</h2>
            <ul color="white" className="about-ul5 list">
              <li className="about-li15 list-item Content">
                <p className="about-text54">
                  <span>
                    Analyze data and insights gathered from ComputaCode,
                    Computatrum, and ComputaCombinator to drive further
                    refinements and feature enhancements.
                  </span>
                  <br></br>
                </p>
              </li>
              <li color="white" className="about-li16 list-item">
                <p className="about-text57">
                  <span>
                    Engage in continuous research and development to stay at the
                    forefront of AI, machine learning, and automation
                    technologies.
                  </span>
                  <br></br>
                </p>
              </li>
              <li className="about-li17 list-item">
                <p className="about-text60">
                  <span>
                    Expand the ComputaCo team, hiring talented engineers and
                    experts to support the growing demand and scale our
                    initiatives.
                  </span>
                  <br></br>
                </p>
              </li>
            </ul>
          </div>
          <div className="about-container8">
            <h2 className="about-text63">Beyond 2023</h2>
            <ul color="white" className="about-ul6 list">
              <li className="about-li18 list-item Content">
                <p className="about-text64">
                  <span>
                    Continue to iterate and improve ComputaCode, Computatrum,
                    and ComputaCombinator based on user feedback and
                    technological advancements.
                  </span>
                  <br></br>
                </p>
              </li>
              <li color="white" className="about-li19 list-item">
                <p className="about-text67">
                  <span>
                    Explore additional applications and industries where our
                    autonomous systems can make a significant impact, such as
                    healthcare, finance, and transportation.
                  </span>
                  <br></br>
                </p>
              </li>
              <li className="about-li20 list-item">
                <p className="about-text70">
                  <span>
                    Expand globally, making ComputaCo&apos;s innovations
                    accessible to users and businesses worldwide, fostering a
                    community of creators and innovators.
                  </span>
                  <br></br>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="about-testimonials">
          <div className="about-header2">
            <span className="about-caption4">What our clients say</span>
            <div className="about-controls">
              <svg
                id="quote-previous"
                viewBox="0 0 1024 1024"
                className="about-icon"
              >
                <path d="M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
              </svg>
              <span className="about-text73">——</span>
              <svg
                id="quote-next"
                viewBox="0 0 1024 1024"
                className="about-icon2"
              >
                <path d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
              </svg>
            </div>
          </div>
          <div className="about-row">
            <div className="quote">
              <Testimonial rootClassName="testimonial-root-class-name18"></Testimonial>
            </div>
            <div className="about-quote1 quote">
              <Testimonial
                Name="Coco White"
                Avatar="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2OTcyODk4OA&amp;ixlib=rb-4.0.3&amp;h=200"
                Origin="@white_co"
                rootClassName="testimonial-root-class-name19"
              ></Testimonial>
            </div>
            <div className="quote">
              <Testimonial
                Avatar="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY5NzI4OTg4&amp;ixlib=rb-4.0.3&amp;h=200"
                rootClassName="testimonial-root-class-name20"
              ></Testimonial>
            </div>
            <div className="about-gradiant"></div>
          </div>
        </div>
      </div>
      <div className="about-book">
        <div className="about-content">
          <div className="about-left">
            <h2 className="about-text74">
              <span>Early Access</span>
              <br></br>
            </h2>
            <span className="about-description3">
              Join us on our transformative journey as we redefine the future of
              computation for everyone. Together, we will build a world where
              humans and machines collaborate seamlessly, where coding becomes
              conversation, and where productivity and creativity flourish like
              never before. Welcome to ComputaCo, where the future of
              computation begins.
            </span>
            <form className="about-form">
              <button className="about-button button">
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
          <img alt="image" src="/computer.svg" className="about-image4" />
        </div>
      </div>
      <footer className="about-footer">
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default About
