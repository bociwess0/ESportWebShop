
import classes from './UserCard.module.css';
import userImage from '../../../../Assets/user_image.png';
import { useSelector } from 'react-redux';
import { RootStateProfile } from '../../../../Redux/profileSlice';
import { User } from '../../../../Interfaces/Interface';

function UserCard() {

    const currentUser: User = useSelector((state: RootStateProfile) => state.profileActions.loggedUser);

    return(
        <div className={classes.userCardWrapper}>
            <div className={classes.userImage}>
                <img src={userImage} alt="user-image" />
            </div>
            <div className={classes.userName}>{`${currentUser.firstName} ${currentUser.lastName}`}</div>
            <div className={classes.userButtons}>
                <button className={classes.buttonEdit}>Edit</button>
                <button className={classes.buttonLogout}>Logout</button>
            </div>
        </div>
    )
}

export default UserCard;