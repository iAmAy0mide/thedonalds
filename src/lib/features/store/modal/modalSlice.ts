import { createSlice } from "@reduxjs/toolkit";

const initialState: IModal = {
    isCommentModalOpen: false,
    isUploadPhotoModalOpen: false,
    isDisplayAlbumPhotosOpen: false,
}

const ModalSlice = createSlice({
    name: "modalSlice",
    initialState,
    reducers: {
        setCommentModalStatus: (state, action) => {
            state.isCommentModalOpen = action.payload;
        },
        setUploadPhotoModalStatus: (state, action) => {
            state.isUploadPhotoModalOpen = action.payload;
        },
        setDisplayAlbumPhotos: (state, action) => {
            state.isDisplayAlbumPhotosOpen = action.payload;
        }
    }
});

export const { setCommentModalStatus, setUploadPhotoModalStatus, setDisplayAlbumPhotos} = ModalSlice.actions;
export default ModalSlice.reducer;