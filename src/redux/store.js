import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './account/accountSlice';
import allowancesReducer from './allowance/allowancesSlice';
// slices
export const store = configureStore({
    reducer: {
        account: accountReducer,
        allowances: allowancesReducer,
    },
});
