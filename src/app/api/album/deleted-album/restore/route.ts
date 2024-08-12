import dbConnect from "@/lib/db/dbConnect";
import Album from "@/lib/models/album";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, res: NextResponse ) {
    try {
        await dbConnect();
        const albumId = req.nextUrl.searchParams.get("albumId");

        const restoredAlbum = await Album.findByIdAndUpdate({ _id: albumId }, {
            deleted: false,
        })


        revalidatePath("/gallery");
        console.log(restoredAlbum);

        return NextResponse.json(restoredAlbum);

    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}