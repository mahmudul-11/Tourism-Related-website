import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Container, Navbar } from 'react-bootstrap';

import { HashLink } from 'react-router-hash-link';

import './Navigation.css'
import navLogo from '../../images/nav-image/nav-icon.png'



const Navigation = () => {

    return (
        <>
            <Navbar className='nav-bg py-2' sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand >
                        {/* <img src={navLogo} style={{ height: "50px", width: "60px", border: "2px solid white", borderRadius: "50%", padding: "7px" }} alt="" /> */}
                        <span className='font-style' style={{ color: "white", fontWeight: "800", marginLeft: "20px" }}>Traveling World</span>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">


                        <Nav.Link as={HashLink} to="/home" >Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/manageOrders" >Manage Orders</Nav.Link>
                        <Nav.Link as={HashLink} to="/addService" >Add Service</Nav.Link>
                        <Nav.Link as={HashLink} to="" >My Orders</Nav.Link>

                        {/* {user?.email ?
                            <Nav className='ml-4'>
                                
                                <span> <Button onClick={logOut} className='mr-2' style={{border:'none',outline:'none',fontSize:'larger',backgroundColor: '#1b92aa'}}> {userIcon} </Button> <span style={{color:'yellow', fontWeight:'700'}}>{user.displayName}</span></span>
                            </Nav> :
                            <Nav.Link as={HashLink} to="/login">Log in</Nav.Link>} */}


                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Navigation;