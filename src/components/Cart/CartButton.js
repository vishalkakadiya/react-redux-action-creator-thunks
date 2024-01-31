import { useDispatch, useSelector } from "react-redux";

import classes from './CartButton.module.css';
import { uiActions } from "../../store/ui";

const CartButton = () => {
    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    const handleCartToggle = () => {
        dispatch(uiActions.toggleCounter());
    }

  return (
    <button className={classes.button} onClick={handleCartToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
