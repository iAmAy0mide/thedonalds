import Image from "next/image";

const ErrorComponent = () => {
    return (
        <div className="w-full h-[100dvh] items-center flex justify-center">
            <div  className="">
                <div className=" text-center">
                    <p className="text-2xl text-[#fff] font-bold mt-8">WHoops! An error occured.</p>     
                </div>
                <div className="mx-auto max-sm:w-[15rem] max-sm:h-[20rem] w-[20rem] h-[25rem]  mt-3">
                    <Image 
                    src="/broken-page.svg"
                    alt="Broken page image"
                    width={100}
                    height={100}
                    className="w-fit object-contain"
                    />
                </div>
                <p className="-mt-[3.2rem] text-lg text-[#ccc] text-center">We will fix this in a moment.</p>
            </div>
        </div>
    )
}

export default ErrorComponent;