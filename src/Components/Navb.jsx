import React from 'react';
import "./Navbar.css";
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navb = () => {


    

     return (
           
    <Navbar expand="lg" className='Navbox'>
        <LinkContainer to="/">
            <Navbar.Brand><p id='welcome'>Welcome</p> </Navbar.Brand>
        </LinkContainer>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer to="/">
                    <Nav.Link className="links">Home </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Projects">
                    <Nav.Link className="links"> Projects </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Experience">
                    <Nav.Link className="links"> Experience </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Education">
                    <Nav.Link className="links"> Education </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Contact">
                    <Nav.Link className="links"> Contact </Nav.Link>
                </LinkContainer> 
            </Nav>
        </Navbar.Collapse>
 </Navbar>
   );
   
}

export default Navb;