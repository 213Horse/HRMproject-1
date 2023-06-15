import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPositions, createPosition, updatePosition, deletePosition } from '../../services/position-api';
const initialState = {
    positions: [],
    status: 'idle',
    error: null,
};

export const fetchListPositions = createAsyncThunk('positions/fetchListPositions', async (token) => {
    const response = await fetchPositions(token);
    return response.data;
});

export const createNewPosition = createAsyncThunk('positions/createNewPosition', async (data) => {
    const response = await createPosition(data);
    return response.data;
});

export const editPosition = createAsyncThunk('positions/editPosition', async ({ id, data }) => {
    const response = await updatePosition(id, data);
    return response.data;
});

export const removePosition = createAsyncThunk('positions/removePosition', async (id) => {
    await deletePosition(id);
    return id;
});

const positionSlice = createSlice({
    name: 'positions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchListPositions.fulfilled, (state, action) => {
                state.positions = action.payload;
            })
            .addCase(createNewPosition.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(removePosition.fulfilled, (state, action) => {
                return state.filter((position) => position.id !== action.payload);
            })
            .addCase(editPosition.fulfilled, (state, action) => {
                const index = state.findIndex((position) => position.id === action.payload.id);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            });
    },
});

export default positionSlice.reducer;
