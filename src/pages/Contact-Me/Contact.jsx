import React from 'react';
import "./Contact.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form } from 'react-bootstrap';
import { useState } from 'react';





const Contact =() =>{


        const formRef = useRef();
        const[done,setDone]=useState(false);

        const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_4ipdsh9', 'template_m32u8ic', formRef.current, 'cmQH48r63m-wtXuqb')
        .then((result) => {
          alert("Message sent sucessfully");
          setDone(true);
        }, (error) => {
          alert(error.text);
        });
        };

    
    return ( <div className="Contact-Me">
        

        <div className="content">

        <h1 className='text-center'>Message-Me</h1>
        <Form className="form-group" id='contactform' ref={formRef} onSubmit={sendEmail}>
            <input className='form-control form-control-lg mt-3 ' type="text" placeholder='Enter fullname' name="full_name"/>
            <input className='form-control form-control-lg mt-3 ' type="email" placeholder='Enter email' name="user_email"/>
            <input className='form-control form-control-lg mt-3 ' type="text" placeholder='Enter subject' name="user_subject" />
            <textarea className="form-control-lg mt-3 w-100" id="Message" placeholder="Enter text" width="30%" name="message" > </textarea>
            <button className="btn btn-dark btn-lg mt-3 w-100" value="Send" type="submit">Send</button>
        </Form>

        <div className="successmessage">
              {done && "Message sent sucessfully"}
        </div>

        </div>

    </div> );
}

export default Contact;