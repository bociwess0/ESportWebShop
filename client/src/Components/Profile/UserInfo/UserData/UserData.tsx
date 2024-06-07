import { useSelector } from "react-redux";
import { User } from "../../../../Interfaces/Interface";
import classes from "./UserData.module.css";
import { RootStateProfile } from "../../../../Redux/profileSlice";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

interface Props {
    title: string,
    titleColor: string,
    enableEdit: boolean
}

function UserData({title, titleColor, enableEdit}: Props) {
    const currentUser: User = useSelector((state: RootStateProfile) => state.profileActions.loggedUser);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    useEffect(() => {
        setFirstName(currentUser.firstName || '');
        setLastName(currentUser.lastName || '');
        setEmail(currentUser.email || '');
        setPhone(currentUser.phone || '');
        setAddress(currentUser.address || '');
        setCity(currentUser.city || '');
    }, [currentUser]);

    return (
        <div className={classes.userCardWrapper}>
            <Form style={{ width: "100%" }} noValidate>
                <Container>
                    <Row className="mb-12">
                        <Col md={12}>
                            <div className={classes.title} style={{color: titleColor}}>{title}</div>
                            <Form.Group style={{ marginBottom: "20px" }} controlId="firstName">
                                <Form.Label style={{ color: "#FFFFFF" }}>First Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={firstName} 
                                    required 
                                    onChange={(e) => setFirstName(e.target.value)} 
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid first name.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group style={{ marginBottom: "20px" }} controlId="lastName">
                                <Form.Label style={{ color: "#FFFFFF" }}>Last Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={lastName} 
                                    required 
                                    onChange={(e) => setLastName(e.target.value)} 
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid last name.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group style={{ marginBottom: "20px" }} controlId="email">
                                <Form.Label style={{ color: "#FFFFFF" }}>Email</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    value={email} 
                                    required 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group style={{ marginBottom: "20px" }} controlId="phone">
                                <Form.Label style={{ color: "#FFFFFF" }}>Phone</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    value={phone} 
                                    required 
                                    onChange={(e) => setPhone(e.target.value)} 
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid phone.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group style={{ marginBottom: "20px" }} controlId="formGridAddress1">
                                <Form.Label style={{ color: "#FFFFFF" }}>Address</Form.Label>
                                <Form.Control 
                                    value={address} 
                                    required 
                                    onChange={(e) => setAddress(e.target.value)} 
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid address.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group style={{ marginBottom: "20px" }} controlId="formGridCity">
                                <Form.Label style={{ color: "#FFFFFF" }}>City</Form.Label>
                                <Form.Control 
                                    value={city} 
                                    required 
                                    onChange={(e) => setCity(e.target.value)} 
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group style={{ marginBottom: "20px" }} controlId="password">
                                <Form.Label style={{ color: "#FFFFFF" }}>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    value={password}
                                    required 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
                            </Form.Group>
                            {enableEdit && <Button type='submit' className={`${classes.editButton}`}>Change</Button>}
                        </Col>
                    </Row>
                </Container>
            </Form>
        </div>
    );
}

export default UserData;
