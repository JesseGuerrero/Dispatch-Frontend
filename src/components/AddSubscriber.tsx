import {Button, Col, Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import {requestAPI} from "../Utils";

function AddSubscriber() {
    const [responseText, setResponseText] = useState("");
    const [firstName, setFirstName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await requestAPI('/subscribe', 'PUT', {
            recipient: email,
            firstName: firstName
        });
        if(response && response.ok) {
            setFirstName("")
            setEmail("")
            setResponseText("Subscriber added!")
        } else
            setResponseText("Improper data")
    };
    return (
        <Container className="broadcast-container">
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit} className="broadcast-form">
                        <h2>Add Subscriber</h2>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="recipient" onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <p>{responseText}</p>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddSubscriber;