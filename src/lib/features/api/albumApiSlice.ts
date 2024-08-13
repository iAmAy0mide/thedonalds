import { apiSlice } from "./apiSlice";
import { BASE_URL } from "@/utils/constants";

const AlbumApiSlice = apiSlice.injectEndpoints({
    
    endpoints: (builder) => ({
        getAlbums: builder.query<IAlbumData[], void>({
            query: () => ({
                url: `${BASE_URL()}/api/album`
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
           
            // async onQueryStarted(albumId, { dispatch, queryFulfilled }) {
            //     // Optimistically update the cache by adding the restored album
            //     const patchResult = dispatch(
            //       AlbumApiSlice.util.updateQueryData('getAlbums', undefined, (draft) => {
            //         const album = draft.find((album) => album._id === albumId);
            //         if (album) {
            //             album.deleted = false;
            //         }
            //         console.log(album, "from OnQuery")
            //         console.log("Restore workeddd 1")
            //       })
            //     );
        
            //     try {
            //         console.log("Restore workeddd 2")
            //       await queryFulfilled;
            //     } catch {
            //       // If the query fails, undo the optimistic update
            //       patchResult.undo();
            //     }
            //   },
            //   invalidatesTags: ['Album'],

        }),

        moveAlbumToDeleted: builder.mutation({
            query: (albumId) => ({
                url: `${BASE_URL()}/api/album/temp-delete?albumId=${albumId}`,
                method: "PATCH"
            }),

            // async onQueryStarted(albumId, { dispatch, queryFulfilled }) {
            //     const patchResult = dispatch(
            //         AlbumApiSlice.util.updateQueryData("getAlbums", undefined, (draft) => {
            //             const album = draft.find(album => album._id === albumId);
            //             if (album) {
            //                 album.deleted = true
            //             }
            //             console.log(album, "from OnQuery")
            //             console.log("Moved workeddd 1")
            //         })

            //     )

            //     try {
            //         console.log("Moved workeddd 2")
            //         await queryFulfilled;
            //     } catch (error) {
            //         patchResult.undo();
            //     }
            // },

            // invalidatesTags: ['Album'],
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
 } = AlbumApiSlice;