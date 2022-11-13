import { createSlice } from '@reduxjs/toolkit'

const foodSlice = createSlice({
    name: 'food',
    initialState: {
        foods: [],
        loading: false,
        error: null,
    },
    reducers: {
        getAllFoodRequest(state, action) {
            state.loading = true;
            state.error = null;
        },
        getAllFoodSuccess(state, action) {
            state.loading = false;
            state.foods = action.payload;
        },
        getAllFoodFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default foodSlice;