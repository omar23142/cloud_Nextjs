import { log } from "console";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="fix-height">
         <div className="  pt-7 ">
                <div className="text-red-600 text-4xl text-center font-semibold ">
                    404
                    </div>
                    <h3 className="text-xl text-center text-gray-500 my-3">   PAGE NOT FOUND </h3>
                    <div className="flex justify-center text-xl" >
                    {/* <button className=" cursor-pointer bg-blue-500 hover:bg-blue-700 rounded-full text-center"
                     onClick={()=>err.reset()}>Try Again
                    </button> */}
                    </div>
                    <Link className="text-center text-blue-500 underline text-2xl block mt-6" href={'/'}>
                    Go to the Home page </Link>
                
                </div>
                </section>
    )
}






