import Image from "next/image";
import DetailDate from "./DetailDate";



export type Article = {
  title: string;
  image: string;
  shortdescription: string;
  description: string;
  slug: string;
  category: string;
  date?:string;
  author?:string;
};

interface DetailsProps {
  article: Article;
}
export default function Details ({article}:DetailsProps){
    return(
        <div className="relative">
       
        <div className=" p-4">
            <div >
                <Image
                  src={article.image}
                  alt={article.title}
                  className="img-fluid w-full h-auto overflow-hidden object-cover"
                  layout="responsive" 
                  width={934} 
                  height={525} 
                  style={{maxHeight:"525px"}}
                />
                <div className="bg-gray-200 px-2 py-5 flex-col">
                  {article.title}
                  <p className="italic">© (Photo illustration NR, Alizée Golfier)</p>
                </div>
            </div>
            <DetailDate article={article}/>
            <div className="mt-5 mb-5">
            <strong >{article.shortdescription}</strong>
            </div>
            <br />
            <div>{article.description}</div>
        </div>
        </div>
    )
}