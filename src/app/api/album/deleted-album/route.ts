import dbConnect from "@/lib/db/dbConnect";
import Album from "@/lib/models/album";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect();

        const deletedAlbums = await Album.find({ deleted: true }, { __v: 0, updatedAt: 0, comments: 0 }).sort({ createdAt: -1 });

        // console.log({deletedAlbums});

        revalidatePath("/gallery");

        return NextResponse.json(deletedAlbums);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}