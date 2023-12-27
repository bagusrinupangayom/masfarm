import { Container, Row, Col } from 'react-bootstrap';

const FooterComp = () => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col sm={7}>
                            <div className="footerTag mb-4">
                                <div>The best quality </div>
                                <div>produce – from us to you</div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <h3>Contact</h3>

                            <div className="footerContact mb-4">
                                <div>089-231-6148</div>
                                <div>hello@masfarm.com</div>
                            </div>
                        </Col>
                        <Col sm={2}>
                            <h3>Address</h3>

                            <div className="footerContact">
                                <div>Soekarno Street 11</div>
                                <div>Semarang, Indonesia</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default FooterComp;
