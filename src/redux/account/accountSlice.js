import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: {
        userId: '',
        Email: '',
        FullName: '',
        listRoles: [], 
        Username: '',
    },
};

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: { 
        doLoginAction: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            localStorage.setItem('isAuthenticated', true);
        },
        doLogoutAction: (state) => {
            state.isAuthenticated = false;
            state.user = {
                userId: '',
                Email: '',
                FullName: '',
                listRoles: [], 
                Username: '',
            };
            localStorage.removeItem('isAuthenticated');
        },
    },
    extraReducers: (builder) => {
        builder;
    },
});

export const { doLoginAction, doLogoutAction } = accountSlice.actions;

export default accountSlice.reducer;
