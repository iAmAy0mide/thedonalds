import dbConnect from "@/lib/db/dbConnect";
import Album from "@/lib/models/album";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest ) {
    const albumId = req.nextUrl.searchParams.get("albumId");
    console.log(albumId, "from server here and right now");

    try {
        await dbConnect();

        const movedAlbum = await Album.findByIdAndUpdate({ _id: albumId }, {
            deleted: true
        });

        // console.log({movedAlbum}, "from server")
        return NextResponse.json(movedAlbum);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}