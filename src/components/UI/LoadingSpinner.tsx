import Spinner from "/public/spinner.gif";
import Image from "next/image";

const LoadingSpinner = () => {
  return (
    <div className="mx-auto mt-[14rem] sm:mt-[18rem] w-[2rem]">
        <Image
        unoptimized
        src={Spinner}
        width={100}
        height={100}
        alt="Loading Spinner"
        className="w-full"
        />
    </div>
  )
}

export default LoadingSpinner
