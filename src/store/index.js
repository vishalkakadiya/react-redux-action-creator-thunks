import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './cart';
// import authReducer from './auth';

// configureStore will call one time only.
const store = configureStore({
    reducer: {
        cart: cartReducer,
        // auth: authReducer
    }
});

export default store;
