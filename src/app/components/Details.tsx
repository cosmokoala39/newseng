import Image from "next/image";
import DetailDate from "./DetailDate";
import Link from "next/link";

export type Article = {
  title: string;
  image: string;
  shortdescription: string;
  description: string;
  slug: string;
  category: string;
  date?: string;
  author?: string;
};

interface DetailsProps {
  article: Article;
}

export default function Details({ article }: DetailsProps) {

function splitIntoParagraphs(text: string, sentencesPerParagraph = 3) {
  // Split sentences safely (preserves things like "U.S." and emails)
  const sentences = text.match(/[^.!?]+[.!?](?=\s|$)/g) || [];

  // Group every `sentencesPerParagraph` into a paragraph
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += sentencesPerParagraph) {
    const group = sentences.slice(i, i + sentencesPerParagraph).join(' ').trim();
    paragraphs.push(group);
  }

  return paragraphs;
}


  return (
    <div className="relative">
      <div className="p-4 ">
        <div>
          <Image
            src={article.image}
            alt={article.title}
            width={934}
            height={525}
            className="w-full h-auto object-cover  max-h-[525px]"
            priority
          />

          <div className="bg-gray-100 px-3 py-4 sm:px-4 sm:py-5">
            <h1 className="text-lg sm:text-xl font-semibold mb-1">{article.title}</h1>
            <p className="italic text-sm sm:text-base text-gray-600">
              © (Photo illustration NR, Alizée Golfier)
            </p>
          </div>
        </div>

        <DetailDate article={article} />

        <div className="mt-5 mb-5 ">
          <strong className="block  text-base sm:text-xl ">{article.shortdescription}</strong>
        </div>

       <div className="text-sm sm:text-base text-gray-800 leading-relaxed w-full">
          {splitIntoParagraphs(article.description, 3).map((paragraph, idx) => (
            <p key={idx} className="mb-4 indent-6 sm:indent-8">
              {paragraph}
            </p>
          ))}
        </div>
              <div className="uppercase text-[18px] text-gray-600 mt-5"><span>&gt;</span> also read <Link href="#" className="text-red-600 hover:underline"> DPE: 850,000 homes will no longer be considered energy sieves</Link></div>

      </div>
    </div>
  );
}
