import { getComments } from "@/app/action";
import Comments from "./Comments";

const CommentsFetch = async () => {
    // const comments = await getComments();
    const URL = process.env.environment === "prod" ? 'https://thedonalds.vercel.app' : "http://localhost:3000";    

    const res = await fetch(`${URL}/api/comments`, { cache: "no-cache"});
    const comments = await res.json();
    console.log(comments, "from commentPage");  
    

  return (
    <>   
        <Comments comments={comments} />      
    </>    
  )
}

export default CommentsFetch;
