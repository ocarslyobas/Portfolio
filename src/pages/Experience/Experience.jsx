import React from 'react';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import "./Experience.css";





const Experience = ()=> {
    return ( 
        <div className='Experience'>
                <VerticalTimeline lineColor='#3e497a'>
                    
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3e497a', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2023 - present."
                    iconStyle={{ background: '#3e497a', color: '#fff' }}
                    icon={<HiOutlineBuildingOffice2/>}
                >
                    <h3 className="vertical-timeline-element-title">Gheli Technology Solution</h3>
                    <h4 className="vertical-timeline-element-subtitle">Benin City, Edo State.</h4>
                    <p>
                    Front-End Developer Intern
                    </p>
                    <p>
                        Duties: <br />

                        1. Redesigned sections of website to create user-friendly and visually apealing experience.<br /> 
                        2. Analysed user needs to determine technical requirements.<br />
                        3. Translated UI designs to code.<br />
                        4. Backed up files from website to local directories for instant recorvery.<br />
                        5. Renewed domain name registration.<br />
                        6. Maintained understanding of current web technologies through continuing education and participation in professional confrences and workshops. 

                        
                    </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3e497a', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Jan 2022 - Mar 2022."
                    iconStyle={{ background: '#3e497a', color: '#fff' }}
                    icon={<HiOutlineBuildingOffice2 />}
                >
                    <h3 className="vertical-timeline-element-title">KPMG Australia</h3>
                    <h4 className="vertical-timeline-element-subtitle">Melbourne, Australia.</h4>
                    <p>
                    Virtual Data Analyst Intern
                    </p>
                    <p>
                        Duties: <br />

                        1. Reviewed clients dataset to ensure data quality is consistent,complete,relevant and reliable.<br /> 
                        2. Performed data cleaning and exploration to answer stakeholders questions.<br />
                        3. Used business intelligence tool(Power BI) to create interesting visuals of analysis.<br />
                        4. Applied analytical tools and methods to inform business decision-making processes.<br />
                        5. Mined avaliable company and competitor data to fully understand the current market landscape and  direct the development of strategic solutions.<br />
                        
                    </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3e497a', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Mar 2012 - Nov 2019."
                    iconStyle={{ background: '#3e497a', color: '#fff' }}
                    icon={<HiOutlineBuildingOffice2 />}
                >
                    <h3 className="vertical-timeline-element-title">First Bank Of Nigeria LTD</h3>
                    <h4 className="vertical-timeline-element-subtitle">Lagos, Nigeria.</h4>
                    <p>
                    Service Executive
                    </p>
                    <p>
                        Duties: <br />

                        1. ATM Support: Carried first level maintenace on ATM machines and ATM account reconciliation.<br /> 
                        2. Customer Support Officer: Attended to customer's complaints, request, product sales and customer advisory services.<br />
                        3. IT Support: Performed LAN network troubleshooting, computer system maintenance and software installations<br />
                       
                        
                    </p>
                    </VerticalTimelineElement>



                </VerticalTimeline>
        </div>
     );
}

export default Experience;