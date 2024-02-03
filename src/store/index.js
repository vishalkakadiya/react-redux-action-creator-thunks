import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './cart-slice';
import uiReducer from './ui-slice';

// configureStore will call one time only.
const store = configureStore({
    reducer: {
        cart: cartReducer,
        ui: uiReducer,
    }
});

export default store;
