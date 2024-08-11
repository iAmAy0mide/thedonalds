import { createSlice } from "@reduxjs/toolkit";

interface U {
    newAlbum: IAlbumData[]
}

const initialState: U = {
    newAlbum: [],
}

const NewAlbumSlice = createSlice({
    name: "updatedAlbum",
    initialState,
    reducers: {
        updateAlbumPage: (state, action) => {
            state.newAlbum = action.payload;
        }
    }
});

export const { updateAlbumPage } = NewAlbumSlice.actions;
export default NewAlbumSlice.reducer;