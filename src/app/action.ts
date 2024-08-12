"use server";
// import Comment from "@/lib/models/comments";
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
        const currentAlbumId = formData.get("currentAlbumId");
        if (!comment || !currentAlbumId) {
            return {error: "Both comment and currentId are required!"}
        }
        const newComment = await Album.findByIdAndUpdate(
            currentAlbumId, 
            { $push: { comments: { comment }}},
            { new: true }
        )

        if (!newComment) {
            return { error: "The provided albumId does not exist"}
        }

        console.log(newComment["comments"]);
        
        const comments = newComment["comments"];
        const convertedComments = comments.map((c: { _id: { toString: () => any; }; comment: any; }) => {
            const _id = c._id.toString();
            const comment = c.comment;
            return {
                 comment, _id,
            }
        })

        console.log(convertedComments)

        return convertedComments.reverse();

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

        // const comments = await Comment.find({}, { __v: 0, createdAt: 0, updatedAt: 0 }).sort({ createdAt: -1 });
        // console.log(comments);

        // const convertedComments = comments.map(c => {
        //         const id =  c._id.toString();
        //         const comment = c.comment;
        //         return (
        //             {id, comment}
        //         );
        // })

        // return convertedComments;    
        // return comments as {_id: string, comment: string}[];   
    } catch (error: any) {
        return {error: error.message}
    }
    
}



export async function getFakeAuth() {
    
}

export async function postFakeAuth() {

}
