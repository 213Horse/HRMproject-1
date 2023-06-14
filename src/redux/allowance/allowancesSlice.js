import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    fetchListAllowance,
    addAllowanceList,
    updateAllowanceList,
    deleteListAllowance,
    sreachAllowancesByEmployeeId,
} from '../../services/allowance-api';

const initialState = {
    allowances: [],
    status: 'idle',
    error: null,
};

export const fetchAllowances = createAsyncThunk('allowances/fetchAllowances', async (token) => {
    const response = await fetchListAllowance(token);
    return response.data;
});
export const addAllowance = createAsyncThunk('allowances/addAllowance', async (allowance, token) => {
    const response = await addAllowanceList(allowance, token);
    return response.data;
});

export const updateAllowance = createAsyncThunk('allowances/updateAllowance', async (allowance, token) => {
    const response = await updateAllowanceList(allowance, token);
    return response.data;
});

export const deleteAllowance = createAsyncThunk('allowances/deleteAllowance', async (token) => {
    await deleteListAllowance(token);
    return token;
});

export const fetchAllowancesByEmployeeId = createAsyncThunk('allowances/fetchAllowancesByEmployeeId', async (token) => {
    const response = await sreachAllowancesByEmployeeId(token);
    return response.data;
});
// export const addAllowance = createAsyncThunk('allowances/addAllowance', async (allowance) => {
//     const response = await addAllowanceList(allowance);
//     return response.data;
// });

// export const updateAllowance = createAsyncThunk('allowances/updateAllowance', async (allowance) => {
//     const response = await updateAllowanceList(allowance);
//     return response.data;
// });

// export const deleteAllowance = createAsyncThunk('allowances/deleteAllowance', async (Id) => {
//     await deleteListAllowance(Id);
//     return Id;
// });

// export const fetchAllowancesByEmployeeId = createAsyncThunk(
//     'allowances/fetchAllowancesByEmployeeId',
//     async (employeeId) => {
//         const response = await sreachAllowancesByEmployeeId(employeeId);
//         return response.data;
//     },
// );

const allowancesSlice = createSlice({
    name: 'allowance',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllowances.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllowances.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allowances = action.payload;
            })
            .addCase(fetchAllowances.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addAllowance.fulfilled, (state, action) => {
                state.allowances.push(action.payload);
            })
            .addCase(updateAllowance.fulfilled, (state, action) => {
                const index = state.allowances.findIndex((allowance) => allowance.id === action.payload.id);
                state.allowances[index] = action.payload;
            })
            .addCase(deleteAllowance.fulfilled, (state, action) => {
                const index = state.allowances.findIndex((allowance) => allowance.id === action.payload);
                state.allowances.splice(index, 1);
            });
    },
});

export default allowancesSlice.reducer;
