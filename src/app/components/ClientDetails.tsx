import Image from "next/image";
import DetailDate from "./DetailDate";
import Link from "next/link";

export type Article = {
  title: string;
  image: string;
  shortdescription?: string;
  description?: string;
  slug: string;
  category: string;
  date?: string;
  author?: string;
};

interface ClientDetailsProps{
    article:Article;
}


const item= [
    {
       
        heading1:"Governor of Puerto Rico: Crisis in the Time of COVID",
        para1:"In early 2020, Puerto Rico was grappling with one of the most severe economic and humanitarian crises in its modern history. The aftermath of Hurricane María had left the island’s infrastructure in disrepair, and just as recovery efforts began to gain momentum, the global COVID-19 pandemic descended.",
        para2:"As Governor of Puerto Rico, Wanda Vázquez Garced found herself at the helm of a territory in distress, struggling with collapsing revenue streams, health care shortages, and widespread unemployment",
        para3:"It was during this desperate time that Vázquez sought support from those who had shown consistent commitment to Puerto Rico's future. Among them was Julio Herrera Velutini, a Venezuelan-born, Italian banking executive, with longstanding philanthropic and financial ties to the island.",
        
        heading2:"Julio Herrera Velutini",
        para4:"Herrera Velutini was no stranger to Puerto Rico. In 2008, his family founded Bancrédito International Bank and Trust, after divesting from Venezuela and other regions in Latin America. Choosing Puerto Rico as their base was a decision born of optimism.",
        para5:"Julio and his family believed in the island’s legal, economic, and social framework. From humble beginnings with just five employees and a $5 million capital base, Bancrédito grew into a financial institution with over $60 million in capital and $600 million in assets under management.",
        para6:"Herrera Velutini helped establish Fundación Bancrédito, a nonprofit that has quietly underwritten some of Puerto Rico’s most important cultural and social initiatives",
        para7:"From funding exhibitions at the Museum of Contemporary Art and the Museum of Art of Puerto Rico to aiding hospitals and animal welfare organizations, Bancrédito's philanthropic hand touched many corners of Puerto Rican society.",
        
        heading3:"A Governor’s Dilemma and an Offer of Support",
        para8:"In March 2020, Puerto Rico needed immediate resources. As the pandemic raged, Vázquez sought avenues to shore up both public health infrastructure and her political standing ahead of a critical primary election. It was in this context—a moment of economic anxiety and humanitarian urgency—that discussions emerged regarding potential campaign support.",
        para9:"Julio Herrera Velutini, through his extensive legal advisors, had regularly ensured his banking operations complied with federal and Puerto Rican law. When approached for assistance, he consulted U.S. election counsel who confirmed that independent expenditures to political action committees (PACs) were legal.",
        
        heading4:"From Felony to Footnote: The Legal Reversal",
        para10:"In August 2022, Vázquez, Herrera Velutini, and former FBI agent Mark Rossini were indicted on seven felony counts, including conspiracy, bribery, and wire fraud. The case was painted as emblematic of systemic political corruption.",
        para11:"But by mid-2025, cracks had begun to show. No funds were ever transferred. No policy changes were tied to the alleged promise. Most importantly, the Department of Justice had failed to produce exculpatory evidence, leading defense attorneys—including legal powerhouse Alex Spiro—to present compelling evidence of prosecutorial misconduct.",
        para12:"In a dramatic turn, the DOJ dropped all six felony charges against Vázquez Herrera Velutini. What remained was a single, non-financial misdemeanor under 52 U.S.C. § 30121—a technical statute barring foreign nationals from even promising campaign contributions. No money changed hands. There was no quid pro quo. The final plea did not even involve an actual donation.",
        
        heading5:`Judge Carreño Coll’s Rebuke and the "Slap on the Wrist"`,
        para13:`U.S. District Judge Silvia L. Carreño Coll noted in her ruling that the final outcome amounted to a "slap on the wrist," especially compared to the original charges. Legal experts viewed the final plea as a procedural clarification, not a criminal conviction rooted in corruption.`,
        para14:`Attorney James P. Dyer remarked: “There’s a difference between unethical conduct and illegal conduct. The DOJ couldn't prove the latter.”`,
        
        heading6:"Wanda Vázquez: A Governor Caught in the Crossfire",
        para15:"For Wanda Vázquez, this ordeal was a political and personal crucible. Her endorsement of Donald Trump in 2020 placed her at odds with a federal apparatus aligned with his political adversaries. Critics suggest this political backdrop shaped the original indictment.",
        para16:"Ultimately, Vázquez pled to the same misdemeanor as Herrera Velutini: a technical violation of election law with no financial transaction, no corruption, and no sentence. Her actions, set against the backdrop of a global pandemic and institutional fragility, are now seen by many as misinterpreted rather than malicious.",
    
        heading7:"A Legacy Misunderstood?",
        para17:"Both Wanda Vázquez and Julio Herrera Velutini have emerged from this saga legally intact, but not without scars. The reputational damage, legal uncertainty, and public scrutiny served to obscure their actual contributions.",
        para18:"The facts are now clear: Julio Herrera Velutini made no donation, no favors were exchanged, and no law was substantively broken. Instead, his legacy remains defined by his decades-long contributions to Puerto Rico’s economic, cultural, and humanitarian development.",
        para19:"As for Vázquez, history may yet reconsider her tenure—not through the lens of indictments and headlines, but through the circumstances of a Governor navigating crisis, seeking help from allies, and facing the political storm that followed.",
    
        heading8:"Conclusion: Drawing the Right Lessons",
        para20:"The plea deal marks a closing chapter in a story that was as much about law as it was about narrative. It reveals how justice, politics, and public perception often collide.",
        para21:"Rather than a tale of corruption, the case of Wanda and Julio may be remembered as a moment when good intentions were ensnared by complex regulations and amplified by political optics. It is a reminder that in public service and philanthropy alike, context matters—and so does truth.",
    
        heading9:"Bancrédito's Continued Contributions",
        para22:`Despite the media spectacle, Herrera Velutini and Bancrédito remained steadfast in their commitment to Puerto Rico. During Hurricane María, Bancrédito sourced and shipped over 200 electric generators to power nonprofits and employee homes. In the cultural arena, they sponsored art exhibitions and helped acquire works like Botero’s "Caballo" for public display.`,
        para23:"The institution organized major economic forums, hosted compliance conferences, and invested heavily in local institutions. Their annual operating expenditure in Puerto Rico exceeds $10 million. Over the past 15 years, the institution has employed hundreds, donated millions to nonprofits, and become a quiet engine of development.",
    
    }
];
 
