import Album from "@/app/models/album";
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