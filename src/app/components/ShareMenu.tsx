'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  faFacebookF,
  faXTwitter,
  faFlipboard,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faShareNodes, faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShareMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  const links = [
    {
      href: '#',
      icon: faEnvelope,
      text: 'text-red-600',
      texttip: 'Share via Email',
    },
    {
      href: '#',
      icon: faFacebookF,
      text: 'text-[#1877F2]',
      texttip: 'Share on Facebook',
    },
    {
      href: '#',
      icon: faXTwitter,
      text: 'text-black',
      texttip: 'Share on Twitter',
    },
    {
      href: '#',
      icon: faFlipboard,
      text: 'text-[#E12828]',
      texttip: 'Share on Flipboard',
    },
    {
      href: '#',
      icon: faLinkedin,
      text: 'text-[#0077B5]',
      texttip: 'Share on LinkedIn',
    },
  ];

  return (
    <div
      className="fixed bottom-16 left-4 z-50 flex flex-col items-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dropdown list */}
      {isHovered && (
        <div className="mb-2 flex flex-col gap-3">
          {links.map(({ href, icon, texttip, text }, i) => (
            <div className="relative group" key={i}>
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={text}
                className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md ${text}`}
              >
                <FontAwesomeIcon icon={icon} />
              </Link>
              {/* Tooltip */}
              <div className="absolute left-14 top-1/2 -translate-y-1/2 px-4 py-2 rounded bg-amber-100 text-gray-800 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                {texttip}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Button */}
      <div className="bg-red-700 text-white p-3 rounded-4xl shadow-lg transition-colors">
        <button
          type="button"
          aria-label="Ouvrir le menu de partage"
          className="text-white text-2xl"
        >
          <FontAwesomeIcon icon={isHovered ? faXmark : faShareNodes} />
        </button>
      </div>
    </div>
  );
};

export default ShareMenu;
