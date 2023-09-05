import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    user: [
        {
            id: "1",
            name: "admin",
            email: "admin@gmail.com",
            password: "admin",
            role: "admin",
            lastLogin: null
        },
    ]
}

const currentDate = new Date();

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = {
                id: nanoid(),
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                role: action.payload.role,
                lastLogin: {
                    year: currentDate.getFullYear(),
                    month: currentDate.getMonth() + 1, // Months are zero-based, so add 1
                    day: currentDate.getDate(),
                    hours: currentDate.getHours(),
                    minutes: currentDate.getMinutes(),
                    seconds: currentDate.getSeconds(),
                    milliseconds: currentDate.getMilliseconds()
                }
            }
            state.user.push(user)
        },
        removeUser: (state, action) => {
            state.user = state.user.filter(user => user.id !== action.payload.id)
        },
        loginUser: (state, action) => {
            state.user = state.user.map((user) => {
                if (user.id === action.payload.id) {
                    user.lastLogin = {
                        year: currentDate.getFullYear(),
                        month: currentDate.getMonth() + 1, // Months are zero-based, so add 1
                        day: currentDate.getDate(),
                        hours: currentDate.getHours(),
                        minutes: currentDate.getMinutes(),
                        seconds: currentDate.getSeconds(),
                        milliseconds: currentDate.getMilliseconds()
                    }
                }
            })
        }
    }
})

export const { addUser, removeUser, loginUser } = userSlice.actions
export default userSlice.reducer