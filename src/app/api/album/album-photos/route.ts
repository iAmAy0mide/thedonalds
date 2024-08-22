import dbConnect from "@/lib/db/dbConnect";
import Album from "@/lib/models/album";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const albumId = req.nextUrl.searchParams.get("albumId");

    if (!albumId) {
        return NextResponse.json({ error: "albumId is required!" }, { status: 400 });
    }

    try {
        await dbConnect();
        const AlbumData = await Album.findById(albumId, { album: 1, albumName: 1 });
        const albumName = AlbumData.albumName;
        const AlbumPhotos = AlbumData.album;
        // console.log([{albumName}, AlbumPhotos], "from server");

        return NextResponse.json([{albumName}, AlbumPhotos]);
    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}