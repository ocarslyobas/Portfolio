import React from 'react';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaSchool} from "react-icons/fa";
import "./Education.css";





const Education = ()=> {
    return ( 
        <div className='Education'>
                <VerticalTimeline lineColor='black'>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022 - 2022"
                    iconStyle={{ background:'black', color: '#fff' }}
                    icon={<FaSchool/>}
                    >
                    <h3 className="vertical-timeline-element-title">Udacity ALX</h3>
                    <h4 className="vertical-timeline-element-subtitle">Nano Degree</h4>
                    <p>
                        Data Analysis
                    </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2009 - 2012"
                    contentStyle={{ background: '#3e497a', color: '#fff' }}
                    iconStyle={{ background: '#3e497a', color: '#fff' }}
                    icon={<FaSchool/>}
                    >
                    <h3 className="vertical-timeline-element-title">Delta State Polytechnic Otefe Oghara</h3>
                    <h4 className="vertical-timeline-element-subtitle">Higher National Diploma (HND) - Upper Credit</h4>
                    <p>
                        Computer Engineering
                    </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2006 - 2008"
                    iconStyle={{ background: 'black', color: '#fff' }}
                    icon={<FaSchool/>}
                    >
                    <h3 className="vertical-timeline-element-title">Delta State Polytechnic Otefe Oghara</h3>
                    <h4 className="vertical-timeline-element-subtitle">National Diploma (OND) - Lower Credit</h4>
                    <p>
                    Computer Engineering
                    </p>
                    </VerticalTimelineElement>

                    
                </VerticalTimeline>
        </div>
     );
}

export default Education;