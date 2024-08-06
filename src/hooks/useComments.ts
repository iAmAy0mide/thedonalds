"use client";
import { getComments } from "@/app/action";
import { useEffect, useState } from "react";

interface ICom {
  comments: {
    id: string;
    comment: string;
  }[]
}

const useComments = (comments: { id: string; comment: string; }[] | (() => { id: string; comment: string; }[])) => {

    const [famComments, setFamComments] = useState<{
      id: string;
      comment: string;
    }[]>(comments);
    // const [comments, setComments] = useState< any[] | { error: any; } >([]);
    
    
    async function updateComments(pcomments: {
      id: string;
      comment: string;
    }[]) {
      // const res = await fetch("/api/comments", { cache: "no-store" });

      
      // const Comments = await res.json();
      // const Comments = await getComments();
      console.log("from Hook from hook from hook HHHHHHHHHHOOOOOKKKK");

      
      // setFamComments(() =>  [{ id: "", comment: ""}] );
      setFamComments((prevComments) => {
        console.log("updating comment...");
        
        return [...prevComments, ...pcomments]
        // return [ ...pcomments ] 
      });
      // setFamComments((prevComments) =>  [...prevComments, ...pcomments] );
      console.log(pcomments, "from upFUnc");
      
    }

    // useEffect(() => {

    //   getAllComments();
    // }, []); 

    return { famComments, updateComments }
}

export default useComments;

interface IUseCom {
  shouldRefetch?: boolean;
}