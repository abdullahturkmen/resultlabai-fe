import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('token') ?? false,
    userData: JSON.parse(localStorage.getItem('userData')) ?? false,
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            localStorage.setItem('token', action.payload)
            state.token = action.payload
        },
        logout: state => {
            localStorage.removeItem('token')
            localStorage.removeItem('userData')
            state.token = false
            state.userData = false
        },
        authUser: (state, action) => {
            localStorage.setItem('userData', JSON.stringify(action.payload))
             state.userData = action.payload
        },
    },

})

export const { login, logout, authUser } = auth.actions
export default auth.reducer