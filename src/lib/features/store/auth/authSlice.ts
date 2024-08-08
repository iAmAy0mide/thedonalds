import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isLoggedIn: boolean;
    isLoginModalOpen: boolean;
}

const getLocalStorageItem = (key: string): boolean => {
    if (typeof window !== 'undefined') {
        const item = localStorage.getItem("isLoggedIn");
        return item ? JSON.parse(item) : false;
    }
    return false;
} 

const initialState: AuthState = {
    isLoginModalOpen: false,
    isLoggedIn: getLocalStorageItem("isLoggedIn")             
   
}

console.log("From Slice");
if (typeof window !== 'undefined') { 
    
    console.log("From Slice Client");
} else {
    
    console.log("From Slice server");
}

const fn = async () => {
    const URL = process.env.environment === "prod" ? 'https://thedonalds.vercel.app' : "http://localhost:3000"; 
    const res = await fetch(`http://localhost:3000/api/comments`, { cache: "no-cache"});
    const comments = await res.json();
    console.log(comments, "from Slice fn"); 
}

// fn()



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
            console.log("Clicked");
            
        }
    }
});

export const { setIsLoggedIn, signOut, setLoginModalStatus } = AuthSlice.actions;
export default AuthSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit';

// export interface AuthState {
//     isLoggedIn: boolean;
//     isLoginModalOpen: boolean;
// }

// const getLocalStorageItem = (key: string): boolean => {
//     if (typeof window !== 'undefined') {
//         const item = localStorage.getItem("isLoggedIn");
//         return item ? JSON.parse(item) : false;
//     }
//     return false;
// } 

// const initialState: AuthState = {
//     isLoginModalOpen: false,
//     isLoggedIn: getLocalStorageItem("isLoggedIn")             
   
// }

// export const AuthSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         setIsLoggedIn: (state, action) => {
//             state.isLoggedIn = action.payload;
//             localStorage.setItem("isLoggedIn", JSON.stringify(action.payload));
//         },
//         signOut: (state) => {
//             state.isLoggedIn = false;
//             localStorage.clear();
//         },
//         setLoginModalStatus: (state, action) => {
//             state.isLoginModalOpen = action.payload;
//         }
//     }
// });

// export const { setIsLoggedIn, signOut, setLoginModalStatus } = AuthSlice.actions;
// export default AuthSlice.reducer;


