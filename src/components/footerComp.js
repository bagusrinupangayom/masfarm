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
                                <div>701-931-6988</div>
                                <div>hello@granville.com</div>
                            </div>
                        </Col>
                        <Col sm={2}>
                            <h3>Address</h3>

                            <div className="footerContact">
                                <div>1420 Willis Avenue</div>
                                <div>Jacksonville, FL 32216</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default FooterComp;
