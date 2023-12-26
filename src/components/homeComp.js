import { Container, Row, Col, Image } from 'react-bootstrap';
import paprikaImg from '../assets/img/paprika.jpg';
import tomatoImg from '../assets/img/tomato.jpg';

const HomeComp = () => {
    return (
        <>
            <div className="myBg">
                <Container>
                    <div className="header text-center">
                        <p>Fresh and straight</p>
                        <p>from the farm</p>
                    </div>

                    <div className="text-center mt-5">
                        <a href="/#" className="offerBtn">
                            What's on offer
                        </a>
                    </div>
                </Container>
            </div>

            <section>
                <Container>
                    <div className="story text-center">
                        <h1>
                            Our farm is more than just the land and the crops. It's a way of life and the future of our children. You're supporting a small, family-run business when you by our
                            produce.
                        </h1>

                        <div className="text-center mt-5">
                            <a href="/#" className="storyBtn">
                                Our story
                            </a>
                        </div>
                    </div>

                    <div className="ecoProducts">
                        <Row>
                            <Col sm={6}>
                                <div className="text-center">
                                    <Image src={paprikaImg} alt="Paprika Image" fluid />
                                </div>

                                <h4 className="text-center mt-4">ECO PRODUCTS</h4>

                                <div className="mt-5 mb-5 text-center">
                                    <a href="/#" className="ecoBtn">
                                        Shop now
                                    </a>
                                </div>
                            </Col>
                            <Col sm={6}>
                                <div className="text-center">
                                    <Image src={tomatoImg} alt="Tomato Image" fluid />
                                </div>

                                <h4 className="text-center mt-4">ECO FARMING</h4>

                                <div className="mt-5 text-center">
                                    <a href="/#" className="ecoBtn">
                                        Learn now
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <section className="bgInTouch">
                <Container>
                    <div className="text-center">
                        <div className="textOrder">
                            <h2>We're proud to be farmers. From our fields to your plate, all of our produce is grown with love.</h2>
                        </div>
                    </div>

                    <div className="mt-5 text-center">
                        <a href="/#" className="getInTouchBtn">
                            Get in touch
                        </a>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default HomeComp;
