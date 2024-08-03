import mongoose, { Document, Schema } from "mongoose";

export interface IUsers extends Document {
    name: string;
    profilePics: string;
}

const UserSchema: mongoose.Schema = new Schema({
    name: {
        type: String,
        required: true,
    },

    profilePics: {
        type: String,
        required: true,
    }
});

const User = mongoose.models.User || mongoose.model<IUsers>("User", UserSchema);

export default User;