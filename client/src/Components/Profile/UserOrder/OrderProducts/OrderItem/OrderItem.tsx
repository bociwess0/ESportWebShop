import classes from './OrderItem.module.css';
import arrow from '../../../../../Assets/arrow_down.png';
import { useState } from 'react';

function OrderItem() {

    const [selected, setSelected] = useState(false);

    const onClickHandler = () => {
        setSelected(!selected);
    }

    return(
        <div className={classes.orderItemWrapper} onClick={onClickHandler}>
            <button className={classes.orderItem} style={{borderRadius: selected ? "10px 10px 0 0" : "10px"}}>
                <div className={classes.itemText}>Order Item</div>
                <img className={classes.arrow} src={arrow} alt="arrow-img" style={{transform: selected ? "rotate(180deg)": "rotate(0deg)"}} />
            </button>
            <div className={classes.orderItemContent} style={{maxHeight: selected ? "500px" : "0"}}>

            </div>
        </div>
    )
}

export default OrderItem;