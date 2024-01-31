import { useSelector } from "react-redux";

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
    const cartProducts = useSelector(state => state.cart.products);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
          {cartProducts.map(product => <CartItem key={product.title} item={product} />)}
      </ul>
    </Card>
  );
};

export default Cart;
