import{ useState, CSSProperties, useEffect } from 'react';
import classes from './OrderItem.module.css';
import arrow from '../../../../../Assets/arrow_down.png';
import OrderProduct from './OrderProduct/OrderProduct';
import { Order, OrderProductObj, User } from '../../../../../Interfaces/Interface';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomDot from './CustomDot/CustomDot';
import OrderStatusChanger from './OrderStatusChanger/OrderStatusChanger';
import { changeOrderStatus } from '../../../../../DatabaseRequests/Requests';
import { useSelector } from 'react-redux';
import { RootStateProfile } from '../../../../../Redux/profileSlice';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

interface Props {
  order: Order
}

function OrderItem ({order} : Props) {
  const [selected, setSelected] = useState<boolean>(false);

  const [deliveredClass, setDeliveredClass] = useState<string>(classes.toBeDelivered);
  const loggedUser: User = useSelector((state: RootStateProfile) => state.profileActions.loggedUser);
  

  let products = order.orderItems;

  const onClickHandler = () => {
    setSelected(!selected);
  };

  const selectedStyle: CSSProperties = {
    maxHeight: selected ? "500px" : "0",
  };

  const formatDateTime = (dateTime: string) => {
    return dateTime.replace("T", " ");
  }

  useEffect(() => {
    switch(order.orderStatus) {
      case "To be delivered":  {
        setDeliveredClass(classes.toBeDelivered)
      } break;
      case "Delivered" : {
        setDeliveredClass(classes.delivered)
      } break;
      case "Canceled" : {
        setDeliveredClass(classes.canceled)
      } break;
    }
  }, [order.orderStatus])

  function delivereHandler(){
    changeOrderStatus(order.id, "Delivered");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  function cancelHandler() {
    changeOrderStatus(order.id, "Canceled");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  return (
    <div className={classes.orderItemWrapper}>
      <button className={classes.orderItem} onClick={onClickHandler}>
        <div className={classes.itemText} style={{display: "flex", justifyContent: "space-between", width: "100%", paddingRight: "20px"}}>
          <div className="text">{`Order id: ${order.id}`}</div>
          <div className={`${classes.orderStatus} ${deliveredClass}`} >{order.orderStatus}</div>
          <div className="date">{formatDateTime(order.orderDate.toString())}</div>
        </div>
        <img className={classes.arrow} src={arrow} alt="arrow-img" style={{ transform: selected ? "rotate(180deg)" : "rotate(0deg)" }} />
      </button>
      <div className={classes.orderItemContent} style={selectedStyle}>
        <div className={classes.orderProductData}>
          <div className={classes.orderProductList}>
            <Carousel
              swipeable
              draggable
              showDots
              renderDotsOutside
              customDot={<CustomDot />}
              responsive={responsive}
              ssr
              infinite
              keyBoardControl
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              additionalTransfrom={0}
            >
              {products.map((item: OrderProductObj) => (
                <OrderProduct product={item} key={item.id} />
              ))}
            </Carousel>
          </div>
          <div className={classes.totalPrice}>{`Total: ${order.totalPrice}€`}</div>
          {order.orderStatus === "To be delivered" && <OrderStatusChanger 
                orderStatus="delivered"
                action={delivereHandler}
                buttonText='Delivered' 
                message='If you have received your order, please confirm by clicking the button next to it:' 
                popupMessage="Are you sure you want to set this order as deliverd?"
                email={loggedUser.email}
                emailMessage="We are glad you get what you deserve! Thanks for the feedback about delivery."
                key={1}
          />}
          {order.orderStatus === "To be delivered" && <OrderStatusChanger 
                orderStatus="cancel"
                action={cancelHandler}
                buttonText='Cancel' 
                message='If you want to cancel this order please confirm by clicking the button next to it:' 
                popupMessage="Are you sure you want to cancel this order?"
                email={loggedUser.email}
                emailMessage="You successfully canceled your order!"
                key={2}
          />}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
