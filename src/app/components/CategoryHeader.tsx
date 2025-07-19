'use client';

import Link from 'next/link';

type Article = {
  title: string;
  image: string;
  shortdescription: string;
  description: string;
  slug: string;
  category: string;
};

interface Props {
  articles: Article[];
}

export default function CategoryHeader({ articles }: Props) {
  const category = articles[0]?.category || 'unknown';

  return (
    <div className="w-full px-4 md:px-8 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-[16px]  mb-2 whitespace-nowrap overflow-x-auto">
         <Link href="/" className="text-blue-400  hover:text-gray-700">
            Home
          </Link>
        <span className='text-gray-400'>/</span>
        <span className="capitalize text-gray-400">{category}</span>
      </nav>

      {/* Category Title */}
      <h1 className="text-3xl font-bold mb-2 mt-5 uppercase">{category}</h1>

      {/* "At The Moment" Section */}
<section className="hidden md:flex bg-gray-100 px-4 py-3 border-l-4 border-cyan-800 items-center gap-6">
  <h2 className="text-lg font-semibold whitespace-nowrap">At the moment</h2>

  <ul className="flex flex-wrap items-center gap-3">
    {[
      'Tour de France',
      'Exam Results',
      'Israel',
      'Summer Destinations',
      'Our Animals in Danger',
    ].map((title) => (
      <li key={title}>
        <Link
          href="#"
          className="bg-cyan-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap hover:bg-cyan-800 transition"
        >
          {title.toUpperCase()}
        </Link>
      </li>
    ))}
  </ul>
</section>

    </div>
  );
}
