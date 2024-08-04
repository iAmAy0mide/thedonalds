import Comment from "@/app/models/comments";
import dbConnect from "@/lib/db/dbConnect";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    await dbConnect();

    try {
        const comments = await Comment.find({});

        return NextResponse.json("");
        
    } catch (err: any) {
        return NextResponse.json({ error: err.message });
    }

}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        await dbConnect();

        const body = await req.json();
        const comment = body;

        const newComment = new Comment({

        });
    } catch (error) {
        
    }
}