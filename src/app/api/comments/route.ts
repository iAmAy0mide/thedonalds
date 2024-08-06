import Comment from "@/app/models/comments";
import dbConnect from "@/lib/db/dbConnect";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, res: NextResponse) {
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

        // return convertedComments;    

        revalidatePath("/gallery");

        return NextResponse.json(convertedComments)
    } catch (error: any) {
        return  NextResponse.json({error: error.message})
    }
    
}
// export async function GET(req: NextRequest, res: NextResponse) {
//     try {
//         await dbConnect();

//         const comments = await Comment.find({}, { __v: 0 }).sort({ createdAt: -1 });
//         // console.log(comments);

//         // return comments.map(comment => comment.toObject()); 
//         const sortedComment = comments.map(comment => {
//             const commentObj = comment.toObject();
//             commentObj._id = commentObj._id.toString(); // Convert _id to string
//             return commentObj;
//         });

//         revalidatePath("/gallery");

//         return NextResponse.json(sortedComment)
//     } catch (error: any) {
//         return  NextResponse.json({error: error.message})
//     }
    
// }


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