 import React from 'react';
 import "../Components/Footer.css"
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
 
 

 const Footer = ()=> {




    return (<div className='footer'>

        <div className='socialMedia'>
            <FaTwitter/>
            <FaFacebook/>
            <FaLinkedin/>
            <FaGithub/>
        </div>
        <p>&copy; 2023 ohwavworua christopher</p>


    </div>);
 }
 
 export default Footer ;