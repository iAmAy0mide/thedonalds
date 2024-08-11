import { createSlice } from "@reduxjs/toolkit";

const initialState: ICommentID = {
    commentId: ""
}

interface ICommentID {
    commentId: string;
}

const CommentIdSlice = createSlice({
    name: "commentIdSlice",
    initialState,
    reducers: {
        updateCurrentAlbumCommentId: (state, action) => {
            state.commentId = action.payload;
        },
    }
});

export const { updateCurrentAlbumCommentId } = CommentIdSlice.actions;
export default CommentIdSlice.reducer;