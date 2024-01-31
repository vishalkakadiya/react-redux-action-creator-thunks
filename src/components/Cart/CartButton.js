import { useDispatch, useSelector } from "react-redux";

import classes from './CartButton.module.css';
import { cartActions } from "../../store/cart";

const CartButton = () => {
    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    const handleCartToggle = () => {
        dispatch(cartActions.toggleCounter());
    }

  return (
    <button className={classes.button} onClick={handleCartToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
