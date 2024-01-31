import { useDispatch, useSelector } from "react-redux";

import classes from './CartItem.module.css';
import { cartActions } from "../../store/cart";

const CartItem = (props) => {
    const dispatch = useDispatch();

    const { title, quantity, total, price } = props.item;

    const handleDecreaseQuantity = (title, price) => {
        dispatch(cartActions.decreaseQuantity({ title, price }));
    }

  const handleIncreaseQuantity = (title, price) => {
      dispatch(cartActions.increaseQuantity({ title, price }));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => handleDecreaseQuantity(title, price)}>-</button>
          <button onClick={() => handleIncreaseQuantity(title, price)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
