import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import DetailHeader from "../../components/DetailHeader";
import ShareToolbar from "@/app/components/ShareToolbar";
import Details from "@/app/components/Details";
import ShareMenu from "@/app/components/ShareMenu";
import CategorySideAd from "@/app/components/CategorySideAd";
import FollowUs from "@/app/components/FollowUs";
import MostRead from "@/app/components/MostRead";
import CategorySideAd_2 from "@/app/components/CategorySideAd_2";
import CategorySideAd_3 from "@/app/components/CategorySideAd_3";
import GastronomyFeature from "@/app/components/GastronomyFeature";



interface Article {
  
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
 
}


export async function generateStaticParams() {
  const dataDir = path.join(process.cwd(), 'src', 'data');

  const files = await fs.readdir(dataDir);
  const params: { category: string; slug: string }[] = [];

  for (const file of files) {
    const category = file.replace('.json', '');
    const filePath = path.join(dataDir, file);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const articles = JSON.parse(fileContent);

    for (const article of articles) {
      params.push({ category, slug: article.slug });
    }
  }

  return params;
}
export default async function Page({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } =await  params;

  try {
    const filePath = path.join(process.cwd(), "src", "data", `${category}.json`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const articles: Article[] = JSON.parse(fileContent);
    const article = articles.find((a) => a.slug === slug);

    if (!article) return notFound();
// const isClientSlug = category==="politics" && slug === "puerto-ricos-former-governor-vindicated-in-historic-legal-twist";
    return(
        <div className='mx-0 md:mx-8'>
            <ShareMenu/>
            <div className="flex flex-wrap mx-0">
                <div className=" md:w-8/12 lg:w-9/12">
                    <DetailHeader article={article}/>
                    <ShareToolbar/>
                    
                    <Details article={article}/>
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
   } catch (error) {
    console.error("Error loading article:", error);
    return notFound();
  }
}