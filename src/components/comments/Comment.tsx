import Image from "next/image";


const Comment: React.FC<IComment> = ({ profilePic, comment, key}) => {
  return (
    <div key={key} className="rounded-lg relative self-start  mx-auto w-full sm:w-[70%] p-1 bg-deepBlue">
        <div className=" h-[4rem] w-[4rem] rounded-lg float-left mr-2">
        <Image width={100} height={100} src={profilePic} alt='' aria-label='' title='Photo Album Display' className='w-full rounded-lg float-left' />
        </div>
        <p className="comment-text">{comment}</p>
    </div>
  )
}
 
export default Comment;
