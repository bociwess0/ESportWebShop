import classes from './ProfileBanner.module.css';
import img from '../../../../Assets/profile_banner.png';

function ProfileBanner() {
    return(
        <div className={classes.profileBannerImageWrapper}>
            <img src={img} alt="profile-banner" />
            <div className={classes.profileBannerImageWrapperBlackDrop}></div>
            <div className={classes.bannerText}>User Order History</div>
        </div>
    )
}

export default ProfileBanner;