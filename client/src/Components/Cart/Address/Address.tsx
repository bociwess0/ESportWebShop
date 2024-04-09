
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import classes from './Address.module.css';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setForm } from '../../../Redux/formSlice';

function Address() {

    const [validated, setValidated] = useState<boolean>(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = (event : any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (form.checkValidity() === true) {
            navigate("/cart/checkout");

            let formData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                address: address,
                city: city
            }

            dispatch(setForm({formData: formData}));
        }

        setValidated(true);
    };


    return(
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="firstName">
                        <Form.Label style={{color: "#ffffff"}}>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" required onChange={(text) => setFirstName(text.target.value)} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid firstName. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="lastName">
                        <Form.Label style={{color: "#ffffff"}}>Last Name</Form.Label>
                        <Form.Control type="First Name" placeholder="Last Name" required onChange={(text) => setLastName(text.target.value)} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid lastName. </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="email">
                        <Form.Label style={{color: "#ffffff"}}>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required onChange={(text) => setEmail(text.target.value)} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid email. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="phone">
                        <Form.Label style={{color: "#ffffff"}}>Phone</Form.Label>
                        <Form.Control type="number" placeholder="Phone" required onChange={(text) => setPhone(text.target.value)} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid phone. </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label style={{color: "#ffffff"}}>Address</Form.Label>
                        <Form.Control placeholder="Kneza Mihaila" required onChange={(text) => setAddress(text.target.value)} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid address. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label style={{color: "#ffffff"}}>City</Form.Label>
                        <Form.Control placeholder="Belgrade" required onChange={(text) => setCity(text.target.value)} />
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