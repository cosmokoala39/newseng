import Image from "next/image";



export type Article = {
  title: string;
  image: string;
  shortdescription: string;
  description: string;
  slug: string;
  category: string;
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
            </div>
            <div className="mt-5 mb-5">
            <strong >{article.shortdescription}</strong>
            </div>
            <br />
            <div>{article.description}</div>
        </div>
        </div>
    )
}