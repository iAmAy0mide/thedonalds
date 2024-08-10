import Album from "@/lib/models/album";
import { NextRequest, NextResponse } from "next/server";


interface Params {
    commentId: string
}

export async function GET(req: NextRequest, res: NextResponse ) {
    const commentId = req.nextUrl.searchParams.get("commentId");
    console.log(commentId, "from server here")

    try {
        
        const RetrievedComments = await Album.findById({_id: commentId}, { comments: 1 });

        const comments = RetrievedComments.comments.map((c: { _id: { toString: () => any; }; comment: any; }) => {
            const _id = c._id.toString();
            const comment = c.comment;

            return {
                _id, comment
            }
        }).reverse();

        // console.log(comments, "from server databs")

        // console.log(comments, "from CommentId");
        // console.log(commentId, "form server")

        return NextResponse.json(comments)
        // return NextResponse.json({comments}, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }

}