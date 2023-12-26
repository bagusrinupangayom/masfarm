import { Container, Navbar, Nav, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const NavigationBarComp = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                    <Container>
                        <Navbar.Brand>
                            <Nav.Link onClick={() => navigate('/')}>Masfarm</Nav.Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Stack gap={2}>
                                <Nav className="ms-auto text-end">
                                    <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                                    <Nav.Link onClick={() => navigate('/order')}>Order</Nav.Link>
                                    <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
                                    <Nav.Link href="/#">Contact</Nav.Link>
                                    <Nav.Link onClick={() => navigate('/coba')}>Coba</Nav.Link>
                                </Nav>
                            </Stack>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default NavigationBarComp;
