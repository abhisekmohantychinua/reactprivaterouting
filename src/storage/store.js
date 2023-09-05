import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import authReducer from './authSlice'
import alertReducer from './alertSlice';
import loadingReducer from './loadSlice';

export const store = configureStore({
    reducer: {
        users: userReducer,
        auth: authReducer,
        alert: alertReducer,
        loading: loadingReducer,
    }
})