import Image from "next/image"
import Link from "next/link"


const CategoryImageBlock = () => {
  return (
    <div className="bg-gray-900 py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-lg font-semibold text-amber-50">News in images</h2>
        
          <div className="text-sm text-amber-50 hover:underline flex items-center gap-1">
            <span>Tout voir</span>
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
          </div>
       
      </div>

      {/* Grid of image articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {[{
            "image":"/images/imageblock1.webp",
            "title":"Melle: Art and craftsmanship in the spotlight with the first exhibition of the Trésor"
        },
        {
            "image":"/images/imageblock2.webp",
            "title":"Melle: Art and craftsmanship in the spotlight with the first exhibition of the Trésor"
        },
        {
            "image":"/images/imageblock3.webp",
            "title":"Melle: Art and craftsmanship in the spotlight with the first exhibition of the Trésor"
        }

        ].map((item, idx) => (
          <Link href="#" key={idx} className="block group relative">
            
              <div className="overflow-hidden rounded-md relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={768}
                  height={150}
                  layout="responsive"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                
              </div>
              {/* Caption */}
              <div className="mt-2 text-sm font-medium text-gray-50 hover:underline">
                {item.title}
              </div>
           
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryImageBlock
