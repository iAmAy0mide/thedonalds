import dbConnect from "@/lib/db/dbConnect";
import Album from "@/lib/models/album";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const albumId = req.nextUrl.searchParams.get("albumId");

    if (!albumId) {
        return NextResponse.json({ error: "albumId is required!" }, { status: 400 });
    }

    try {
        await dbConnect();
        const AlbumPhotos = await Album.findById(albumId, { album: 1 });

        console.log(AlbumPhotos.album, "from server");

        return NextResponse.json(AlbumPhotos.album);
    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}