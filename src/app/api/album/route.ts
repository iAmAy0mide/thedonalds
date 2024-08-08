import Album from "@/lib/models/album";
import dbConnect from "@/lib/db/dbConnect";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
    await dbConnect();

    try {
        const body = await req.json();        
        const { albumName, album, deleted } = body;

        if (typeof albumName !== 'string' || !Array.isArray(album)) {
            return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
        }

        const newAlbum = new Album({
            albumName,
            album,
            deleted
        });       

        await newAlbum.save();

        return NextResponse.json({ message: 'Album created successfully' });
        
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }

}

export async function GET() {

    try {
        await dbConnect();

        const albumPhotos = await Album.find({}, { __v: 0,  updatedAt: 0, comments: 0 });  
        console.log(Array.isArray(albumPhotos), "from server");
        return NextResponse.json(albumPhotos)
    } catch (error: any) {
        NextResponse.json({ error: error.message });
    }

}