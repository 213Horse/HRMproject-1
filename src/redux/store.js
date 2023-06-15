import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './account/accountSlice';
import allowancesReducer from './allowance/allowancesSlice';
import positionsReducer from './position/positionSlice';
// slices
export const store = configureStore({
    reducer: {
        account: accountReducer,
        allowances: allowancesReducer,
        positions: positionsReducer,
    },
});
