

import Link from "next/link";

export default function RealEstateLinks() {
  const links = [
    { href: "#", label: " In Indre" },
    { href: "#", label: " In Indre-et-Loire" },
    { href: "#", label: " In Loir-et-Cher" },
    { href: "#", label: "In Deux-Sèvres" },
    { href: "#", label: "In Vienne" },
  ];

  return (
    <div className="p-8 text-[18px]">
      <p className=" mb-2">Read our in-depth reports on the housing market:</p>
      <ul className="space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            &gt;{" "}
            <Link href={link.href} className="text-red-600 hover:underline hover:text-gray-800">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
