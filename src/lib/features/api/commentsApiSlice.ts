import { apiSlice } from "./apiSlice";


export const commentsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCommentsByIdM: builder.mutation({
            query: ({albumId}) => ({
                url: "http://localhost:3000/api/comments/commentId",
                method: "POST",
                body: albumId,
            })
        }),
        getCommentsById: builder.query<IComments, string>({
            query: (currentAlbumId) => ({
                url: `http://localhost:3000/api/comments/commentId?commentId=${currentAlbumId}`,
            }),
        }),
        getAlbumPhotosById: builder.query({
            query: (currentAlbumId) => ({
                url: `http://localhost:3000/api/comments/commentId?commentId=${currentAlbumId}`,
            }),
        }),

    }) 
});

export const {
    useGetCommentsByIdMMutation,
    useGetCommentsByIdQuery,
} = commentsApiSlice;