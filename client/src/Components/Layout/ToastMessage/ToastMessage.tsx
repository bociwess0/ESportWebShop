import { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import classes from './ToastMessage.module.css';

interface ToastMessage {
    show: boolean,
    onClose: () => void;
    message: string
}

function ToastMessage ({ show, onClose, message }: ToastMessage) {

    const [showToast, setShowToast] = useState(show);

    useEffect(() => {
        if (show) {
            setShowToast(true);
          const timer = setTimeout(() => {
            setShowToast(false);
            onClose();
          }, 800); // 1000ms = 1 second
    
          return () => clearTimeout(timer);
        }
    }, [show, onClose]);
    
      return (
        <Toast show={show} onClose={onClose} className={`${classes.toastWrapper} toast-transition ${showToast ? 'show' : 'hide'}`}  autohide>
          <Toast.Body className={classes.toastWrapperBody}>{message}</Toast.Body>
        </Toast>
      );
}

export default ToastMessage;