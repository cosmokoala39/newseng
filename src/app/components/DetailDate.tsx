

interface Article {
  
  category: string;
  title: string;
  shortdescription: string;
  description: string;
  image: string;
  slug: string;
  date?:string;
  author?:string;
 
}
interface DetailDateProps {
    article:Article;
}

export default function DetailDate ({article} : DetailDateProps) {
    return(
        <div className="border-t border-b border-t-gray-400 border-b-gray-400 my-5 text-base text-gray-800">
            <div className="py-5 px-1 flex  align-middle justify-between">
                <div className="left-0" ><p>By : <strong className="">{article.author}</strong> </p></div>
                <div className="right-0 flex flex-col">
                    <p>Published On  :  <span className="font-semibold">{article.date}</span> </p>
                    <p>Updated On  : <span className="font-semibold">{article.date}</span> </p>
                </div>
            </div>
        </div>
    )
}