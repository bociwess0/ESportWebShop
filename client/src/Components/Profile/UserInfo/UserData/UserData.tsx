import { useSelector } from "react-redux";
import { UpdatedUser, User } from "../../../../Interfaces/Interface";
import classes from "./UserData.module.css";
import { RootStateProfile } from "../../../../Redux/profileSlice";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { sendEmailUserUpdateMessage, updateUser } from "../../../../DatabaseRequests/Requests";

interface Props {
    title: string,
    titleColor: string,
    enableEdit: boolean
}

function UserData({title, titleColor, enableEdit}: Props) {
    const currentUser: User = useSelector((state: RootStateProfile) => state.profileActions.loggedUser);

    const [titleMessage, setTitleMessage] = useState<string>(title);
    const [titleColorVar, setTitleColorVar] = useState<string>(titleColor);
    

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
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
    
    useEffect(() => {
        setTitleMessage(title);
    }, [title]);

    const HandleSubmit = async (event: any) => {
        event.preventDefault();

        let user: UpdatedUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            currentPassword: password,
            newPassword: newPassword,
            phone: phone,
            address: address,
            city: city
        }

        let response = await updateUser(user);

        if(response) {
            setTitleColorVar(titleColor);
            setTitleMessage("Your data has been successfully changed!")
            sendEmailUserUpdateMessage(email);
            window.location.reload();
        } else {
            setTitleColorVar("eb474c");
            setTitleMessage("Password has not a correct form or the current password is not found!")
        }

    }

    return (
        <div className={classes.userCardWrapper}>
            <Form style={{ width: "100%" }} noValidate onSubmit={HandleSubmit}>
                <Container>
                    <Row className="mb-12">
                        <Col md={12}>
                            <div className={classes.title} style={{color: titleColorVar}}>{titleMessage}</div>
                            <Form.Group style={{ marginBottom: "20px" }} controlId="firstName">
                                <Form.Label style={{ color: "#FFFFFF" }}>First Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    readOnly={!enableEdit} 
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
                                    readOnly={!enableEdit} 
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
                                    readOnly={!enableEdit}  
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
                                    readOnly={!enableEdit} 
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
                                    readOnly={!enableEdit} 
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
                                    readOnly={!enableEdit} 
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
                                    readOnly={!enableEdit} 
                                    value={password}
                                    required 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
                            </Form.Group>
                            
                            <Form.Group style={{ marginBottom: "20px" }} controlId="newPassword">
                                <Form.Label style={{ color: "#FFFFFF" }}>New Password</Form.Label>
                                <Form.Control 
                                    type="password"
                                    readOnly={!enableEdit} 
                                    value={newPassword}
                                    required 
                                    onChange={(e) => setNewPassword(e.target.value)} 
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
