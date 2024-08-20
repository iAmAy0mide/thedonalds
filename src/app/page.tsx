import Image from "next/image";
import Star from "/public/Star.svg"; 
import Building from "/public/Building.svg";
import FBird from "/public/ZHug.gif";
import Link from "next/link";


export default function Home() {

  
  return (
    <main  className="mobile pt-[11rem] md:pt-[12rem] lg:pt-[14rem] z-10 mx-auto  relative overflow-hidden h-[100dvh] ">
      <section style={{ backgroundImage: `url(${Building.src})`, backgroundPosition: "bottom" }} className="w-full relative h-full max-w-[1440px] bg-repeat-x posi">
        <div className="absolute fly-right -translate-x-[1rem]  top-24 w-[5rem]"> 
          <Image 
            alt=""
            width={100}
            height={100}
            src={FBird}
            unoptimized
            className="w-full"
          />
        </div>
        <div className="absolute top-20 fly-right -translate-x-[60rem] w-[4.5rem]"> 
          <Image 
            alt=""
            width={100}
            height={100}
            src={FBird}
            unoptimized
            className="w-full"
          />
        </div>
        <div className="absolute top-20 fly-right3 -translate-x-[16rem] w-[4.5rem]"> 
          <Image 
            alt=""
            width={100}
            height={100}
            src={FBird}
            unoptimized
            className="w-full"
          />
        </div>
        <div className="absolute top-20 fly-right5 -translate-x-[50rem] w-[4.5rem]"> 
          <Image 
            alt=""
            width={100}
            height={100}
            src={FBird}
            unoptimized
            className="w-full"
          />
        </div>
        <div className="absolute top-16 fly-right4 -translate-x-[25rem] w-[4.5rem]"> 
          <Image 
            alt=""
            width={100}
            height={100}
            src={FBird}
            unoptimized
            className="w-full"
          />
        </div>
      </section>
    </main>
  );
}
