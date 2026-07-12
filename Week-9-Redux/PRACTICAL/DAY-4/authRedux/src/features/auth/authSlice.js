import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user: null,
    token: null,
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'authRedux',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user =  action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true
        },

        logOut:(state)=>{
            state.user = null
            state.token = null
            state.isLoggedIn = false
        }
    }
})

export const {login,logOut} = authSlice.actions
export default authSlice.reducer