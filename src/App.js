import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";

import { sendData, fetchData } from "./store/cart-actions";

let initialCart = true;

function App() {
    const dispatch = useDispatch();

    const showCart = useSelector(state => state.ui.showCart);
    const cart = useSelector(state => state.cart);
    const changed = useSelector(state => state.cart.changed);
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    useEffect(() => {
        if (initialCart) {
            initialCart = false;
            return;
        }

        if (changed) {
            dispatch(sendData(cart));
        }
    }, [cart, changed, dispatch]);

    return (
        <>
            {notification && <Notification data={notification} />}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </>
  );
}

export default App;
