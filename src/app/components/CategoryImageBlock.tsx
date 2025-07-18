import Image from "next/image"
import Link from "next/link"


interface Article {
  image:string;
  title:string;
  slug:string;
  category:string;
}
interface CategoryImageBlockProps{
  articles:Article[];
}

export default function CategoryImageBlock ({articles}:CategoryImageBlockProps) {
  return (
    <div className="px-4 my-8">
    <div  className="bg-gray-900 py-8 rounded-xl">
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-2xl font-semibold text-amber-50">News in images</h2>
        
          <Link href="#" className="text-sm no-underline text-amber-50 hover:underline flex items-center gap-1">
            <span>Show More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                d="M11.912 7.912c.417-.417 1.092-.417 1.508 0l6.667 6.667c.417.417.417 1.092 0 1.509l-6.667 6.667c-.417.417-1.092.417-1.508 0s-.417-1.092 0-1.509l5.912-5.912-5.912-5.912c-.417-.417-.417-1.092 0-1.508z"
                fill="currentColor"
              />
            </svg>
            </Link>
          </div>
       
      </div>

     
      <div className=" p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {articles.slice(0,3).map((article, index) => (
          <div  key={index} className="block group relative ">
            
              <Link href={`/${article.category}/${article.slug}`} className=" overflow-hidden rounded-md relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={768}
                  height={150}
                  layout="responsive"
                  
                  className="transition-transform duration-300 group-hover:scale-105 rounded"
                  style={{maxHeight:"150px" , objectFit:"cover",maxWidth:"750px"}}
                />
                
              </Link>
              {/* Caption */}
              <div className="p-2 mt-2">
              <Link href={`/${article.category}/${article.slug}`} className=" text-md font-medium text-gray-50 hover:underline">
                {article.title}
              </Link>
           </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}


