import { apiSlice } from "./apiSlice";


export const commentsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCommentsById: builder.mutation({
            query: (albumId) => ({
                url: "",
                method: "POST",
                body: albumId,
            })
        })
    })
});

export const {
    useGetCommentsByIdMutation,
} = commentsApiSlice;