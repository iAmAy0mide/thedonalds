import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/store/auth/authSlice";
import modalReducer from "./features/modal/modalSlice";

export const makeStore = () => {
    return configureStore({
            reducer: {
                auth: authReducer,
                modal: modalReducer,
            }
        })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// //  Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch