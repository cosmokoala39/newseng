'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, Search, User, Newspaper } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`w-full border-b bg-white shadow-sm sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-5'}`}>
        <div className="flex items-center justify-between px-4 md:px-8 transition-all duration-300">
          {/* Left Section: Logo only */}
          <div className="flex items-center space-x-4">
            
             {(scrolled || typeof window !== 'undefined' && window.innerWidth < 768) && (
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-black hover:text-red-600 flex-col md:inline-flex"
                  aria-label="Menu"
                >
                  <Menu className="w-5 h-5 mx-0.5" />
                  <p className="text-xs text-black">Menu</p>
                </button>
              )}

            <Link href="/" aria-label="La Nouvelle République">
              <Image
                src="https://www.lanouvellerepublique.fr/_next/static/svg/logo.3ee3466abe0d1c7768b5df3ee595f280.svg"
                alt="La Nouvelle République"
                width={170}
                height={65}
                className={`h-auto transition-all duration-300 ${scrolled ? 'w-[100px] md:w-[130px]' : 'w-[120px] md:w-[170px]'}`}
                priority
              />
            </Link>
          </div>

          {/* Right Section: Icons */}
          <div className="flex items-center space-x-3">
            <button
              aria-label="Search"
              className="hidden md:inline-flex text-gray-700 hover:text-red-600"
            >
              <Search className="w-5 h-5" /> Search
            </button>

            <Link
              href="#"
              className="text-gray-700  hidden md:flex items-center space-x-4 hover:text-red-600"
            >
              <User className="w-5 h-5" />Account
            </Link>

            <Link
              href="#"
              className="text-gray-700  hidden md:flex items-center space-x-4 hover:text-red-600"
            >
              <Newspaper className="w-5 h-5" />Journal
            </Link>

            <Link
              href="#"
              className="bg-amber-500 text-gray-700 text-sm px-3 py-1 rounded hover:bg-amber-600"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div
            className="absolute top-full left-0 w-60 bg-white border rounded shadow z-50 overflow-y-auto"
            style={{
              maxHeight: '500px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600">
              <Link href="/" className="text-gray-700 hover:text-red-600">
                Home
              </Link>
              <button onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-red-600">
                X
              </button>
            </div>            
            
            <Link href="/politics" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600">Politics</Link>
            <Link href="/business" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600">Business</Link>
            <Link href="/health" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600">Health</Link>
            <Link href="/sports" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600">Sports</Link>
            <Link href="/science" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600">Science</Link>
            <Link href="/technology" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600">Technology</Link>

            <div className="border-t border-gray-300">
              <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600">About</Link>
              <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600">FAQ</Link>
              <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600">Help</Link>
            </div>

            <div className="bg-gray-800">
              <h3 className="text-white px-4 pt-2 text-sm">CONTACT US</h3>
              <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-900">
                <FontAwesomeIcon icon={faFacebookSquare} className="text-2xl mx-1" />
                <span className="mx-3">Facebook</span>
              </Link>
              <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-900">
                <FontAwesomeIcon icon={faXTwitter} className="text-2xl mx-1" />
                <span className="mx-3">Twitter</span>
              </Link>
              <Link href="#" className="block px-4 py-2 text-white hover:bg-gray-900">
                <FontAwesomeIcon icon={faInstagram} className="text-2xl mx-1" />
                <span className="mx-3">Instagram</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Optional Bottom Navigation */}
      <nav aria-label="Navigation principale">
        <ul className="hidden md:flex divide-x divide-gray-300 bg-white shadow-md justify-center h-12">
          <li className="px-4 py-2 text-sm text-gray-700 align-middle">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black flex items-center hover:text-red-600"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5 mx-0.5" />
              <span>Menu</span>
            </button>
          </li>
          
            <li  className="px-16 py-2 text-sm text-gray-700 align-middle hover:text-red-600" role="none">
                <div className="Lien_link__4qX5w" role="menuitem" aria-haspopup="true" aria-expanded="false">
                  <Link href="/politics">Politics</Link>
                </div>
            </li>
            <li  className="px-16 py-2 text-sm text-gray-700 align-middle hover:text-red-600" role="none">
                <div className="Lien_link__4qX5w" role="menuitem" aria-haspopup="true" aria-expanded="false">
                  <Link href="/business">Business</Link>
                </div>
            </li>
            <li  className="px-16 py-2 text-sm text-gray-700 align-middle hover:text-red-600" role="none">
                <div className="Lien_link__4qX5w" role="menuitem" aria-haspopup="true" aria-expanded="false">
                  <Link href="/sports">Sports</Link>
                </div>
            </li>
            <li  className="px-16 py-2 text-sm text-gray-700 align-middle hover:text-red-600" role="none">
                <div className="Lien_link__4qX5w" role="menuitem" aria-haspopup="true" aria-expanded="false">
                  <Link href="/health">Health</Link>
                </div>
            </li>
            <li  className="px-16 py-2 text-sm text-gray-700 align-middle hover:text-red-600" role="none">
                <div className="Lien_link__4qX5w" role="menuitem" aria-haspopup="true" aria-expanded="false">
                  <Link href="/science">Science</Link>
                </div>
            </li>
            <li  className="px-16 py-2 text-sm text-gray-700 align-middle hover:text-red-600" role="none">
                <div className="Lien_link__4qX5w" role="menuitem" aria-haspopup="true" aria-expanded="false">
                  <Link href="/technology">Technology</Link>
                </div>
            </li>
          
        </ul>
      </nav>
    </>
  );
}
