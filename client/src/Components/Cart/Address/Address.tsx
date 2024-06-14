
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import classes from './Address.module.css';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setForm } from '../../../Redux/formSlice';
import { RootStateProfile } from '../../../Redux/profileSlice';
import { User } from '../../../Interfaces/Interface';

function Address() {

    const userLoggedIn = useSelector((state: RootStateProfile) => state.profileActions.isLoggedIn);
    const loggedUser: User = useSelector((state: RootStateProfile) => state.profileActions.loggedUser);


    const [validated, setValidated] = useState<boolean>(false);
    const [readonly, setReadonly] = useState(false);

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

    useEffect(() => {
        if(userLoggedIn) {
            setReadonly(true);

            setFirstName(loggedUser.firstName)
            setLastName(loggedUser.lastName)
            setEmail(loggedUser.email)
            setPhone(loggedUser.phone)
            setAddress(loggedUser.address)
            setCity(loggedUser.city)
            
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
    }, [userLoggedIn])


    return(
        <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="firstName">
                        <Form.Label style={{color: "#ffffff"}}>First Name</Form.Label>
                        <Form.Control value={firstName} readOnly={readonly} type="text" placeholder="Enter First Name" required onChange={(text) => setFirstName(text.target.value)} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid firstName. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="lastName">
                        <Form.Label style={{color: "#ffffff"}}>Last Name</Form.Label>
                        <Form.Control value={lastName} readOnly={readonly} type="First Name" placeholder="Last Name" required onChange={(text) => setLastName(text.target.value)} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid lastName. </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="email">
                        <Form.Label style={{color: "#ffffff"}}>Email</Form.Label>
                        <Form.Control value={email} readOnly={readonly} type="email" placeholder="Enter email" required onChange={(text) => setEmail(text.target.value)} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid email. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="phone">
                        <Form.Label style={{color: "#ffffff"}}>Phone</Form.Label>
                        <Form.Control value={phone} readOnly={readonly} type="number" placeholder="Phone" required onChange={(text) => setPhone(text.target.value)} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid phone. </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label style={{color: "#ffffff"}}>Address</Form.Label>
                        <Form.Control value={address} readOnly={readonly} placeholder="Kneza Mihaila" required onChange={(text) => setAddress(text.target.value)} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid address. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label style={{color: "#ffffff"}}>City</Form.Label>
                        <Form.Control value={city} readOnly={readonly} placeholder="Belgrade" required onChange={(text) => setCity(text.target.value)} />
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