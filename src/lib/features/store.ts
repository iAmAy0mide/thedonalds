import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./store/auth/authSlice";
import modalReducer from "./store/modal/modalSlice";
import commentIdReducer from "./store/commentId/commentId";
import newAlbumReducer from "./store/newAlbum/newAlbum";
import { apiSlice } from "./api/apiSlice";
import randomStrgReducer from "./store/randomStrg/randomStrg";

export const makeStore = () => {
    return configureStore({
            reducer: {
                [apiSlice.reducerPath]: apiSlice.reducer,
                auth: authReducer,
                modal: modalReducer,
                comment: commentIdReducer,
                updatedAlbums: newAlbumReducer,
                randomStrg: randomStrgReducer,
            },
            middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
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