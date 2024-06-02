import React, { useState, CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import classes from './OrderItem.module.css';
import arrow from '../../../../../Assets/arrow_down.png';
import { RootStateProducts } from '../../../../../Redux/cartSlice';
import OrderProduct from './OrderProduct/OrderProduct';
import { Product } from '../../../../../Interfaces/Interface';
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

const OrderItem: React.FC = () => {
  const products = useSelector((state: RootStateProducts) => state.cartActions.products);
  const [selected, setSelected] = useState<boolean>(false);

  const onClickHandler = () => {
    setSelected(!selected);
  };

  const selectedStyle: CSSProperties = {
    maxHeight: selected ? "500px" : "0",
  };

  return (
    <div className={classes.orderItemWrapper}>
      <button className={classes.orderItem} onClick={onClickHandler}>
        <div className={classes.itemText}>Order Item</div>
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
              {products.map((item: Product) => (
                <OrderProduct product={item} key={item.id} />
              ))}
            </Carousel>
          </div>
          <div className={classes.totalPrice}>{`Total: 200000€`}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
