import{ useState, CSSProperties } from 'react';
import classes from './OrderItem.module.css';
import arrow from '../../../../../Assets/arrow_down.png';
import OrderProduct from './OrderProduct/OrderProduct';
import { Order, OrderProductObj } from '../../../../../Interfaces/Interface';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomDot from './CustomDot/CustomDot';

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

  console.log(order);
  

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

  return (
    <div className={classes.orderItemWrapper}>
      <button className={classes.orderItem} onClick={onClickHandler}>
        <div className={classes.itemText} style={{display: "flex", justifyContent: "space-between", width: "100%", paddingRight: "20px"}}>
          <div className="text">{`Order id: ${order.id}`}</div>
          <div className={`${classes.orderStatus} ${order.orderStatus === "Delivered" ? classes.delivered : ''}`} >{order.orderStatus}</div>
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
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
