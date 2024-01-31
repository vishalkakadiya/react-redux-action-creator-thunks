import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    products: [],
    totalQuantity: 0,
    showCart: false
};

const cartSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increaseQuantity(state, action) {
            state.products = state.products.map(product => {
                if (action.payload.title === product.title) {
                    product.quantity = product.quantity + 1;
                    product.total = product.total + action.payload.price;
                }
                return product;
            });
        },
        decreaseQuantity(state, action) {
            state.products = state.products.map(product => {
                if (action.payload.title === product.title) {
                    product.quantity = product.quantity - 1;
                    product.total = product.total - action.payload.price;
                }
                return product;
            });
        },
        addToCart(state, action) {
            state.products = [...state.products, action.payload];
            console.log(state.products);
            state.totalQuantity = state.products.length;
            // console.log(state);
        },
        toggleCounter(state) {
            state.showCart = !state.showCart;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
