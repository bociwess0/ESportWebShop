import { useSelector } from 'react-redux';
import classes from './CheckoutUserInfo.module.css';
import { RootTypeForm } from '../../../../Redux/formSlice';

interface Props {
    formItem: string;
}

function FormComponent({formItem} : Props) {
    return(
        <div className={classes.formItem}>{formItem}</div>
    )
}

function CheckoutUserInfo() {

    const formData = useSelector((state : RootTypeForm) => state.formActions.formData);

    return(
        <div className={classes.checkoutUserInfoWrapper}>
            <h3>User info</h3>
            {Object.entries(formData).map(([key, value]) => <FormComponent key={key} formItem={String(value)} />)}
        </div>
    )
}

export default CheckoutUserInfo;