
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import classes from './Address.module.css';
import StepButtons from '../StepButtons/StepButtons';
import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function Address() {

    const [validated, setValidated] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = (event : any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (form.checkValidity() === true) navigate("/cart/checkout");

        setValidated(true);
    };


    return(
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="firstName">
                        <Form.Label style={{color: "#ffffff"}}>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" required />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid firstName. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="lastName">
                        <Form.Label style={{color: "#ffffff"}}>Last Name</Form.Label>
                        <Form.Control type="First Name" placeholder="Last Name" required />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid lastName. </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="email">
                        <Form.Label style={{color: "#ffffff"}}>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid email. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="phone">
                        <Form.Label style={{color: "#ffffff"}}>Phone</Form.Label>
                        <Form.Control type="number" placeholder="Phone" required />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid phone. </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label style={{color: "#ffffff"}}>Address</Form.Label>
                        <Form.Control placeholder="Kneza Mihaila" required />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid address. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label style={{color: "#ffffff"}}>City</Form.Label>
                        <Form.Control placeholder="Belgrade" required />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid city. </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <div className={classes.stepButtonsWrapper}>
                    <NavLink to={"/cart/productsInCart"} className={`${classes.stepButton} prevButton`}>Prev Step</NavLink>
                    <Button type='submit' className={`${classes.stepButton} nextButton`}>Next Step</Button>
                </div>
            </Form>
        </Container>
    )
}

export default Address;