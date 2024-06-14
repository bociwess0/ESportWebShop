import { useEffect, useState } from "react";
import LoginModal from "../../Layout/Header/Modals/LoginModal/LoginModal";
import RegisterModal from "../../Layout/Header/Modals/RegisterModal/RegisterModal";
import { RootStateProfile } from "../../../Redux/profileSlice";
import { useSelector } from "react-redux";
import { User } from "../../../Interfaces/Interface";
import classes from "./ProfileDropdown.module.css";
import ProfileDropdownMenu from "./ProfileDropdownMenu/ProfileDropdownMenu";

function ProfileDropdown() {

    const currentUser: User = useSelector((state: RootStateProfile) => state.profileActions.loggedUser);
    const isLoggedIn: User = useSelector((state: RootStateProfile) => state.profileActions.isLoggedIn);

    const [buttonText, setButtonText] = useState<string>('USER-LOGIN')

    const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
    const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);

    const [showLoginDropdown, setShowLoginDropdown] = useState<boolean>(false);

    useEffect(() => {
        if(isLoggedIn) {
            setButtonText(`${currentUser.firstName} ${currentUser.lastName}`);
        } else {
            setShowLoginDropdown(false);
        }
    }, [isLoggedIn])

    const handleLoginModal = () => {
        setShowLoginModal(!showLoginModal);
        setShowRegisterModal(false);
    }

    const handleRegisterModal = () => {
        setShowRegisterModal(!showRegisterModal);
        setShowLoginModal(false);
    }

    const onClickAction = () => {
        if(!isLoggedIn) {
            handleLoginModal();
        } else {
            setShowLoginDropdown(!showLoginDropdown);
        }
    }

    return(
        <div className={classes.profileDropdown}>
                <div className={classes.helloMessage}>Welcome Back!</div>
                <button className={classes.loginLink} onClick={onClickAction}>{buttonText}</button>
                {showLoginDropdown && <ProfileDropdownMenu />}
                <LoginModal modalShow={showLoginModal} showHideBsModal={handleLoginModal} showRegisterModal={handleRegisterModal}/>
                <RegisterModal modalShow={showRegisterModal} showHideBsModal={setShowRegisterModal} showLoginModal={handleLoginModal} />
        </div>
    )
}

export default ProfileDropdown;