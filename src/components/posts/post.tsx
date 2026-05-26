import Link from "next/link";
import { posts } from "@/utils/type";
interface postsProps {
    post: posts;
}
export default function Post(props: postsProps) {
  return (
    <div
      key={props.post.id}
      className="  p-5 rounded-lg my-1 shadow-lg border-2 border-gray-500 hover:bg-slate-200 w-full md:w-2/5 lg:w-1/4 "
    >
      <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{props.post.title}</h3>
      <p className="text-xl my-2 text-gray-700 p-1 line-clamp-1">
        {props.post.body}
      </p>
      <Link
        className="text-xl bg-purple-600 hover:bg-purple-800 w-full text-center block p-1 text-white rounded-lg   "
        href={`/articles/${props.post.id}`}
      >
        Read More
      </Link>
    </div>
  );
}
