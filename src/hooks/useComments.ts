import { getComments } from "@/app/action";
import { useEffect, useState } from "react";

const useComments = () => {

    const [comments, setComments] = useState< any[] | { error: any; } >([]);
    
    
    async function getAllComment() {
      
      const Comments = await getComments();
      setComments(Comments);

    }
    
    useEffect(() => {

    getAllComment();
    }, []);

    return { comments, getAllComment }
}

export default useComments;