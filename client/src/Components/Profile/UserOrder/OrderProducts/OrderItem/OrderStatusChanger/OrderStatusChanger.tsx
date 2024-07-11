import { useState } from "react";
import classes from "./OrderStatusChanger.module.css";
import PopupModal from "../../../../../Layout/PopupModal/PopupModal";
import ToastMessage from "../../../../../Layout/ToastMessage/ToastMessage";

interface Props {
    message: string,
    buttonText: string,
    action: Function,
    orderStatus: string,
    popupMessage: string,
}

function OrderStatusChanger({message, orderStatus, buttonText, action, popupMessage}: Props) {

    const [showModal, setShowModal] = useState<boolean>(false);

    const [showToast, setShowToast] = useState(false);

    let status = orderStatus === "delivered" ? classes.delivered : classes.cancel;

    const handleShowToast = () => {        
      setShowToast(true);
    };
  
    const handleCloseToast = () => {
      setShowToast(false);
    };

    function actionHandler() {
        action();
        handleShowToast();
    }

    return(
        <div className={classes.orderStatusWrapper}>
            <div className={classes.title}>{message}</div>
            <button onClick={() => setShowModal(true)} className={`${classes.actionButton} ${status}`}>{buttonText}</button>
            <PopupModal action={actionHandler} action2={() => setShowModal(false)} showModal={showModal} buttonText={""} message={popupMessage} />
            <ToastMessage message="Order status is successfully changed!" show={showToast} onClose={handleCloseToast} />
        </div>
    )
}

export default OrderStatusChanger;