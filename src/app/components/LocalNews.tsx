import Image from 'next/image';
import Link from 'next/link';

type Article = {
  category: string;
  title: string;
  slug: string;
  image: string;
  shortdescription: string;
  tag?: string;
};

interface LocalNewsProps {
  category: string;
  articles: Article[];
}

export default function LocalNews({ category, articles }: LocalNewsProps) {
  // Filter articles for the current category
  const filtered = articles.filter(article => article.category === category);

  // Use first as featured, others on the side
  const [featured, ...others] = filtered;

  return (
    <div className="my-10 px-5 md:px-0">
      {/* Heading */}
      <div className="flex items-center justify-between mb-6 mt-3 border-t border-t-gray-300">
        <h2 className="text-3xl font-bold mt-8 mb-3">
          <span className=""> News</span> In <span className='uppercase font-medium'>{category}</span>
        </h2>
        <Link href={`/${category}`} className="text-gray-900 font-semibold underline text-sm hover:no-underline">
          Show More <span aria-hidden>›</span>
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Featured article - large on the left */}
        {featured && (
          <div className="w-full lg:w-1/2">
            <Link href={`/${featured.category}/${featured.slug}`}>
              <Image
                src={featured.image}
                alt={featured.title}
                width={436}
                height={249}
                className="w-full h-60 rounded-lg object-cover"
              />
            </Link>
            <div className="mt-4">
              <p className="text-sm text-red-600 font-semibold uppercase">
                {featured.tag || 'NEWS'} - 
              </p>
              <h3 className="text-2xl font-semibold mt-1 leading-tight">
                <Link href={`/${featured.category}/${featured.slug}`}>
                  {featured.title}
                </Link>
              </h3>
              
            </div>
          </div>
        )}

        {/* Side articles - smaller */}
        <div className="w-full lg:w-1/2">
          {others.slice(0, 3).map((item, index) => (
            <div key={index} className="flex gap-4 mb-5">
              <Link href={`/${item.category}/${item.slug}`} className="shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={182}
                  height={103}
                  className="w-44 h-28 object-cover rounded-md"
                />
              </Link>
              <div className="flex flex-col">
                <p className="text-sm text-red-600 font-semibold uppercase">
                {item.tag || 'NEWS'} - 
              </p>
                <Link
                  href={`/${item.category}/${item.slug}`}
                  className="font-medium  text-[15px]  leading-snug"
                >
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
