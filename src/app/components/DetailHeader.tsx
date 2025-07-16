import { Home } from "lucide-react";
import Link from "next/link";
 interface Article{
    category:string;
    title:string;
    slug:string;  
 }
 interface DetailHeaderProps{
    article:Article
 }
export default function DetailHeader ({article}:DetailHeaderProps){
   return(
    <div className="w-full px-4 md:px-8 py-6">
     
      <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
        <Link href="/" className="text-gray-600 hover:text-black">
          <Home size={18} />
        </Link>
        <span>&gt;</span>
        <span className="capitalize text-gray-400">{article.category}</span>/
        <span className="capitalize text-gray-400">{article.slug}</span>
      </nav>

      
      <h1 className="text-3xl font-bold capitalize mb-6">{article.title}</h1>
    </div>
   )
}