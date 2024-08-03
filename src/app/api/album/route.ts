import Comment from "@/app/models/comments";
import dbConnect from "@/lib/db/dbConnect";
import { NextResponse } from "next/server";


export async function POST(album: IUploadedImage) {
    await dbConnect();

    try {
        const comments = await Comment.find({});

        return NextResponse.json("");
        
    } catch (err: any) {
        return NextResponse.json({ error: err.message });
    }

}