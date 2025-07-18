import Link from 'next/link';

type Article = {
  title: string;
  slug: string;
  category: string; 
};

interface MostReadProps {
  articles: Article[];
}

export default function MostRead({ articles }: MostReadProps) {
  return (
    <div className='p-5'>
    <div className="p-8 border-gray-300 border rounded bg-white max-w-md">
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
            <Link href={article.slug} className="text-sm text-black hover:underline ml-8" >
              {article.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
    </div>
  );
}
