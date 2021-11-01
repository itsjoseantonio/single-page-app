import { Container, Row, Col } from 'bootstrap-4-react';

// Components //
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
    return (
        <section id="contact" className="pd-4 pb-4">
            <Container className="container py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col className="col col-xl-10">
                        <h2 className="text-center">Contáctanos</h2>
                        <div className="card border-0">
                            <div className="card-body p-2 p-sm-5">
                                <ContactForm />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
