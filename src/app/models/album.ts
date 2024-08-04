import mongoose, { Document, Schema } from "mongoose";

type TAlbum = {
    image: { url: string, deleted: boolean }    
}[];


export interface IAlbum extends Document {
    albumName: string;
    album: TAlbum;
    deleted?: boolean;
}

const AlbumSchema: mongoose.Schema = new Schema({
    albumName: {
        type: String,
        required: true,
    },
    
    album: {
        type: [{            
            image: { 
                name: String, url: String, deleted: {
                    type: Boolean,
                    default: false,
                } 
            }
            
        }],
        required: true,
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true});

const Album = mongoose.models.Album || mongoose.model<IAlbum>("Album", AlbumSchema);

export default Album;