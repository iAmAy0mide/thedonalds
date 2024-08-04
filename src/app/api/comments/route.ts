import Comment from "@/app/models/comments";
import dbConnect from "@/lib/db/dbConnect";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, res: NextResponse) {
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
        return  NextResponse.json({error: error.message})
    }
    
}


export async function POST(req: NextRequest, res: NextResponse) {
    try {
        await dbConnect();

        const comment = await req.json();        

        const newComment = new Comment({
            comment
        });

        await newComment.save();
        return NextResponse.json({comment});
    } catch (error: any) {
        return NextResponse.json({ error: error.message});
    }
}