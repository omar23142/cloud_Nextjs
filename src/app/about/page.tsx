import Image from "next/image";
import coudImage from "../../../public/cloud-hosting.png";

export default function About() {
  return (
    <section className="font-bold text-gray-400 p-5 fix-height container m-auto ">
      
        <h1 className="text-3xl font-bold text-gray-800 p-5 ">About This App </h1>
        <p className="px-5 text-gray-600 text-xl">
          The best web hosting solution for your online sucess
        </p>
        {/* <Image 
        src={coudImage} 
        alt="CLOUD" 
        width={500} 
        height={500}
       // priority   // when use this the lazy lloading is off ( this mean the server will send the image before any containt )
        ></Image> */}
      
    </section>
  );
}
