import React from 'react';
import "./Projects.css";
import Projectcard from '../../Components/Projectcard';
import { ProjectListFrontend,ProjectListData } from '../../Utils/ProjectList';


const Projects = ()=> {


    return ( 
        <div className='Projects'>

            <h1 id='projectheader'>Completed Projects</h1>

            <div className="projecttype">
                <div className="frontendprojects">

                    <h3 id='frontendprojectlist'>My Front-End Projects</h3>

                            <div className="container projectListfront">
                                {
                                    ProjectListFrontend.map((proj)=>{
                                        
                                        return <Projectcard 
                                        title={proj.title} 
                                        image={proj.image} 
                                        description={proj.description} 
                                        buttontext={proj.buttontext}
                                        link={proj.link} 
                                        />;
                                    })
                                }
                
                            </div>

                </div>


                {/* data analysis */}
                <div className="dataanalysisprojects">

                    <h3 id='dataprojectlist'>My Data Analysis projects</h3>

                <div className="projectListdata">
               {
                ProjectListData.map((proj)=>{
                    console.log(proj)
                    return <Projectcard 
                    title={proj.title} 
                    image={proj.image} 
                    description={proj.description} 
                    buttontext={proj.buttontext}
                    link={proj.link} 
                    />;
                })
               }
                
            </div>
                </div>
            </div>
            
            
        </div>
     );
}

export default Projects;