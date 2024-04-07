
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import classes from './Address.module.css';

function Address() {
    return(
        <Container>
            <Form>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="First Name" placeholder="Last Name" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" placeholder="Phone" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    )
}

export default Address;