import {
  faFacebookF,
  faFlipboard,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

const items = [
  {
    href: "#",
    title: "Facebook",
    icon: faFacebookF,
    text: "Facebook",
    color: "text-[#1877F2]",
    hoverBg: "hover:bg-[#1877F2]",
    hoverText: "hover:text-white",
  },
  {
    href: "#",
    title: "X (Twitter)",
    icon: faXTwitter,
    text: "X",
    color: "text-black",
    hoverBg: "hover:bg-black",
    hoverText: "hover:text-white",
  },
  {
    href: "#",
    title: "Flipboard",
    icon: faFlipboard,
    text: "Flipboard",
    color: "text-[#E12828]",
    hoverBg: "hover:bg-[#E12828]",
    hoverText: "hover:text-white",
  },
  {
    href: "#",
    title: "LinkedIn",
    icon: faLinkedin,
    text: "LinkedIn",
    color: "text-[#0077B5]",
    hoverBg: "hover:bg-[#0077B5]",
    hoverText: "hover:text-white",
  },
];

interface Article {
  category: string;
  title: string;
  slug: string;
}

interface DetailHeaderProps {
  article: Article;
}

export default function DetailHeader({ article }: DetailHeaderProps) {
  return (
    <>
      <div className="w-full px-2 md:px-5 py-6">
        <nav className="flex text-gray-400 items-center space-x-2 text-[16px]  mb-2 whitespace-nowrap overflow-x-auto">
          <Link href="/" className="text-blue-400  hover:text-gray-700">
            Home
          </Link>
          <span>/</span>
          <Link href={`/${article.category}`} >
            <span className=" capitalize text-blue-400 hover:text-gray-700">
              {article.category}
            </span>
          </Link>
          <span>/</span>
         <span className="block text-gray-400 max-w-[150px] truncate sm:max-w-none sm:whitespace-normal sm:overflow-visible sm:text-ellipsis-none">
            {article.title}
          </span>
        </nav>

        <h1 className="text-3xl font-bold capitalize mb-1">{article.title}</h1>
      </div>

      <div className="hidden   ml-4 mr-4  bg-white py-2 px-4 border  border-gray-300  sm:block relative">
        <ul className="flex items-center space-x-2">
          {items.map((item, index) => (
            <li
              key={index}
              className={`group w-40 relative px-8 py-2 border-e border-e-gray-300 me-2 transition duration-300 ease-in-out hover:text-white  cursor-pointer ${item.hoverBg}`}
            >
              <Link
                href={item.href}
                target="_blank"
                rel="noreferrer"
                title={item.title}
                className={`flex justify-center items-center h-full text-xl transition duration-300 ease-in-out ${item.color}`}
              >
                <span className="group-hover:hidden block">
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span className="hidden group-hover:block text-sm font-semibold uppercase tracking-wide text-white">
                  {item.text}
                </span>
              </Link>
            </li>
          ))}

          <li className="group relative w-40 px-8 py-2 border-e border-e-gray-300 transition duration-300 ease-in-out hover:bg-[#CB1C27] hover:text-white cursor-pointer">
            <button
              type="button"
              title="Envoyer à un ami"
              className="flex justify-center items-center h-full text-xl text-[#CB1C27] group-hover:text-white transition"
            >
              <span className="group-hover:hidden block">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="hidden group-hover:block text-sm font-semibold uppercase tracking-wide">
                Envoyer
              </span>
            </button>
          </li>

          
          <li className="w-full  py-2  mr-5  flex justify-center items-center text-[#CB4C2E] text-sm uppercase tracking-wide">
            {article.category}
          </li>
        </ul>
      </div>
    </>
  );
}
