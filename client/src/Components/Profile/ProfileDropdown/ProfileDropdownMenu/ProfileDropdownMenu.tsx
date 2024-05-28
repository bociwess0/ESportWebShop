
import classes from "./ProfileDropdownMenu.module.css";
import logoutIcon from "../../../../Assets/logout_profile.png";
import editIcon from "../../../../Assets/edit_profile.png";

function ProfileDropdownMenu() {

    const logoutHandler = () => {
        localStorage.removeItem("currentUser");
        window.location.reload();
    }

    return (
        <div className={classes.profileDropdownMenu}>
            <div className={classes.pddMenuItem}>
                <img className={classes.pddMenuIcon} src={editIcon} alt="" />
                <div className="pddText">Edit</div>
            </div>
            <div className={classes.pddMenuItem}>
                <img className={classes.pddMenuIcon} src={logoutIcon} alt="" />
                <button className="pddText" onClick={logoutHandler} >Logout</button>
            </div>
        </div>
    )
}

export default ProfileDropdownMenu;