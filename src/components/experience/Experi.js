import React from 'react';
import './Experience.css'
import ExperienceCard from '../experienceCard/ExperienceCard';
import experienceData from '../../data/experience.json'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';  
// import LaunchIcon from '@material-ui/icons/Launch';
import LaunchIcon from '@material-ui/icons/Launch';

export const Experi = () => {
  return (
    <div>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(62,69,85)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(62,69,85)' }}
                date="Sep 2021 - Present"
                iconStyle={{ background: 'rgb(11,230,121)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Relecura Technologies
                    <a href='https://relecura.com/' style={{color:'rgb(11,230,121)',verticalAlign:'sub',marginLeft:'18px'}}>
                       <LaunchIcon
                            style={{ pointerEvents: 'rgb(11,230,121)', cursor: 'pointer',fontSize:'14px' }}
                        />
                    </a>
                </h4>
                <ul className='roles'>
                    <li>Analyzing the given requirement and prepare a plan of action for development.</li>
                    <li>Optimize application for maximum speed and scalability.</li>
                    <li>Worked with backend engineers to integrate network calls.</li>
                </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(62,69,85)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(62,69,85)' }}
                date="Jun 2021 - Sep 2021"
                iconStyle={{ background: 'rgb(11,230,121)', color: '' }}
            >
                <h3 className="vertical-timeline-element-title">UI Developer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Relecura Technologies
                    <a href='https://relecura.com/' style={{color:'rgb(11,230,121)',verticalAlign:'sub',marginLeft:'18px'}}>
                       <LaunchIcon
                            style={{ pointerEvents: 'rgb(11,230,121)', cursor: 'pointer',fontSize:'14px' }}
                        />
                    </a>
                </h4>
                <ul className='roles'>
                     <li>Developed front-end web pages with HTML, CSS, and JavaScript and its Libraries.</li>
                     <li>Plan the layout of the websites.</li>
                     <li>The developed website is optimized for various devices.</li>
                </ul>    
                
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}
