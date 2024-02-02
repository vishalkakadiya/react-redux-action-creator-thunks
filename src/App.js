import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";

import { sendData } from "./store/cart";

let initialCart = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector(state => state.ui.showCart);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {

        if (initialCart) {
            initialCart = false;
            return;
        }

        dispatch(sendData(cart));
    }, [cart, dispatch]);

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
