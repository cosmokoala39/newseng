import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import CategoryHeader from '../components/CategoryHeader';
import ArticleCard from '../components/ArticleCard';
import CategoryImageBlock from '../components/CategoryImageBlock';
import CategoryNews from '../components/CategoryNews';
import MostRead from '../components/MostRead';
import CategorySideAd from '../components/CategorySideAd';
import CategorySideAd_2 from '../components/CategorySideAd_2';
import GastronomyFeature from '../components/GastronomyFeature';
import FollowUs from '../components/FollowUs';
import CategorySideAd_3 from '../components/CategorySideAd_3';


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
    <div className='container mx-auto'>
      <CategoryHeader articles={articles}/>
      <div className="flex flex-wrap mx-4">
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
            {others.slice(3).map((article, index) => (
              <ArticleCard key={article.slug ?? index} article={article} />
            ))}
          </div>
        <CategoryImageBlock/>
        <CategoryNews articles={articles}/>
        <CategoryImageBlock/>
        <CategoryNews articles={articles}/>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 rounded relative">
        <CategorySideAd/>
        <FollowUs/>
      <MostRead articles={articles}/>
      <CategorySideAd_2/>
      <CategorySideAd_3/>
      <GastronomyFeature/>
      </div>
      </div>    
      
    </div>
  )
}


