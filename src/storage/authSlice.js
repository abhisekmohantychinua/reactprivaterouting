import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    auth: {
        user: null,
        jwt: '',
    }
}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addAuth: (state, action) => {
            state.auth.user = action.payload.user
            state.auth.jwt = action.payload.jwt
        },
        removeAuth: (state, action) => {
            action
            state.auth.user = null
            state.auth.jwt = ''
        }
    }
})

export const { addAuth, removeAuth, setLoading } = authSlice.actions
export default authSlice.reducer