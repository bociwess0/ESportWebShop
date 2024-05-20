
import { Button } from "react-bootstrap";
import classes from "./HeaderProfile.module.css";
import LoginModal from "../Modals/LoginModal/LoginModal";
import { useState } from "react";
import RegisterModal from "../Modals/RegisterModal/RegisterModal";

function HeaderProfile() {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const handleLoginModal = () => {
        setShowLoginModal(!showLoginModal);
        setShowRegisterModal(false);
    }

    const handleRegisterModal = () => {
        setShowRegisterModal(!showRegisterModal);
        setShowLoginModal(false);
    }

    return(
        <div className={classes.headerProfileWrapper}>
            <div className={classes.helloMessage}>Welcome Back!</div>
            <button className={classes.loginLink} onClick={handleLoginModal}>
                USER-LOGIN
            </button>
            <LoginModal modalShow={showLoginModal} showHideBsModal={handleLoginModal} showRegisterModal={handleRegisterModal}/>
            <RegisterModal modalShow={showRegisterModal} showHideBsModal={setShowRegisterModal} showLoginModal={handleLoginModal} />
        </div>
    )
}

export default HeaderProfile;