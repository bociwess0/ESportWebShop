import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import classes from './PopupModal.module.css';

interface Props {
    buttonText: string,
    message: string,
    action: (() => void) | boolean;
}

function PopupModal({buttonText, message, action} : Props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAction = () => {
        (action as () => void)();
        setShow(false);
    }

    return(
        <>
            <Button className={classes.triggerButton} variant="primary" onClick={handleShow}>
                {buttonText}
            </Button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body style={{fontSize: "16px", textAlign: "center", fontWeight: 500}} >{message}</Modal.Body>
                <Modal.Footer style={{justifyContent: 'center', border: "none", gap: "40px"}}>
                    <Button style={{textTransform: "uppercase", background: "linear-gradient(#FB2740, #F3230F)", border: "none", borderRadius: "20px", padding: "5px 30px"}} variant="primary" onClick={handleAction}>
                        Yes
                    </Button>
                    <Button style={{textTransform: "uppercase", border: "none", borderRadius: "20px", padding: "5px 30px"}} variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PopupModal;