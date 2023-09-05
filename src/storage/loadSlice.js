import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    loading: false
}

export const loadSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        enableLoading: (state, action) => { state.loading = true },
        disableLoading: (state, action) => { state.loading = false }
    }
})

export const { enableLoading, disableLoading } = loadSlice.actions
export default loadSlice.reducer