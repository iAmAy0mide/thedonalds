import { createSlice } from "@reduxjs/toolkit";

interface UpdatedAlbumsData {
    updatedAlbums: IAlbumData[]
}

const initialState: UpdatedAlbumsData = {
    updatedAlbums: [],
}

const NewAlbumSlice = createSlice({
    name: "updatedAlbum",
    initialState,
    reducers: {
        updateAlbumPage: (state, action) => {
            state.updatedAlbums = action.payload;
        }
    }
});

export const { updateAlbumPage } = NewAlbumSlice.actions;
export default NewAlbumSlice.reducer;