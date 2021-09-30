import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Topbar.css";

const Topbar = props => {
    const navlink = {
        color: "red",
    };
    return (
        <Navbar bg="primary" sticky='top' variant="dark" expand="lg">
            <Container >
                <Navbar.Brand href="#">mealDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className=" ms-auto my-2 my-lg-0 fw-bold me-5"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink
                            to="/"
                            className='s'
                        >
                        </NavLink>
                        <NavLink
                            to="/home"
                            activeStyle={navlink}
                            className='s'
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/show"
                            activeStyle={navlink}
                            className='s'

                        >
                            Show
                        </NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            onChange={props.handleSearch}
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Topbar;