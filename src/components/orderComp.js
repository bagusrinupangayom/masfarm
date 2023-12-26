import { Container, Row, Col, Image } from 'react-bootstrap';

import cornImage from '../assets/img/corn.jpg';
import broccoliImage from '../assets/img/broccoli.jpg';
import beetrootImage from '../assets/img/beetroot.jpg';
import bellpepperImage from '../assets/img/bellpepper.jpg';
import pumpkinImage from '../assets/img/pumpkin.jpg';
import radishImage from '../assets/img/radish.jpg';

const OrderComp = () => {
    return (
        <>
            <section className="bgOrder">
                <Container>
                    <div className="text-center">
                        <h2>ORDER</h2>
                        <div className="textOrder mt-3">
                            <h5>
                                We deliver quality produce from our farm to your home, from our family to yours – with love. Our selection is seasonal, so get in touch if you want to find out what’s
                                growing now.
                            </h5>
                        </div>

                        <div className="mt-5 text-center">
                            <a href="/#" className="getInTouchBtn">
                                Get in touch
                            </a>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="bgSelectOrder">
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div className="text-center">
                                <Image src={cornImage} alt="Corn" fluid />
                            </div>

                            <div className="text-center mb-5">
                                <p className="mt-3">Corn</p>
                                <h5>$5.00</h5>
                            </div>
                        </Col>

                        <Col sm={4}>
                            <div className="text-center">
                                <Image src={beetrootImage} alt="Beetroot" fluid />
                            </div>

                            <div className="text-center mb-5">
                                <p className="mt-3">Beetroot</p>
                                <h5>$5.00</h5>
                            </div>
                        </Col>

                        <Col sm={4}>
                            <div className="text-center">
                                <Image src={pumpkinImage} alt="Pumpkin" fluid />
                            </div>

                            <div className="text-center mb-5">
                                <p className="mt-3">Pumpkin</p>
                                <h5>$5.00</h5>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={4}>
                            <div className="text-center">
                                <Image src={bellpepperImage} alt="Bellpepper" fluid />
                            </div>

                            <div className="text-center mb-5">
                                <p className="mt-3">Corn</p>
                                <h5>$5.00</h5>
                            </div>
                        </Col>

                        <Col sm={4}>
                            <div className="text-center">
                                <Image src={radishImage} alt="Radish" fluid />
                            </div>

                            <div className="text-center mb-5">
                                <p className="mt-3">Beetroot</p>
                                <h5>$5.00</h5>
                            </div>
                        </Col>

                        <Col sm={4}>
                            <div className="text-center">
                                <Image src={broccoliImage} alt="Broccoli" fluid />
                            </div>

                            <div className="text-center mb-5">
                                <p className="mt-3">Pumpkin</p>
                                <h5>$5.00</h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bgOrder">
                <Container>
                    <div className="text-center">
                        <div className="textOrder">
                            <h2>Shape and size don't matter, but deliciousness does. We sow heirloom seeds and harvest all crops.</h2>
                        </div>

                        <div className="mt-5 text-center">
                            <a href="/#" className="getInTouchBtn">
                                Find out more
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default OrderComp;
