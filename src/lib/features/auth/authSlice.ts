import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") 
    // @ts-ignore
                ? JSON.parse(localStorage.getItem("isLoggedIn")) 
                : false
}

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
            localStorage.setItem("isLoggedIn", JSON.stringify(action.payload));
        },
        signOut: (state) => {
            state.isLoggedIn = false;
            localStorage.clear()
        }
    }
})