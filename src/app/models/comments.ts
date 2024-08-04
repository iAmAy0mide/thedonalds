import mongoose, { Document, Schema } from "mongoose";

export interface IComments extends Document {
    // name?: string;
    // profilePic: string;
    comment: string;
}

const CommentsSchema: Schema = new mongoose.Schema({
    // name: {
    //     type: String
    // },

    // profilePic: {
    //     type: String,
    //     required: true
    // },

    comment: {
        type: String,
        required: true
    }
}, { timestamps: true});
const Comment = mongoose.models.Comment || mongoose.model<IComments>("Comment", CommentsSchema);

export default Comment;