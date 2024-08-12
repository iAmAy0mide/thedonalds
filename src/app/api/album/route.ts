import Album from "@/lib/models/album";
import dbConnect from "@/lib/db/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";


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
        revalidatePath("/gallery")
        // console.log([newAlbum])
        const na = [newAlbum]

        return NextResponse.json(na);
        
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }

}

export async function GET() {

    try {
        await dbConnect();

        const albumPhotos = (await Album.find({deleted: false}, { __v: 0,  updatedAt: 0, comments: 0,  }).sort({ createdAt: -1 }));  

        return NextResponse.json(albumPhotos)
    } catch (error: any) {
        NextResponse.json({ error: error.message });
    }

}

export async function DELETE(req: NextRequest, res: NextResponse ) {

    const albumId = req.nextUrl.searchParams.get("albumId");

    console.log({albumId}, "from delete");
    try {
        await dbConnect();

        const permanentlyDeletedAlbum =  await Album.findByIdAndDelete({ _id: albumId }, {
            new: true
        });

        return NextResponse.json(permanentlyDeletedAlbum);
    } catch (error: any) {
        return NextResponse.json({ error: error. message });
        
    }
}