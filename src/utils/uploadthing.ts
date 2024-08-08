import { generateUploadDropzone } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const Uploader  = generateUploadDropzone<OurFileRouter>();

export const formattedDate = (IsoDate: string) => {
    const date = new Date(IsoDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}