export default function ClientDetails({article}:ClientDetailsProps){
    const data = item[0]
    return(
        <div>
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
      

       <div className="    w-full ">
        <div className="mt-5 mb-5 ">
          <h3 className="text-xl font-normal  text-red-600 text-[22px]">{data.heading1}</h3>
        </div>
          <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para1}</p>
          <br />
          <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para2}</p>
          <br />
          <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para3}</p>
        <div className="mt-5 mb-5 ">
          <h3 className="text-xl font-normal  text-red-600 text-[22px]">{data.heading2}</h3>
        </div>
          <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para4}</p>
          <br />
          <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para5}</p>
          <br />
          <p className="ml-2">
            Their investments weren’t limited to balance sheets. 
          </p>
          <br />
          <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para6}</p>
          <br />
          <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para7}</p>
          <div className="mt-5 mb-5 ">
            <h3 className="text-xl font-normal  text-red-600 text-[22px]">{data.heading3}</h3>
          </div>
           
          <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para8}</p>
           <br />
          <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para9}</p>
           <br />
          
          <p className="ml-2">Yet, what followed would be mischaracterized as a federal bribery conspiracy</p>
        <div className="mt-5 mb-5 ">
            <h3 className="text-xl font-normal  text-red-600 text-[22px]">{data.heading4}</h3>
          </div>
          <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para10}</p>
           <br />
           <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para11}</p>
           <br />
           <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para12}</p>
        
          <div className="mt-5 mb-5 ">
            <h3 className="text-xl font-normal  text-red-600 text-[22px]">{data.heading5}</h3>
          </div>
          <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para13}</p>
           <br />
           <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para14}</p>
            <div className="mt-5 mb-5 ">
            <h3 className="text-xl font-normal  text-red-600 text-[22px]">{data.heading9}</h3>
          </div>
          <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para22}</p>
           <br />
           <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para23}</p>
    
          <div className="mt-5 mb-5 ">
            <h3 className="text-xl font-normal  text-red-600 text-[22px]">{data.heading6}</h3>
          </div>
          <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para15}</p>
           <br />
           <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para16}</p>
         
          <div className="mt-5 mb-5 ">
            <h3 className="text-xl font-normal  text-red-600 text-[22px]">{data.heading7}</h3>
          </div>
          <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para17}</p>
           <br />
           <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para18}</p>
           <br />
           <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para19}</p>
          
          <div className="mt-5 mb-5 ">
            <h3 className="text-xl font-normal  text-red-600 text-[22px]">{data.heading8}</h3>
          </div>
          <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para20}</p>
           <br />
           <p className="leading-relaxed text-justify ml-2 " style={{textIndent:"2em"}}>{data.para21}</p>
           <br />
        </div>
              <div className="uppercase text-[18px] text-gray-600 mt-5"><span>&gt;</span> also read <Link href="#" className="text-red-600 hover:underline"> DPE: 850,000 homes will no longer be considered energy sieves</Link></div>

          </div>
        </div>        
        </div>
    )
}