import Link from "next/link";
import Post from "@/components/posts/post";
import {posts} from "@/utils/type"
import { Funnel_Display } from "next/font/google";



export default async function Articles() {
    console.log('in the articles')
    const response = await  fetch("https://jsonplaceholder.typicode.com/posts",
          {cache: "no-store"})
     if (!response.ok)
        throw new Error('somthing wrong happend the fetching data failed')

    const data:posts[] = await response.json();
   
    
    return(
        <section className=" fix-height container m-auto px-5  ">
            <div className="flex flex-center items-center flex-wrap gap-2 ">
           {data.map((post)=>{
                return(
                    <Post post={post} key={post.id}/> 
                )
            })}
            </div>
        </section>
    )
}