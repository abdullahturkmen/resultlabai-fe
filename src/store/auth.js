import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem('token') ?? false
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
            state.token = false
        }

    }
})


export const {login,logout} = auth.actions
export default auth.reducer