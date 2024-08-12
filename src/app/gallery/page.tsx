"use client"

import CommentsModal from "@/components/comments/CommentsModal";
import GalleryPage from '../../components/Gallery/GalleryPage';
import { useGetAlbumsQuery } from "@/lib/features/api/albumApiSlice";
import { useEffect, useState } from "react";
import Spinner from "/public/spinner.gif";
import Image from "next/image";

const Gallery =  () => {
  
  // const res = await fetch("http://localhost:3000/api/album", { cache: "no-cache" }) 
  // const albums = await res.json();

  const { data: albums, refetch } = useGetAlbumsQuery(undefined, { refetchOnMountOrArgChange: true });
  const [reRender, setReRender] = useState<string>("false");
  console.log(albums, "from rtk gal");


  
  if (albums) {
    // setInterval(() => {
    //   // refetch();
    //   console.log("refetch simulated")
    //   if (reRender === "false") {
    //     setReRender("true");        
    //   } else {        
    //     setReRender("false");
    //   }
    // }, 1000);
    // clearInterval(timeoutInterval);
  }

  useEffect(() => {
    setReRender("true");
    console.log("e done render")
  }, [reRender]);

  return (
    <>{!albums ? <div className="mx-auto mt-[14rem] sm:mt-[18rem] w-[2rem]">
      <Image
        src={Spinner}
        width={100}
        height={100}
        alt="Spinner"
        className="w-full"
      />
    </div> : (
      <GalleryPage albums={albums}> 
        <CommentsModal />
      </GalleryPage>
     )}
    </> 
  )
}

export default Gallery;
export const dynamic = "force-dynamic";