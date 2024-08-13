import { apiSlice } from "./apiSlice";
import { BASE_URL } from "@/utils/constants";

export const commentsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCommentsById: builder.query<IComments, string>({
            query: (currentAlbumId) => ({
                url: `${BASE_URL()}/api/comments/commentId?commentId=${currentAlbumId}`,
            }),
        }),
        getAlbumPhotosById: builder.query({
            query: (currentAlbumId) => ({
                url: `${BASE_URL()}/api/comments/commentId?commentId=${currentAlbumId}`,
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