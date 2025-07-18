import Link from 'next/link';
import Image from 'next/image';


export type Article = {
  title: string;
  image: string;
  shortdescription: string;
  description: string;
  slug: string;
  category: string;
};

interface CategoryPageProps {
  articles: Article[];
}

export default function CategoryNews({ articles }: CategoryPageProps) {
  return (
    <div className="my-10">
      

      {/* Grid of image cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 px-2">
        {articles.map((article) => (
          <div
            key={article.slug}
            className="bg-white rounded pl-4 overflow-hidden transition"
          >
            <Link href={`${article.category}/${article.slug}`} className="block relative group  ">
              <Image
                src={article.image}
                alt={article.title}
                width={768}
                height={220}
                className="w-full h-[180px] object-cover group-hover:brightness-90 transition rounded"
              />
            </Link>
            <div className="p-4">
              <p className="text-xs text-red-700 uppercase">{article.category}</p>
              <h3 className="text-lg  leading-snug mt-1 text-gray-800">
                <Link href={`${article.category}/${article.slug}`} className=" transition-colors">
                  {article.title}
                </Link>
              </h3>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
