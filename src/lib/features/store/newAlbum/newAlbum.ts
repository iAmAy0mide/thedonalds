import { createSlice } from "@reduxjs/toolkit";

interface UpdatedAlbumsData {
    updatedAlbums: IAlbumData[],
    shouldUpdate: boolean;
    updatedDeletedAlbum: IAlbumData[]
}

const initialState: UpdatedAlbumsData = {
    updatedAlbums: [],
    shouldUpdate: true,
    updatedDeletedAlbum: [],
}

const NewAlbumSlice = createSlice({
    name: "updatedAlbum",
    initialState,
    reducers: {
        updateAlbumPage: (state, action) => {
            state.updatedAlbums = action.payload?.albums;
            console.log("This didn't clicked delete button instead");       
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

export const { updateAlbumPage, updateShouldUpdateBol, updateAlbumPageFromDeleteBtn } = NewAlbumSlice.actions;
export default NewAlbumSlice.reducer;