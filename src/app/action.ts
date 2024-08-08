"use server";
import Comment from "@/lib/models/comments";
import dbConnect from "@/lib/db/dbConnect";
import FakeUserAuthStatus from "../lib/models/fakeUserAuth";
import Album from "../lib/models/album";
import User from "../lib/models/users";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


export const addComment = async (formData: FormData) => {

    try {
        await dbConnect();
    
        const comment = formData.get("comment");
     
        
        
        const newComment = new Comment({ comment });

        const albumId = "66b439e0d334115a065fe92b"
        const newCommen = await Album.findByIdAndUpdate(
            albumId, 
            { $push: { comments: { comment }}},
            { new: true }
        )
        // console.log({newCommen});
        // console.log({newComment});
        
        await newComment.save(); 

        // const savedComment = newComment.map((c: { _id: { toString: () => any; }; comment: any; }) => {
        //     const id =  c._id.toString();
        //     const comment = c.comment;
        //     return (
        //         {_id: id, comment}
        //      )
        // })    
        

        return {success: "ok"};
    } catch (error: any) {
        return {error: error.message}
    }
   
}

interface IComment {
    com: {_id: string, comment: string}[]
}

export async function getComments() {
    try {
        await dbConnect();

        const comments = await Comment.find({}, { __v: 0, createdAt: 0, updatedAt: 0 }).sort({ createdAt: -1 });
        // console.log(comments);

        const convertedComments = comments.map(c => {
                const id =  c._id.toString();
                const comment = c.comment;
                return (
                    {id, comment}
                );
        })

        return convertedComments;    
        // return comments as {_id: string, comment: string}[];   
    } catch (error: any) {
        return {error: error.message}
    }
    
}



export async function getFakeAuth() {
    
}

export async function postFakeAuth() {

}
