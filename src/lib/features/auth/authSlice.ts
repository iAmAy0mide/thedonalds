import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isLoggedIn: boolean;
    isLoginModalOpen: boolean;
}

const initialState: AuthState = {
    isLoginModalOpen: false,
    isLoggedIn: localStorage.getItem("isLoggedIn") 
    // @ts-ignore
                ? JSON.parse(localStorage.getItem("isLoggedIn")) 
                : false,
                
   
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
            localStorage.clear();
        },
        setLoginModalStatus: (state, action) => {
            state.isLoginModalOpen = action.payload;
        }
    }
});

export const { setIsLoggedIn, signOut, setLoginModalStatus } = AuthSlice.actions;
export default AuthSlice.reducer;