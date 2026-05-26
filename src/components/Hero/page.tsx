import Image from "next/image"
import { TiTick } from "react-icons/ti"
import cloudImage from '../../../public/cloud-hosting.png'
export default function Hero() {
    return (
        <div className="fix-height flex flex-col items-center justify-between gap-10 p-5 text-black md:flex-row md:gap-8 md:px-10">
        <div className="w-full max-w-xl text-center md:text-left">
            <h1 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Cloud Hosting</h1>
            <p className="mt-2 text-base text-neutral-700 sm:text-lg">
              the best web hosting solution for your online success
            </p>
            
            <div className="mt-6 space-y-2">

            <div className="flex items-center justify-center gap-2 text-base font-semibold text-neutral-600 sm:text-lg md:justify-start">
              <TiTick className="shrink-0 text-xl sm:text-2xl" aria-hidden="true" />
              <p>Easy To Use Control Panel</p>
            </div>
           
            <div className="flex items-center justify-center gap-2 text-base font-semibold text-neutral-600 sm:text-lg md:justify-start">
              <TiTick className="shrink-0 text-xl sm:text-2xl" aria-hidden="true" />
              <p>Secure Hosting</p>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-base font-semibold text-neutral-600 sm:text-lg md:justify-start">
              <TiTick className="shrink-0 text-xl sm:text-2xl" aria-hidden="true" />
              <p>Website Maintenance</p>
            </div>
           
            </div>

        </div>

        <Image
          src={cloudImage}
          width={500}
          height={500}
          sizes="(max-width: 768px) 90vw, 500px"
          className="h-auto w-full max-w-sm md:max-w-md"
          alt="cloud"
          
        />
        </div>
    )
}
