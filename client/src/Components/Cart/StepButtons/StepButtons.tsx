import { NavLink, useLocation, useNavigation } from 'react-router-dom';
import classes from './StepButtons.module.css';
import { useEffect, useState } from 'react';
import PopupModal from '../../Layout/PopupModal/PopupModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateProducts, confirmOrder } from '../../../Redux/cartSlice';
import { clearCart } from '../../../DatabaseRequests/Requests';

function StepButtons() {

    const location = useLocation();
    const [justifyContent, setJustifyContent] = useState('');
    const cartConfirm = useSelector((state: RootStateProducts) => state.cartActions.cartConfirm);

    const [next, setNext]  = useState('');
    const [prev, setPrev] = useState('');

    const dispatch = useDispatch();

    const handleConfirmOrder = () => {
        dispatch(confirmOrder());
    }

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
            {!cartConfirm && !location.pathname.includes('productsInCart') && <NavLink to={prev} className={`${classes.stepButton} prevButton`}>Prev Step</NavLink>}
            {!location.pathname.includes('checkout') && <NavLink to={next} className={`${classes.stepButton} nextButton`}>Next Step</NavLink>}
            {!cartConfirm && location.pathname.includes('checkout') && <PopupModal message="Are you sure you want to submit your order?" buttonText='Secure checkout' action={handleConfirmOrder} />}
            {cartConfirm && location.pathname.includes('checkout') && <NavLink onClick={clearCart} to={'/products'} className={`${classes.stepButton} prevButton`}>Back To Products</NavLink> }
        </div>
    )
}

export default StepButtons;