'use client';

import Link from "next/link";

interface errorProps {
    error: Error,
    reset: ()=> void
}
export default function Errorpage( err:errorProps) {

    return(
        <div className=" fix-height pt-7 ">
        <div className="text-red-600 text-4xl text-center font-semibold ">
            some thing went wrong
            </div>
            <h3 className="text-xl text-center text-gray-500 my-3"> Error Message:  {err.error.message}</h3>
            <div className="flex justify-center text-xl" >
            <button className=" cursor-pointer bg-blue-500 hover:bg-blue-700 rounded-full text-center"
             onClick={()=>err.reset()}>Try Again
            </button>
            </div>
            <Link className="text-center text-blue-500 underline text-2xl block mt-6" href={'/'}>
            Go to the Home page </Link>
        
        </div>
    )
}