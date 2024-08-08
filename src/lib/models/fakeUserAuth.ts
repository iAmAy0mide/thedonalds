import mongoose, { Document, Schema } from "mongoose";

export interface IFUS extends Document {
    isLoggedIn: boolean;
}


const FakeUserAuthStatusSchema: mongoose.Schema = new Schema({
    isLoggedIn: {
        type: Boolean,
        default: false
    }
});

const FakeUserAuthStatus = mongoose.models.FakeUserStatus || mongoose.model<IFUS>("FakeUserStatus", FakeUserAuthStatusSchema);

export default FakeUserAuthStatus;