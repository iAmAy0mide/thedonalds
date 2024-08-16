import { apiSlice } from "./apiSlice";
import { BASE_URL } from "@/utils/constants";

const AlbumApiSlice = apiSlice.injectEndpoints({
    
    endpoints: (builder) => ({
        getAlbums: builder.query<IAlbumData[], void>({
            query: () => ({
                url: `${BASE_URL()}/api/album`
            }),
        }),

        getAlbumPhotos: builder.query<any, string>({
            query: (albumId) => ({
                url: `${BASE_URL()}/api/album/album-photos?albumId=${albumId}`
            }),
        }),

        deleteAlbum: builder.mutation({
            query: (albumId) => ({
                url: `${BASE_URL()}/api/album/delete?albumId=${albumId}`,
                method: "DELETE"
            }),

        }),

        restoreAlbum: builder.mutation<void, string>({
            query: (albumId) => ({
              url: `${BASE_URL()}/api/album/deleted-album/restore?albumId=${albumId}`,
              method: 'PATCH',
            }),
           
        }),

        moveAlbumToDeleted: builder.mutation({
            query: (albumId) => ({
                url: `${BASE_URL()}/api/album/temp-delete?albumId=${albumId}`,
                method: "PATCH"
            }),

        }),

        getDeletedAlbum: builder.query<IAlbumData[], void>({
            query: () => ({
                url: `${BASE_URL()}/api/album/deleted-album`,
                method: "GET",
            })
        })
    })
});


export const { 
    useDeleteAlbumMutation, 
    useRestoreAlbumMutation, 
    useGetDeletedAlbumQuery, 
    useMoveAlbumToDeletedMutation, 
    useGetAlbumsQuery,
    useGetAlbumPhotosQuery,
 } = AlbumApiSlice;