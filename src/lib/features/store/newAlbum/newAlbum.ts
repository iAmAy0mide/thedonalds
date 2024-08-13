import { createSlice } from "@reduxjs/toolkit";

interface UpdatedAlbumsData {
    updatedAlbums: IAlbumData[],
    shouldUpdate: boolean;
    updatedDeletedAlbums: IAlbumData[],
    shouldUpdateDeletedPage: boolean;
}

const initialState: UpdatedAlbumsData = {
    updatedAlbums: [],
    shouldUpdate: true,
    updatedDeletedAlbums: [],
    shouldUpdateDeletedPage: true,
}

const NewAlbumSlice = createSlice({
    name: "updatedAlbum",
    initialState,
    reducers: {
        updateAlbumPage: (state, action) => {
            state.updatedAlbums = action.payload;
        },

        updateAlbumPageFromForm: (state, action) => {
            const updatedFForm = state.updatedAlbums = [ ...action.payload, ...state.updatedAlbums ]

        },

        updateShouldUpdateBol: (state, action) => {
            state.shouldUpdate = action.payload;
        },

        updateAlbumPageFromDeleteBtn: (state, action) => {
                const albums = state.updatedAlbums.filter((album: IAlbumData) => album._id !== action.payload.albumId);
                state.updatedAlbums = albums;
        },

        updateDeletedAlbums: (state, action) => {
            state.updatedDeletedAlbums = action.payload;
        },

        updateDeletedAlbumsFromBtn: (state, action) => {
            const albums = state.updatedDeletedAlbums.filter((album: IAlbumData) => album._id !== action.payload );
                state.updatedDeletedAlbums = albums;
        },

        updateShouldUpdateDeletedPageBol: (state, action) => {
            state.shouldUpdateDeletedPage = action.payload;
        }
    }
});

export const { 
    updateAlbumPage, 
    updateShouldUpdateBol, 
    updateAlbumPageFromForm, 
    updateAlbumPageFromDeleteBtn,
    updateDeletedAlbums,
    updateDeletedAlbumsFromBtn,
    updateShouldUpdateDeletedPageBol, } = NewAlbumSlice.actions;
export default NewAlbumSlice.reducer;