import { useEffect } from "react";
import { Toast } from "react-bootstrap";
import classes from './ToastMessage.module.css';

interface ToastMessage {
    show: boolean,
    onClose: () => void;
    message: string
}

function ToastMessage ({ show, onClose, message }: ToastMessage) {
    useEffect(() => {
        console.log(show);
        
        if (show) {
          const timer = setTimeout(() => {
            onClose();
          }, 1000); // 1000ms = 1 second
    
          return () => clearTimeout(timer);
        }
    }, [show, onClose]);
    
      return (
        <Toast show={true} className={classes.toastWrapper} >
          <Toast.Body className={classes.toastWrapperBody}>{message}</Toast.Body>
        </Toast>
      );
}

export default ToastMessage;