"use server";
import Comment from "@/app/models/comments";
import dbConnect from "@/lib/db/dbConnect";
import Album from "./models/album";
import User from "./models/users";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


export const addComment = async (formData: FormData) => {
// export const addComment = async (previousState: any ,formData: FormData) => {
    try {
        await dbConnect();
    
        const comment = formData.get("comment");
        
        const newComment = new Comment({ comment });
        await newComment.save(); 

        const savedComment = newComment.map((c: { _id: { toString: () => any; }; comment: any; }) => {
            const id =  c._id.toString();
            const comment = c.comment;
            return (
                {_id: id, comment}
             )
        })    
        

        revalidatePath("/gallery");
        revalidatePath("/");
        revalidatePath("*");
        return savedComment;
        // formData.append("comment", "");
    } catch (error: any) {
        return {error: error.message}
    }
   
}

interface IComment {
    com: {_id: string, comment: string}[]
}

export async function getComments() {
    // try {
        await dbConnect();

        const comments = await Comment.find({}, { __v: 0, createdAt: 0, updatedAt: 0 }).sort({ createdAt: -1 });
        // console.log(comments);

        const convertedComments = comments.map(c => {
                const id =  c._id.toString();
                const comment = c.comment;
                return (
                    {_id: id, comment}
                );
        })

        return convertedComments;    
        // return comments as {_id: string, comment: string}[];   
    // } catch (error: any) {
    //     return [{error: error.message}]
    // }
    
}
