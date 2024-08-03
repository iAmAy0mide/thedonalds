"use server";
import Comment from "@/app/models/comments";
import dbConnect from "@/lib/db/dbConnect";
import Album from "./models/album";
import User from "./models/users";

// export const addAlbum = async (formData: FormData) => {
    
// }

export const addComment = async (formData: FormData) => {
    await dbConnect();
    
    const comment = formData.get("comment");
    console.log(comment);
    
    const newComment = new Comment({ comment });

    await newComment.save(); 
}


export async function getComments() {
    try {
        await dbConnect();

        const comments = await Comment.find({});
        console.log(comments);
        
        return comments;  
    } catch (error: any) {
        return {error: error.message}
    }
    
}
