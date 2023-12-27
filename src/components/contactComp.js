import { Container, Row, Col, Form } from 'react-bootstrap';

const ContactComp = () => {
    return (
        <>
            <section className="fbgContact">
                <Container>
                    <div className="text-center">
                        <h2>CONTACT US</h2>

                        <div className="textOrder mt-3">
                            <h5>
                                If you're interested in finding more about us or the way we run Masfarm, feel free to get in touch. We can also advise you as to what we're currently harvesting so you
                                can order accordingly.
                            </h5>
                        </div>
                    </div>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <h3>Contact</h3>

                            <div className="footerContact mb-4">
                                <div>089-231-6148</div>
                                <div>hello@masfarm.com</div>
                            </div>

                            <h3 className="mt-5 pt-5">Address</h3>

                            <div className="footerContact mb-4 pb-4">
                                <div>Soekarno Street No. 11</div>
                                <div>Semarang, Indonesia</div>
                            </div>
                        </Col>

                        <Col sm={8}>
                            <div>
                                <Form className="custom-form">
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Name*</Form.Label>
                                        <Form.Control type="text" placeholder="Your name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicLastName">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control type="text" placeholder="Your last name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Your Email*</Form.Label>
                                        <Form.Control type="email" placeholder="Your email address" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message*</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                                    </Form.Group>

                                    <div className="mt-5">
                                        <a href="/#" className="getInTouchBtn">
                                            Send your message
                                        </a>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ContactComp;
