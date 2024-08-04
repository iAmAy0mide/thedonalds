"use server";
import Comment from "@/app/models/comments";
import dbConnect from "@/lib/db/dbConnect";
import Album from "./models/album";
import User from "./models/users";

// export const addAlbum = async (formData: FormData) => {
    
// }

export const addComment = async (formData: FormData) => {
    try {
        await dbConnect();
    
        const comment = formData.get("comment");
        
        const newComment = new Comment({ comment });
    
        await newComment.save(); 
        formData.append("comment", "");
    } catch (error: any) {
        return {error: error.message}
    }
   
}


export async function getComments() {
    try {
        await dbConnect();

        const comments = await Comment.find({}, { __v: 0 }).sort({ createdAt: -1 });
        console.log(comments);

        // return comments.map(comment => comment.toObject()); 
        return comments.map(comment => {
            const commentObj = comment.toObject();
            commentObj._id = commentObj._id.toString(); // Convert _id to string
            return commentObj;
        });
    } catch (error: any) {
        return {error: error.message}
    }
    
}
