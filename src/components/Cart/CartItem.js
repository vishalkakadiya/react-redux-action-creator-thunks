import { useDispatch } from "react-redux";

import classes from './CartItem.module.css';
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
    const dispatch = useDispatch();

    const { title, quantity, total, price } = props.item;

    const handleDecreaseQuantity = () => {
        dispatch(cartActions.decreaseQuantity(title));
    }

  const handleIncreaseQuantity = () => {
      dispatch(cartActions.increaseQuantity(title));
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
          <button onClick={handleDecreaseQuantity}>-</button>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
