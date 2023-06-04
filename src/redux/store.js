import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './account/accountSlice';

// slices
export const store = configureStore({
    reducer: {
        account: accountReducer,
    }
});

