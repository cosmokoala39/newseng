import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import DetailHeader from "../../components/DetailHeader";



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
        <div className='container mx-auto'>
            <DetailHeader article={article}/>
        </div>
    )
   } catch (error) {
    console.error("Error loading article:", error);
    return notFound();
  }
}