import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchData = () => {
    return async (dispatch) => {
        const fetchCart = async () => {
            const response = await fetch('https://nextjs-course-70f4d-default-rtdb.firebaseio.com/cart.json' );

            if (!response.ok) {
                throw new Error('Data not found errors');
            }

            return await response.json();
        };

        try {
            const cartData = await fetchCart();
            dispatch(cartActions.populateCart(cartData));
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Error to send data',
                })
            );
        }
    }
}

export const sendData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Pending...',
                message: 'Data is sending....',
            })
        );

        const requestData = async () => {
            await fetch(
                'https://nextjs-course-70f4d-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        products: cart.products,
                        totalQuantity: cart.totalQuantity,
                    })
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
        }

        requestData().catch(() => {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Error to send data',
                })
            );
        });
    };
}
