import { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";
import UserData from "./UserData/UserData";
import classes from './UserInfo.module.css';


function UserInfo() {

    const [enableEdit, setEnableEdit] = useState(false);
    const [title, setTitle] = useState("This is your current data. Click EDIT to change it.")
    const [titleColor, setTitleColor] = useState("#DA0047");

    const enableEditing = () => {
        setEnableEdit(!enableEdit);
    }

    useEffect(() => {
        if(enableEdit) {
            setTitle("Please insert new data!")
            setTitleColor("#198754");
        } else {
            setTitle("This is your current data. Click EDIT to change it.")
            setTitleColor("#DA0047");
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