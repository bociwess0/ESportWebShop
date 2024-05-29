import { useSelector } from "react-redux";
import { User } from "../../../../Interfaces/Interface";
import classes from "./UserData.module.css";
import { RootStateProfile } from "../../../../Redux/profileSlice";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useState } from "react";

function UserData() {

    const currentUser: User = useSelector((state: RootStateProfile) => state.profileActions.loggedUser);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    return(
        <div className={classes.userCardWrapper}>
            <Form style={{width: "100%"}} noValidate>
                <Container>
                    <Row className="mb-12">
                        <Col md={12}>
                            <Form.Group style={{marginBottom: "10px"}}  controlId="firstName">
                                <Form.Label style={{ color: "#1D1E21" }}>First Name</Form.Label>
                                <Form.Control type="text" placeholder={currentUser.firstName} required onChange={(text) => setFirstName(text.target.value)} />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid first name.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group style={{marginBottom: "10px"}} controlId="lastName">
                                <Form.Label style={{ color: "#1D1E21" }}>Last Name</Form.Label>
                                <Form.Control type="text" placeholder={currentUser.lastName} required onChange={(text) => setLastName(text.target.value)} />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid last name.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group style={{marginBottom: "10px"}} controlId="email">
                                <Form.Label style={{ color: "#1D1E21" }}>Email</Form.Label>
                                <Form.Control type="email" placeholder={currentUser.email} required onChange={(text) => setEmail(text.target.value)} />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group style={{marginBottom: "10px"}} controlId="phone">
                                <Form.Label style={{ color: "#1D1E21" }}>Phone</Form.Label>
                                <Form.Control type="number" placeholder={currentUser.phone} required onChange={(text) => setPhone(text.target.value)} />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid phone.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group style={{marginBottom: "10px"}} controlId="formGridAddress1">
                                <Form.Label style={{ color: "#1D1E21" }}>Address</Form.Label>
                                <Form.Control placeholder={currentUser.address} required onChange={(text) => setAddress(text.target.value)} />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid address.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group style={{marginBottom: "10px"}} controlId="formGridCity">
                                <Form.Label style={{ color: "#1D1E21" }}>City</Form.Label>
                                <Form.Control placeholder={currentUser.city} required onChange={(text) => setCity(text.target.value)} />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group style={{marginBottom: "10px"}} controlId="password">
                                <Form.Label style={{ color: "#1D1E21" }}>Password</Form.Label>
                                <Form.Control type="password" required onChange={(text) => setPassword(text.target.value)} />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}

export default UserData;