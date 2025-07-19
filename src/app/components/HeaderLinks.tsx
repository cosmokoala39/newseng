'use client';

import Link from 'next/link';

const links = [
  {  label: 'Obutuary', external: false },
  {  label: 'Real estate', external: true },
  {  label: 'Job Advertisement', external: true },
  {  label: 'Legal Announcements', external: false },
  { label: 'Newsletters', external: false },
  { label: 'Subscriptions', external: true },
  { label: 'Games', external: false },
  {  label: 'Loire valley T.V', external: true },
];

export default function HeaderLinks() {
  return (
    <div className="bg-gray-400 h-[30px]  items-center overflow-x-hidden  whitespace-nowrap px-4 hidden md:block ">
      {links.map(({ label, external }) =>
        external ? (
          <a
            key={label}
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-white text-sm px-3 py-1 hover:underline ml-15"
          >
            {label}
          </a>
        ) : (
          <Link
            key={label}
            href="#"
            className="text-white text-sm px-3 py-1 hover:underline ml-15"
          >
            {label}
          </Link>
        )
      )}
    </div>
  );
}
