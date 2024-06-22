import { useDispatch, useSelector } from 'react-redux';
import OrderItem from './OrderItem/OrderItem';
import classes from './OrderProducts.module.css';
import { RootStateOrders, setOrders } from '../../../../Redux/orderSlice';
import { getOrdersForUser } from '../../../../DatabaseRequests/Requests';
import { Order, User } from '../../../../Interfaces/Interface';
import { useEffect, useState } from 'react';
import { RootStateProfile } from '../../../../Redux/profileSlice';

function OrderProducts() {

    const currentUser: User | undefined = useSelector((state: RootStateProfile) => state.profileActions.loggedUser);
    const orders = useSelector((state: RootStateOrders) => state.orderActions.orders);
    

    const dispatch = useDispatch();

    useEffect(() => {
        async function getOrders(email: string) {
            try {
                let ordersDataVar: Order[] = await getOrdersForUser(email);
                dispatch(setOrders({ orders: ordersDataVar }));

            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        }

        if (currentUser?.email) {
            getOrders(currentUser.email);
        }
    }, [currentUser, dispatch]);

    return (
        <div className={classes.orderProducts}>
            {orders && orders.length > 0 && orders.map((order: Order) => <OrderItem order={order} key={order.id} />)}
            {orders.length == 0 && <h4 style={{color: "#fff"}}>You have no orders made yet.</h4>}
        </div>
    );
}

export default OrderProducts;
