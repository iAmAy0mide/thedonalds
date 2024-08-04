import { getComments } from "@/app/action";
import { useEffect, useState } from "react";

const useComments = () => {

    const [comments, setComments] = useState< any[] >([]);
    // const [comments, setComments] = useState< any[] | { error: any; } >([]);
    
    
    async function getAllComments() {
      const res = await fetch("/api/comments", { cache: "no-store" });

      
      const Comments = await res.json();
      // const Comments = await getComments();
      console.log("from Hook from hook from hook HHHHHHHHHHOOOOOKKKK");
      
      setComments(Comments);

    }

    useEffect(() => {

      getAllComments();
    }, []); 

    return { comments, getAllComments }
}

export default useComments;

interface IUseCom {
  shouldRefetch?: boolean;
}