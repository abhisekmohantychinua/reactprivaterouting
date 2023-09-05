import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    alert: null
}

export const alertSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        createAlert: (state, action) => {
            state.alert = action.payload
        },
        removeAlert: (state, action) => {
            state.alert = null
        }
    }
})

export const { createAlert, removeAlert } = alertSlice.actions
export default alertSlice.reducer;
