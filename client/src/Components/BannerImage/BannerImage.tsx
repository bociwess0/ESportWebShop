import classes from './BannerImage.module.css';
import BannerImg from '../../Assets/home_banner.jpg';

function BannerImage() {
    return (
        <div className={classes.bannerImageWrapper}>
            <img src={BannerImg} alt="" />
        </div>
    )
}

export default BannerImage;
