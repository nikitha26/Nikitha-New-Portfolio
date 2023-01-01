import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import ContactForm from '../contactForm/ContactForm'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import facebook from '../../images/social/facebook.png'

const Contact = () => {
  return (
    <Section title="Contact">
      {/* <ContactForm /> */}
      <Bounce cascade>
        <div className="links" style={{marginBottom:'100px',backgroundColor:'#3E4555',padding:'80px'}}>
          <a
            href="https://github.com/nikitha26"
            target="_blank"
            rel="noopener noreferrer"
            className='social_media_logs'
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
          <a
            href="https://www.linkedin.com/in/nikithamalkapuram/"
            target="_blank"
            rel="noopener noreferrer"
            className='social_media_logs'
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>
          <a href="https://www.instagram.com/mnikitha365/" target="_blank" rel="noreferrer" className="jss31 social_media_logs">
            <svg  stroke="currentColor" fill="#fff" strokeWidth="0" viewBox="0 0 448 512" height="40px" width="40px" xmlns="http://www.w3.org/2000/svg">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>
          <a href="mailto:mnikitha365@mail.com" target="_blank" rel="noreferrer" className="jss31 social_media_logs" style={{marginTop:'-10px'}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 20 20" strokeWidth="2" height="40px" width="40px" stroke="rgb(44,50,63)" aria-hidden="true" className="hidden h-16 w-16 text-white md:block">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          </a>  
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact

