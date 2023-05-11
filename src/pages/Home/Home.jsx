import React from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';
import {FaEnvelope,FaGithub, FaLinkedin, } from "react-icons/fa";
import office_pic1 from "../../Assets/photo/office_pic1.jpg";





const Home = ()=> {

    

    return ( 
        <div className='Home'>
                
                <div className='about'>
                    <h2>Hi, My name is Christopher</h2>
                    <div className='prompt'>
                        <p className='prompt-text'>A Front-End Developer and Data Analyst with a passion for transforming acquired knowledge to solving problems</p>
                        <div className='resumedownload'>
                        <span>Download my Resume</span>
                        <a href="https://drive.google.com/file/d/1OZ1SxktGToQFw9KDnPbFnPcIw8Y1c-AS/view?usp=sharing" target="_blank" id="viewtext"><span className='mx-2' ><b> Data Analyst</b></span></a>
                        <a href="https://drive.google.com/file/d/16wABxvkBRaEqeV43l9ymEb4UEunQcsyZ/view?usp=sharing" target="_blank" id="viewtext"><span className='mx-2' ><b>Front-End Developer</b></span></a>
                        </div>
                    </div>

                    <div className='prompt'>

                        <Link to={'/contact'}><FaEnvelope size={20}/></Link>
                        <a href='https://github.com/ocarslyobas' target="_blank"><FaGithub size={20} /></a>
                        <a href='https://linkedin.com/in/christopher-ohwavworua' target="_blank"><FaLinkedin size={20} /></a>

                    </div>
                    
                    <div className='imagebox'>
                        <img src={office_pic1} alt="photo" className='image-rounded' />
                    </div>
                    <div className='skills'>
                        <h1 className="skillshead">Skills Acquired</h1>
                        <ol className='list'>
                            <li className='item'>
                                <h2>Front-End</h2>
                                <span className="frontend-skills">
                                    HTML, CSS, JavaScript, React.js, TailwindCSS, Bootstrap, 
                                </span>
                            </li>

                            <li className='item'>
                                <h2 className='dataskillhead'>Data Analytics</h2>
                                <span className="data-skills">
                                    Advanced Microsoft excel, IBM SPSS, MySQL, Microsoft SQL, Microsoft Power BI, 
                                    Tableau, Python,
                                </span>
                            </li>

                        </ol>

                    </div>

                </div>
        </div>
     );
}

export default Home;
