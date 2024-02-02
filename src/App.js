import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";

import { uiActions } from './store/ui';

let initialCart = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector(state => state.ui.showCart);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {

        const sendCartData = async () => {
            dispatch(
                uiActions.showNotification({
                    status: 'pending',
                    title: 'Pending...',
                    message: 'Data is sending....',
                })
            );

            const response = await fetch(
                'https://nextjs-course-70f4d-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                }
            );

            // The below code is handled in .catch() below.
            // if (!response.ok) {
            //     throw new Error('Sending data is failed');
            // }

            // This is used to fetch the data but this is not needed for us right now.
            // const responseData = response.json();

            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Data is sent successfully!',
                })
            );
        };

        if (initialCart) {
            initialCart = false;
            return;
        }

        sendCartData().catch(error => {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Error to send data',
                })
            );
        });
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
