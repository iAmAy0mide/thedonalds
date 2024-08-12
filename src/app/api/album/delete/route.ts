import dbConnect from "@/lib/db/dbConnect";
import Album from "@/lib/models/album";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req: NextRequest, res: NextResponse ) {

    const albumId = req.nextUrl.searchParams.get("albumId");

    console.log({albumId}, "from delete");
    try {
        await dbConnect();

        const permanentlyDeletedAlbum =  await Album.findByIdAndDelete({ _id: albumId });

        console.log({permanentlyDeletedAlbum}, "from server")
        return NextResponse.json(permanentlyDeletedAlbum);
    } catch (error: any) {
        return NextResponse.json({ error: error. message });
        
    }
}