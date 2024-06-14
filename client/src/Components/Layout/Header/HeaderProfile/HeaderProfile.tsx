
import classes from "./HeaderProfile.module.css";
import profileIcon from "../../../../Assets/user_icon.png";
import ProfileDropdown from "../../../Profile/ProfileDropdown/ProfileDropdown";

function HeaderProfile() {

    return(
        <div className={classes.headerProfileContainer}>
            <div className={classes.headerProfileIcon}>
                <img src={profileIcon} alt="profile-icon" />
            </div>
            <ProfileDropdown />
        </div>
    )
}

export default HeaderProfile;