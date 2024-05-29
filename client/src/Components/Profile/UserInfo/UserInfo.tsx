import UserCard from "./UserCard/UserCard";
import UserData from "./UserData/UserData";
import classes from './UserInfo.module.css';


function UserInfo() {
    return(
        <div className={classes.userInfoWrapper}>
            <UserCard />
            <UserData />
        </div>
    )
}

export default UserInfo;