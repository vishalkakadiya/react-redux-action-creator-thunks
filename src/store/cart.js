import { createSlice } from "@reduxjs/toolkit";

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

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
