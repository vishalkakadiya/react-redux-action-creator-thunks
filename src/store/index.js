import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './cart';
import uiReducer from './ui';

// configureStore will call one time only.
const store = configureStore({
    reducer: {
        cart: cartReducer,
        ui: uiReducer,
    }
});

export default store;
