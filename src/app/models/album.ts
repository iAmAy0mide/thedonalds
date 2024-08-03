import mongoose, { Document, Schema } from "mongoose";

export interface IAlbum extends Document {

}

const AlbumSchema: mongoose.Schema = new Schema({
    albumName: {
        type: String,
        required: true,
    },
    
    albumImages: {
        type: Array,
        required: true,
    }
});

const Album = mongoose.models.Album || mongoose.model<IAlbum>("Album", AlbumSchema);

export default Album;