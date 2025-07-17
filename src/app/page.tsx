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
import FollowUs from './components/FollowUs';

import MainMostread from './components/MainMostread';
import CategorySideAd_2 from './components/CategorySideAd_2';
import CategorySideAd_3 from './components/CategorySideAd_3';
import RealEstateLinks from './components/RealEstateLinks';
import FloatingAd from './components/FloatingAd';
import LocalNews from './components/LocalNews';
import ToggleContentWithLoading from './components/ToggleContentWithLoading';



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


  
   const [featured, ...others] = mergedArticles;
  const sideArticles = others.slice(0, 2);
  return (
    <>
    <div className='mx-0 md:mx-8 '>
        <Mainheader/>
        <div className="flex flex-wrap mx-0 md:mx-4">
        <div className="md:w-8/12 lg:w-9/12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 container  px-4">
           <ArticleCard article={featured} isFeatured />
           <div className="flex flex-col gap-4 ml-2">
              {sideArticles.map((article, index) => (
                <ArticleCard key={`${article.slug}-${index}`} article={article} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2">
            {others.slice(3,12).map((article, index) => (
              <ArticleCard key={article.slug ?? index} article={article} />
            ))}
          </div>
          <CategoryImageBlock articles={mergedArticles}/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.slice(3,21).map((article, index) => (
              <ArticleCard key={article.slug ?? index} article={article} />
            ))}
          </div>
          <LocalNews category="business" articles={mergedArticles} />
          <LocalNews category="politics" articles={mergedArticles} />
          <LocalNews category="health" articles={mergedArticles} />
          <LocalNews category="sports" articles={mergedArticles} />
          <LocalNews category="science" articles={mergedArticles} />
          <LocalNews category="technology" articles={mergedArticles} />
          <div className='text-3xl font-bold mt-5 mb-5 px-5'>All The News</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mergedArticles.slice(0,12).map((article, index) => (
              <ArticleCard key={article.slug ?? index} article={article} />
            ))}
          </div>
          <div className="w-full mb-14">
           <ToggleContentWithLoading mergedArticles={mergedArticles}/>
         </div>
         </div>

         <div className="w-full md:w-1/3 lg:w-1/4 rounded relative">
            <CategorySideAd/>
            <FollowUs/>
              <MainMostread  articles={others.slice(17)} />
              <CategorySideAd_2/>
              <CategorySideAd_3/>
              <RealEstateLinks/>
              <FloatingAd/>
          </div>
         </div>
        </div>
        </>
  );
}
