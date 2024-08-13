import { createSlice } from "@reduxjs/toolkit";

interface UpdatedAlbumsData {
    updatedAlbums: IAlbumData[],
    shouldUpdate: boolean;
    updatedDeletedAlbum: IAlbumData[],
    shouldUpdateDeleted: boolean;
}

const initialState: UpdatedAlbumsData = {
    updatedAlbums: [],
    shouldUpdate: true,
    updatedDeletedAlbum: [],
    shouldUpdateDeleted: true,
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
                console.log(albums, "update store")
                console.log("clicked delete button")
            // }
        }
    }
});

export const { 
    updateAlbumPage, 
    updateShouldUpdateBol, 
    updateAlbumPageFromForm, 
    updateAlbumPageFromDeleteBtn } = NewAlbumSlice.actions;
export default NewAlbumSlice.reducer;