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
            console.log("This didn't clicked delete button instead");       
        },

        updateAlbumPageFromForm: (state, action) => {
            const updatedFForm = state.updatedAlbums = [ ...action.payload, ...state.updatedAlbums ]

            console.log(updatedFForm, "from updatedFForm");
        },

        updateShouldUpdateBol: (state, action) => {
            state.shouldUpdate = action.payload;
        },

        updateAlbumPageFromDeleteBtn: (state, action) => {
            // if (action.payload.deleteClicked === true) {
                const albums = state.updatedAlbums.filter((album: IAlbumData) => album._id !== action.payload.albumId);
                state.updatedAlbums = albums;
                console.log(albums, "update store");
                console.log("clicked delete button");
            // }
        },

        updateDeletedAlbums: (state, action) => {
            state.updatedDeletedAlbums = action.payload;
        },

        updateDeletedAlbumsFromBtn: (state, action) => {
            const albums = state.updatedDeletedAlbums.filter((album: IAlbumData) => album._id !== action.payload );
                state.updatedDeletedAlbums = albums;
                console.log(albums, "update del store");
                console.log("clicked restore or perm button");
            // state.updatedDeletedAlbums = state.updatedDeletedAlbums.filter((album: IAlbumData) => album._id !== action.payload.albumId);
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