'use client';

import { useState } from 'react';
import politics from "../data/politics.json"
import business from "../data/business.json" 
import health from "../data/health.json"
import science from "../data/science.json"
import sports from "../data/sports.json"
import technology from "../data/technology.json"

import Mainheader from "./components/Mainheader";
import ArticleCard from "./components/ArticleCard"
import CategoryImageBlock from "./components/CategoryImageBlock"
import CategorySideAd from './components/CategorySideAd';



type Article ={
  title:string;
  image:string;
  shortdescription:string;
  description:string;
  slug:string;
  category:string;
}

const mergedArticles: Article[] = [
  ...health,
  ...business,
  ...politics,
  ...sports,
  ...science,
  ...technology
]
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleContent = () => {
    setIsVisible((prev) => !prev);
  };
   const [featured, ...others] = mergedArticles;
  const sideArticles = others.slice(0, 2);
  return (
    <div className='container mx-auto'>
        <Mainheader/>
        <div className="md:w-8/12 lg:w-9/12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 container mx-auto px-4">
           <ArticleCard article={featured} isFeatured />
           <div className="flex flex-col gap-4">
              {sideArticles.map((article, index) => (
                <ArticleCard key={`${article.slug}-${index}`} article={article} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.slice(3,12).map((article, index) => (
              <ArticleCard key={article.slug ?? index} article={article} />
            ))}
          </div>
          <CategoryImageBlock/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.slice(12).map((article, index) => (
              <ArticleCard key={article.slug ?? index} article={article} />
            ))}
          </div>
          <div className="w-full mb-14">
           {isVisible && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.slice(12).map((article, index) => (
                <ArticleCard key={article.slug ?? index} article={article} />
              ))}
            </div>
           )}
     
           <div className="w-full bg-[#f0f0f0] py-4 text-center">
            <button
              type="button"
              onClick={toggleContent}
              className="text-black font-semibold uppercase tracking-wider text-sm focus:outline-none"
            >
              {isVisible ? 'Show less' : 'Show more'}{' '}
              <span>{isVisible ? '▲' : '▼'}</span>
            </button>
          </div>
         </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 rounded ">
            <CategorySideAd/>
        </div>
    </div>
  );
}
