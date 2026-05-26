import { posts } from "@/utils/type";
import Link from "next/link";

interface singleArticleparamsId  {
    params: {articleId:number},
}
export default async  function SinglArticle( props:singleArticleparamsId) {
    // console.log('======', props)
    //const {articleId} = await props.params;
    const x = await props.params;
    console.log('jjjjjjjjjj', x.articleId);
    const response = await  fetch(`https://jsonplaceholder.typicode.com/posts/${x.articleId}`);
    if(!response.ok)
        throw new Error('there is some thing wrong happen when get the data from API');
    const data:posts = await response.json();
    console.log(data);
    return (
      <section className="fix-height container m-auto rounded-2xl  my-12 w-full px-5 pt-8 md:w-3/4 min-xsm:mx-5   flex justify-center
      shadow-lg border-2 border-gray-500  ">
        <div
      className=" p-5  "
    >
      <h3 className="text-xl font-bold text-gray-900 ">{data.title}</h3>
      <p className="text-xl my-2 text-gray-700 p-1 ">
        {data.body}
      </p>
      {/* <Link
        className="text-xl bg-purple-600 hover:bg-purple-800 w-full text-center block p-1 text-white rounded-lg   "
        href={`/articles/${data.id}`}
      >
        Read More
      </Link> */}
    </div>
    </section>
    )
}