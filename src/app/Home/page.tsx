import Hero from "@/components/Hero/page";
import WebHostingPlan from './WebHostingPlan'
export default function Home() {
    return(
        <section className="fix-height bg-amber-50">
            <Hero/>
            <h1 className="text-3xl text-center text-black mt-10 font-bold "> Chose your Web Hosting Plan </h1>
            <div className="mx-auto w-full max-w-6xl px-4 py-8">
              <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-3">
                <WebHostingPlan />
                <WebHostingPlan />
                <WebHostingPlan />
              </div>
            </div>
        </section>
    )
}
