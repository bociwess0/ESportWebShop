import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import classes from './PopupModal.module.css';

interface Props {
    buttonText: string,
    message: string,
    action: (() => void) | boolean;
    action2: (() => void) | boolean;
    showModal: boolean
}

function PopupModal({buttonText, message, action, showModal, action2} : Props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAction = () => {
        (action as () => void)();
        setShow(false);
    }

    const handleAction2 = () => {
        (action2 as () => void)();
        setShow(false);
    }

    useEffect(() => {
        if(showModal) setShow(true);
    }, [showModal])

    return(
        <>
            {buttonText !== "" && <Button className={classes.triggerButton} variant="primary" onClick={handleShow}> {buttonText}  </Button>}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body style={{fontSize: "16px", textAlign: "center", fontWeight: 500}} >{message}</Modal.Body>
                <Modal.Footer style={{justifyContent: 'center', border: "none", gap: "40px"}}>
                    <Button style={{textTransform: "uppercase", background: "linear-gradient(#DA0047, #7E002C)", border: "none", borderRadius: "20px", padding: "5px 30px"}} variant="primary" onClick={handleAction}>
                        Yes
                    </Button>
                    <Button style={{textTransform: "uppercase", border: "none", borderRadius: "20px", padding: "5px 30px"}} variant="secondary" onClick={handleAction2}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PopupModal;