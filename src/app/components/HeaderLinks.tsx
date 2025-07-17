'use client';

import Link from 'next/link';

const links = [
  {  label: 'Avis de décès', external: false },
  {  label: 'Annonces immo', external: true },
  {  label: 'Annonces Emploi', external: true },
  {  label: 'Annonces Légales', external: false },
  { label: 'Newsletters', external: false },
  { label: 'Abonnements', external: true },
  { label: 'Jeux', external: false },
  {  label: 'Val de Loire TV', external: true },
];

export default function HeaderLinks() {
  return (
    <div className="bg-gray-400 h-[30px]  items-center overflow-x-auto whitespace-nowrap px-4 hidden md:block ">
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
