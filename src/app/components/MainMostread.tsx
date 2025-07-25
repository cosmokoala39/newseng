import Link from "next/link";


type Article = {
  title: string;
  slug: string;
  category: string; 
};

interface MainMostreadProps {
  articles: Article[];
}
export default function MainMostread  ({ articles } : MainMostreadProps)  {
    return(
        <div className='p-5'>
    <div className="p-4 border-gray-300 border rounded bg-white max-w-md">
      <h2 className="text-xl font-bold mb-4">Most Read</h2>
      <ol className="space-y-4">
        {articles.slice(0,5).map((article, index) => (
          <li key={index} className="flex flex-col space-y-2 border-b border-b-gray-300  pb-4 last:border-none last:pb-0">
            <div className="flex items-center space-x-2">
              <span className="border border-red-600 text-red-600 font-bold rounded px-1.5">{index + 1}</span>
              {article.category && (
                <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded">
                  {article.category}
                </span>
              )}
            </div>
            <Link href={`${article.category}/${article.slug}`} className="text-sm text-black ml-10 hover:underline" >
              {article.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
    </div>
    )
}