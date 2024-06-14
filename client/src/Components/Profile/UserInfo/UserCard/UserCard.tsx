
import classes from './UserCard.module.css';
import userImage from '../../../../Assets/user_image.png';
import { useSelector } from 'react-redux';
import { RootStateProfile } from '../../../../Redux/profileSlice';
import { User } from '../../../../Interfaces/Interface';
import { useNavigate } from 'react-router-dom';

interface Props {
    enableEditing: Function
}

function UserCard({enableEditing}: Props) {

    const currentUser: User = useSelector((state: RootStateProfile) => state.profileActions.loggedUser);

    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("currentUser");
        navigate("/products");
        window.location.reload();
    }


    return(
        <div className={classes.userCardWrapper}>
            <div className={classes.userImage}>
                <img src={userImage} alt="user-image" />
            </div>
            <div className={classes.userName}>{`${currentUser.firstName} ${currentUser.lastName}`}</div>
            <div className={classes.userButtons}>
                <button className={classes.buttonEdit} onClick={() => enableEditing()}>Edit</button>
                <button className={classes.buttonLogout} onClick={logoutHandler}>Logout</button>
            </div>
        </div>
    )
}

export default UserCard;