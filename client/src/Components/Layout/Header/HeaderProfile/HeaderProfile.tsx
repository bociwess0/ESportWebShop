
import { Button } from "react-bootstrap";
import classes from "./HeaderProfile.module.css";
import LoginModal from "../Modals/LoginModal/LoginModal";
import { useState } from "react";
import RegisterModal from "../Modals/RegisterModal/RegisterModal";
import { useSelector } from "react-redux";
import { RootStateProfile } from "../../../../Redux/profileSlice";
import { NavLink } from "react-router-dom";
import { User } from "../../../../Interfaces/Interface";

function HeaderProfile() {

    const currentUser: User = useSelector((state: RootStateProfile) => state.profileActions.loggedUser);
    const isLoggedIn: User = useSelector((state: RootStateProfile) => state.profileActions.isLoggedIn);

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
            {!isLoggedIn && <button className={classes.loginLink} onClick={handleLoginModal}>USER-LOGIN</button>}
            {isLoggedIn && <NavLink className={classes.loginLink} to="/profile">{`${currentUser.firstName} ${currentUser.lastName}`}</NavLink>}
            <LoginModal modalShow={showLoginModal} showHideBsModal={handleLoginModal} showRegisterModal={handleRegisterModal}/>
            <RegisterModal modalShow={showRegisterModal} showHideBsModal={setShowRegisterModal} showLoginModal={handleLoginModal} />
        </div>
    )
}

export default HeaderProfile;