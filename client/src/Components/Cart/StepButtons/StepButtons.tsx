import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import classes from './StepButtons.module.css';
import { useEffect, useState } from 'react';
import PopupModal from '../../Layout/PopupModal/PopupModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateProducts, confirmOrder } from '../../../Redux/cartSlice';
import { clearCart, sendEmailMessage, submitOrder } from '../../../DatabaseRequests/Requests';
import { Order, User } from '../../../Interfaces/Interface';
import { RootStateProfile } from '../../../Redux/profileSlice';
import { RootTypeForm } from '../../../Redux/formSlice';

function StepButtons() {

    const location = useLocation();
    const navigate = useNavigate();
    const [justifyContent, setJustifyContent] = useState('');
    const cartConfirm = useSelector((state: RootStateProducts) => state.cartActions.cartConfirm);
    const currentUser: User = useSelector((state: RootStateProfile) => state.profileActions.loggedUser);
    const userLoggedIn: User = useSelector((state: RootStateProfile) => state.profileActions.isLoggedIn);
    const totalProducts : number = useSelector((state: RootStateProducts) => state.cartActions.totalProductsInCart);
    const formData = useSelector((state : RootTypeForm) => state.formActions.formData);    

    const [showModal, setShowModal] = useState<boolean>(false);    

    const [next, setNext]  = useState('');
    const [prev, setPrev] = useState('');

    const dispatch = useDispatch();

    async function handleConfirmOrder() {
        

        dispatch(confirmOrder());

        if(userLoggedIn) {
            const order: Order | null = await submitOrder(currentUser.email);
            if(typeof order?.id !== "undefined") sendEmailMessage(currentUser.email, order.id);
        }

        if(formData && !userLoggedIn) {
            const order: Order | null = await submitOrder(formData.email);
            if(typeof order?.id !== "undefined") sendEmailMessage(formData.email, order.id);
        }
        
    }

    function isNotEmptyObject(obj: object): boolean {
        return Object.keys(obj).length > 0;
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


    useEffect(() => {  
        
        if(!userLoggedIn && location.pathname.includes('checkout') && !isNotEmptyObject(formData)) {
            navigate("/cart/address");
        }

    }, [userLoggedIn, formData])
    

    return(
        <div className={classes.stepButtonsWrapper} style={{justifyContent: justifyContent}}>
            {totalProducts > 0 && !cartConfirm && !location.pathname.includes('productsInCart') && <NavLink to={prev} className={`${classes.stepButton} prevButton`}>Prev Step</NavLink>}
            {totalProducts > 0 && !location.pathname.includes('checkout') && <NavLink to={next} className={`${classes.stepButton} nextButton`}>Next Step</NavLink>}
            {totalProducts > 0 && !cartConfirm && location.pathname.includes('checkout') && <PopupModal showModal={false} action2={() => setShowModal(false)}  message="Are you sure you want to submit your order?" buttonText='Secure checkout' action={handleConfirmOrder} />}
            {cartConfirm && location.pathname.includes('checkout') && <NavLink onClick={clearCart} to={'/products'} className={`${classes.stepButton} prevButton`}>Back To Products</NavLink> }
            {totalProducts === 0 && <NavLink onClick={clearCart} to={'/products'} className={`${classes.stepButton} prevButton`}>Back To Products</NavLink> }
        </div>
    )
}

export default StepButtons;