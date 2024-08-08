import mongoose, { Document, Schema } from "mongoose";

type TAlbum = {
    image: { url: string, deleted: boolean }    
}[];


export interface IAlbum extends Document {
    albumName: string;
    album: TAlbum;
    deleted?: boolean;
    comments: string[]
}

const AlbumSchema: mongoose.Schema = new Schema({
    albumName: {
        type: String,
        required: true,
    },
    
    album: {
        type: [{            
            image: { 
                url: String, 
                deleted: {
                    type: Boolean,
                    default: false,
                } 
            }
            
        }],
        required: true,
    },

    
    comments: {
        type: [{
            comment: String
        }]
    },

    deleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true});

const Album = mongoose.models.Album || mongoose.model<IAlbum>("Album", AlbumSchema);

export default Album;