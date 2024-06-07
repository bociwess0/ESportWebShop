import { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";
import UserData from "./UserData/UserData";
import classes from './UserInfo.module.css';


function UserInfo() {

    const [enableEdit, setEnableEdit] = useState(false);
    const [title, setTitle] = useState("Your current data:")
    const [titleColor, setTitleColor] = useState("#eb474c");

    const enableEditing = () => {
        setEnableEdit(!enableEdit);
    }

    useEffect(() => {
        if(enableEdit) {
            setTitle("Please insert new data!")
            setTitleColor("#198754");
        } else {
            setTitle("Your current data:")
            setTitleColor("#eb474c");
        }
    }, [enableEdit])

    return(
        <div className={classes.userInfoWrapper}>
            <UserCard enableEditing={enableEditing} />
            <UserData title={title} titleColor={titleColor} enableEdit={enableEdit} />
        </div>
    )
}

export default UserInfo;