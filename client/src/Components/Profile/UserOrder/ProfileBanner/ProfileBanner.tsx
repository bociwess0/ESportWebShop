import classes from './ProfileBanner.module.css';
import img from '../../../../Assets/banner_profile.png';

function ProfileBanner() {
    return(
        <div className={classes.profileBannerImageWrapper}>
            <img src={img} alt="profile-banner" />
        </div>
    )
}

export default ProfileBanner;