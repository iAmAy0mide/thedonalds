// "use server"
import Human from "/public/human.svg";
import Image from "next/image";
// import Comment from "@/app/models/comments";
import Comment from "./Comment"
import { getComments } from "@/app/action";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

const Comments = async () => {
    // const comments = await getComments(); 
    // let comments: any[] = []
    // setInterval(async () => {
        
    //     const res = await fetch("http://localhost:3000/api/comments", { cache: "no-cache"}); 
    //     comments = await res.json();
    //     console.log(comments); 
    // }, 3000);

    const res = await fetch("http://localhost:3000/api/comments", { cache: "no-cache"}); 
    const comments = await res.json();
    console.log(comments, "from commentPage"); 
    
    // const com: any[] = []

    async function h() {
        "use server"
    }
    // const comments = await Comment.find({}, { __v: 0 }).sort({ createdAt: -1 });

  return (
    <div className="bg-actionBg rounded-xl h-[50%] p-1 sm:max-w-[35rem] space-y-2 flex flex-col items-center  md:max-w-[38rem] overflow-auto  w-full mt-2">                
        {
            comments.map((c: { _id: Key | null | undefined; comment: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
                <div key={c._id} className="rounded-lg relative self-start  mx-auto w-full sm:w-[70%] p-1 bg-deepBlue">
                    <div className=" h-[4rem] w-[4rem] rounded-lg float-left mr-2">
                    <Image width={100} height={100} src={Human} alt='' aria-label='' title='Photo Album Display' className='w-full rounded-lg float-left' />
                    </div>
                    <p className="comment-text">{c.comment}</p>
                </div>
            ))
        }    
    </div>  
        // {
        //     comments.map((c) => (
        //         <>
        //             <Comment profilePic={Human} comment={c.comment} key={c._id} />
        //         </>
        //     ))
        // }    
  )
}

export default Comments;
