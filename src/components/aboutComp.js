import { Container, Row, Col, Image } from 'react-bootstrap';
import redFruit from '../assets/img/redFruit.jpg';

const AboutComp = () => {
    return (
        <>
            <section className="fBgAbout">
                <Container>
                    <div className="text-center">
                        <h2>ABOUT US</h2>
                        <div className="textOrder mt-3">
                            <h5>Nature gets it right, so we get it from nature. The food that we grow here at Masfarm is eco-certified and loved, from seed to harvest.</h5>

                            <p className="mt-3">
                                We're a small, family-owned and run farm. Our philosophy is to produce ecological fruits and vegetables of the best quality. That means sourcing heirloom seeds, not
                                using harmful pesticides, and rotating crops. While our yields aren't huge, Masfarm's produce is, truly, of the best quality you can get. Filled with minerals and
                                vitamins, you can rest easy knowing that your family is well-taken care of. Nutritious and simple, we harvest all of our produce, minimizing waste, and making sure that
                                crooked carrot finds its way onto your table too.
                            </p>
                        </div>

                        <div className="mt-5 text-center">
                            <a href="/#" className="getInTouchBtn">
                                Get in touch
                            </a>
                        </div>
                    </div>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="text-center">
                        <Image src={redFruit} fluid />
                    </div>
                </Container>
            </section>

            <section className="ourValues">
                <Container>
                    <div className="text-center">
                        <h2>OUR VALUES</h2>
                        <div className="mt-3">
                            <h3>Be the change you want to see in world</h3>
                        </div>
                    </div>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <div className="text-center mb-4 p-3">
                                <h4>IT'S ALL ECO CERTIFIED</h4>

                                <p>We're a 100% certified ecological farm. This is a principle that's engrained not just in our work, but in our family too. We trust nature and that it knows best.</p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="text-center mb-5 p-3">
                                <h4>SUPER FRESH</h4>

                                <p>There is no time to waste with organic produce. Use it up when it's at its best, and cut out the need for preservatives or other additives.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <div className="text-center mb-5 p-3">
                                <h4>FAMILY OWNED</h4>

                                <p>Masfarm's produce is a family owned and run business. When we retire, all of the fruits of our labor will be left for our kids and grandkids to run.</p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="text-center p-3">
                                <h4>SUSTAINABLE FARMING</h4>

                                <p>We live by the principle that our work has to be good for the nature. We are working towards running a fully zero-waste organic farm here at Masfarm.</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="mt-5 text-center">
                        <a href="/#" className="getInTouchBtn">
                            Read more
                        </a>
                    </div>
                </Container>
            </section>

            <section className="eBgAbout">
                <Container>
                    <div className="text-center">
                        <div className="textOrder">
                            <h2>We're all about real food that's fresh, ecological, and sustainable.</h2>
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

export default AboutComp;
