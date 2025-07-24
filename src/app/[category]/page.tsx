import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import CategoryHeader from '../components/CategoryHeader';
import ArticleCard from '../components/ArticleCard';
import CategoryImageBlock from '../components/CategoryImageBlock';

import MostRead from '../components/MostRead';
import CategorySideAd from '../components/CategorySideAd';


import FollowUs from '../components/FollowUs';

import FloatingAd from '../components/FloatingAd';


interface Article {
    title:string;
    image:string;
    shortdescription:string;
    description:string;
    slug:string;
    category:string;
}

type Category = 'politics' | 'business' | 'technology' | 'sports' | 'science' | 'health';

interface PageProps {
  params: Promise<{ category: Category }>;
}


export async function generateStaticParams() {
  const categories: Category[] = [
    'politics',
    'business',
    'technology',
    'sports',
    'science',
    'health',
  ];

  return categories.map((category) => ({
    category,
  }));
}

async function getArticlesByCategory(category: string): Promise<Article[] | null> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', `${category}.json`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const posts: Article[] = JSON.parse(fileContent);
    return posts;
  } catch (error) {
    console.error(`Failed to read data for category "${category}":`, error);
    return null;
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  const articles = await getArticlesByCategory(category);
  if (!articles) return notFound();

  


  const [featured, ...others] = articles;
  const sideArticles = others.slice(0, 2);
  return (
    <div className='mx-0 md:mx-8'>
      <CategoryHeader articles={articles}/>
      <div className="flex flex-wrap mx-0">
        <div className="md:w-8/12 lg:w-9/12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 container  px-1">
             <ArticleCard article={featured} isFeatured />
             <div className="flex flex-col gap-4">
               {sideArticles.map((article, index) => (
                 <ArticleCard key={`${article.slug}-${index}`} article={article} />
               ))}
             </div>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.slice(3,9).map((article, index) => (
              <ArticleCard key={article.slug ?? index} article={article} />
            ))}
          </div>
        
        
        <CategoryImageBlock articles={articles}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {others.slice(9).map((article, index) => (
              <ArticleCard key={article.slug ?? index} article={article} />
            ))}
        </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 rounded relative">
        <CategorySideAd/>
        <FollowUs/>
      <MostRead articles={articles}/>
     
    
      <FloatingAd/>
      </div>
      </div>    
      
    </div>
  )
}


