import React, { useState } from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'
import { Bounce } from 'react-reveal'
import { Link } from 'react-scroll'
import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import Navbar from '../navbar/Navbar'
import config from '../../config'
import profile from '../../images/matt.png'
import linkedin from '../../images/social/linkedin.png'
import { nikitha } from './nikitha.pdf';
// import { saveAs } from 'file-saver';

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  // const saveFile = () => {
  //   // fileSaver.saveAs(
  //   //   process.env.REACT_APP_CLIENT_URL + "./nikitha.pdf",
  //   //   "MyCV.pdf"
  //   // );
  //   var file = new File(["nikitha"], "nikitha.pdf", {type: "pdf"});
  //   FileSaver.saveAs(file);
  // };
  return (
    <div className="home-wrapper">
      <div className="home">
        <Particles className="particles" params={config.particles} />
        <div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
          <Fade bottom distance="40px">
            <img
              className="profile"
              alt="profile"
              src={profile}
              style={{borderRadius:'50%'}}
              onLoad={() => setImageLoaded(true)}
            />
            <h1 className="greeting-text">
              Hi <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>,
               I'm <span className="name">Nikitha</span>.{' '}
            </h1>
            <h1 className="greeting-text">
              <Typewriter
                options={{
                  strings: [
                    'I am React Js Developer',
                    'I am Programmer',
                    'I love learning new tech.',
                    // 'I love meeting new people.',
                    // 'I create unique digital experiences.',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '<',
                  delay: 100,
                }}
              />
            </h1>
            <Bounce cascade>
              <div className="links">
                <a
                  href="https://www.linkedin.com/in/nikithamalkapuram/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='social_media_logs'
                >
                  <img src={linkedin} alt="Linkedin Logo" width="50px" />
                </a>
              </div>
            </Bounce>
            <a href="./nikitha.pdf" download>
              <button className="MuiButtonBase-root MuiButton-root MuiButton-text jss82" tabIndex="0" type="button">
                <span className="MuiButton-label">Download CV</span><span className="MuiTouchRipple-root"></span>
              </button>
            </a>
           
            {/* <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
              >
                <ArrowDropDownCircleIcon
                  fontSize="large"
                  style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                />
              </Link>
            </div> */}
          </Fade>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Home
