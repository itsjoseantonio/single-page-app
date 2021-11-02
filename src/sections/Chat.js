import { Container, Row, Col } from 'bootstrap-4-react';

// Component //
import ChatRoom from '../components/chat/ChatRoom';

// Styles //
import '../styles/components/chat/chat.css';

const Chat = () => {
    return (
        <section id="chat" className="pd-4 pb-4">
            <Container className="container py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col className="col-md-6">
                        <div className="card card-bordered">
                            <div className="card-header">
                                <h4 className="card-title">
                                    <strong>Chat</strong>
                                </h4>
                            </div>
                            <ChatRoom />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Chat;
