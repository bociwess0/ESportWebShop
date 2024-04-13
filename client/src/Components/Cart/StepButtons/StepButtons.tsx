import { NavLink, useLocation, useNavigation } from 'react-router-dom';
import classes from './StepButtons.module.css';
import { useEffect, useState } from 'react';
import PopupModal from '../../Layout/PopupModal/PopupModal';
import { clearCart } from '../../../DatabaseRequests/Requests';

function StepButtons() {

    const location = useLocation();
    const [justifyContent, setJustifyContent] = useState('');

    const [next, setNext]  = useState('');
    const [prev, setPrev] = useState('');

    useEffect(() => {
        switch(location.pathname) {
            case '/cart/productsInCart': {
                setNext('/cart/address');
                setJustifyContent('end')
            } break;
            case '/cart/checkout': {
                setPrev('/cart/address');
                setJustifyContent('space-between');
            }
        }
    }, [location])
    

    return(
        <div className={classes.stepButtonsWrapper} style={{justifyContent: justifyContent}}>
            {!location.pathname.includes('productsInCart') && <NavLink to={prev} className={`${classes.stepButton} prevButton`}>Prev Step</NavLink>}
            {!location.pathname.includes('checkout') && <NavLink to={next} className={`${classes.stepButton} nextButton`}>Next Step</NavLink>}
            {location.pathname.includes('checkout') && <PopupModal message="Are you sure you want to submit your order?" buttonText='Secure checkout' action={clearCart} />}
        </div>
    )
}

export default StepButtons;