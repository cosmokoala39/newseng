'use client'; 

import { useState } from 'react';
import ArticleCard from './ArticleCard';
type Article = {
  title: string;
  image: string;
  shortdescription: string;
  description: string;
  slug: string;
  category: string;
};

interface ToggleContentWithLoadingProps{
        mergedArticles:Article[];
}
export default function ToggleContentWithLoading({mergedArticles}:ToggleContentWithLoadingProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleContent = async () => {
    setLoading(true);

    
    await new Promise((res) => setTimeout(res, 1000));

    setIsVisible((prev) => !prev);
    setLoading(false);
  };

  return (
    <>
     {isVisible && (
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {mergedArticles.map((article, index) => (
              <ArticleCard key={article.slug ?? index} article={article} />
            ))}
         </div>
        )}
    <div className="w-full bg-[#f0f0f0] py-8">
     
      <div className="text-center">
        <button
          type="button"
          onClick={toggleContent}
          disabled={loading}
          className="text-black font-semibold uppercase tracking-wider text-sm focus:outline-none flex items-center justify-center gap-2 mx-auto disabled:opacity-50"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Loading...
            </>
          ) : (
            <>
              {isVisible ? 'Show less' : 'Show more'}{' '}
              <span>{isVisible ? '▲' : '▼'}</span>
            </>
          )}
        </button>
      </div>

      
      
    </div>
    </>
  );
}
