import dbConnect from "@/lib/db/dbConnect";
import Album from "@/lib/models/album";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();

        const deletedAlbums = Album.find({ deleted: true }, { __v: 0, updatedAt: 0, comments: 0 });

        return NextResponse.json(deletedAlbums);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}