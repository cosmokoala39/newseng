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

interface ArticleCardProps {
  article: Article;
  isFeatured?: boolean;
}

export default function ArticleCard({ article, isFeatured = false }: ArticleCardProps) {
  return (
    <article
      className={`bg-white mt-2 p-2 ${isFeatured ? 'lg:col-span-2' : ''} mx-2 md:mx0`}
    >
      <Link href={`/${article.category}/${article.slug}`} className="block mb-4">
        <div className="rounded overflow-hidden relative aspect-video">
          <Image
            src={article.image}
            alt={article.title}
            width={isFeatured ? 640 : 282}
            height={isFeatured ? 360 : 159}
            className="rounded-lg object-cover w-full h-full"
            loading={isFeatured ? 'eager' : 'lazy'}
            priority={isFeatured}
          />
        </div>
      </Link>

      <div className="text-red-700 text-sm uppercase mb-1">{article.category}</div>

      <h2
        className={`font- leading-snug ${
          isFeatured ? 'text-[26px] font-[600]' : 'text-[18px] font-[500]'
        }`}
      >
        <Link href={`/${article.category}/${article.slug}`}>
          <p className=" transition-colors cursor-pointer text-gray-800 ">
            {article.title}
          </p>
        </Link>
      </h2>

      {isFeatured && article.shortdescription && (
        <p className="text-gray-700 mt-2 text-base">{article.shortdescription}</p>
      )}
    </article>
  );
}
