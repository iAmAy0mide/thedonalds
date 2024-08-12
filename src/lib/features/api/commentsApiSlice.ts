import { apiSlice } from "./apiSlice";


export const commentsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCommentsById: builder.query<IComments, string>({
            query: (currentAlbumId) => ({
                url: `/api/comments/commentId?commentId=${currentAlbumId}`,
            }),
        }),
        getAlbumPhotosById: builder.query({
            query: (currentAlbumId) => ({
                url: `/api/comments/commentId?commentId=${currentAlbumId}`,
            }),
        }),

    }) 
});

export const { useGetCommentsByIdQuery, useGetAlbumPhotosByIdQuery } = commentsApiSlice;









// useGetCommentsByIdMMutation,
                // getCommentsByIdM: builder.mutation({
                //     query: ({albumId}) => ({
                //         url: "/api/comments/commentId",
                //         method: "POST",
                //         body: albumId,
                //     })
                // }),