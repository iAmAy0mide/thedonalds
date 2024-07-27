import Image from "next/image";
import Star from "/public/Star.svg"
import HandStar from "/public/handstar.svg";

export default function Home() {
  return (
    <main className="mobile px-8 md:px-12 mx-auto bg-mainBg h-[100dvh] relative overflow-hidden pt-[20rem]">
      <div className="absolute bottom-0 right-10">
        <Image alt=""  width={100} height={100} src={Star}/>
      </div>
      <div className="absolute -bottom-10 left-40">
        <Image alt=""  width={100} height={100} src={Star}/>
      </div>
      <div className="absolute left-0">
        <Image alt=""  width={100} height={100} src={Star}/>
      </div>
      <div className="absolute right-0">
        <Image alt=""  width={100} height={100} src={Star}/>
      </div>

      <div className="absolute bottom-0 left-10">
        <Image alt=""  width={100} height={100} src={Star}/>
      </div>
      <div className="absolute bottom-10 right-[15rem]">
        <Image alt=""  width={100} height={100} src={Star}/>
      </div>
      <div className="absolute bottom-4 right-[10rem]">
        <Image alt=""  width={100} height={100} src={Star}/>
      </div>
    </main>
  );
}
