import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui";

const initialCounterState = {
    products: [],
    totalQuantity: 0
};

const cartSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increaseQuantity(state, action) {
            state.products = state.products.map(product => {
                if (action.payload === product.title) {
                    product.quantity = product.quantity + 1;
                    product.total = product.total + product.price;
                }
                return product;
            });
        },
        decreaseQuantity(state, action) {
            const existingProduct = state.products.find(product => product.title === action.payload);
            if(existingProduct) {
                if (existingProduct.quantity === 1) {
                    state.products = state.products.filter(product => product.title !== action.payload);
                } else {
                    existingProduct.quantity = existingProduct.quantity - 1;
                    existingProduct.total = existingProduct.total - existingProduct.price;
                }
            }
        },
        addToCart(state, action) {
            const newProduct = action.payload;
            const existingProduct = state.products.find(product => product.title === newProduct.title);
            if(!existingProduct) {
                state.products.push(action.payload);
                state.totalQuantity = state.products.length;
            } else {
                existingProduct.quantity = existingProduct.quantity + 1;
                existingProduct.total = existingProduct.total + existingProduct.price;
            }
        },
        removeFromCart(state, action) {
            const existingProduct = state.products.find(product => product.title === action.payload);
            if (existingProduct.quantity === 1) {
                state.products = state.products.filter(product => product.title !== action.payload);
            } else {
                existingProduct.quantity = existingProduct.quantity - 1;
                existingProduct.total = existingProduct.total - existingProduct.price;
            }
        },
        toggleCounter(state) {
            state.showCart = !state.showCart;
        }
    }
});

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

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
