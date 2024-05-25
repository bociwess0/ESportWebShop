import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import classes from "./LoginModal.module.css";
import { loginUser } from "../../../../../DatabaseRequests/Requests";

interface Props {
    modalShow: boolean
    showHideBsModal: Function,
    showRegisterModal: Function
}


function LoginModal({modalShow, showHideBsModal, showRegisterModal} : Props) {

    const [validated, setValidated] = useState<boolean>(false);


    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const hideModal = () => {
        showHideBsModal(false); // Hide the modal by setting modalShow to false in the parent component
    }

    const handleShowHideModal = () => {
        showHideBsModal(); // Handle showing the Register modal
    }

    const handleRegisterModal = () => {
        showRegisterModal();
    }

    async function handleSubmit (event : any) {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();

        var logged = false;

        if (form.checkValidity() === true) {

            let formData = {
                username: username,
                password: password,
            }

            logged = (await loginUser(formData)).success;
            
        }

        setValidated(true);
        if(logged) showHideBsModal(false)
    };

    return(
        <Modal show={modalShow} onHide={hideModal} centered>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Modal.Header closeButton style={{padding: "10px 20px", border: "none", textAlign: "center"}}>
                    <Modal.Title style={{ margin: "0 auto"}}>LOGIN</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{minHeight: "230px"}}>
                    <Form.Group controlId="userName">
                        <Form.Label style={{color: "#1D1E21"}}>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" required onChange={(text) => setUserName(text.target.value)} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid username. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label style={{color: "#1D1E21"}}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required onChange={(text) => setPassword(text.target.value)} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid"> Please provide a valid password. </Form.Control.Feedback>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer style={{justifyContent: 'center', border: "none", gap: "40px"}}>
                    <Button style={{textTransform: "uppercase", background: "linear-gradient(#FB2740, #F3230F)", border: "none", borderRadius: "20px", padding: "5px 30px"}} variant="primary" type="submit">
                        LOG IN
                    </Button>
                    <Button style={{textTransform: "uppercase", border: "none", borderRadius: "20px", padding: "5px 30px"}} variant="secondary" onClick={handleRegisterModal}>
                        REGISTER
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default LoginModal;
