import { Home } from "lucide-react";
import Link from "next/link";

export default function Mainheader () {

    return(
        <div className="w-full px-4 md:px-8 py-6">
    
      <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
        <Link href="/" className="text-gray-600 hover:text-black">
          <Home size={18} />
        </Link>
        
      </nav>

      
      <h1 className="text-3xl font-bold capitalize mb-4 p-4">HEADLINES</h1>

      
        <section className="hidden md:flex bg-gray-100 px-4 py-3 border-l-4 border-cyan-800 items-center gap-6">
          <h2 className="text-lg font-semibold whitespace-nowrap">At the moment</h2>

          <ul className="flex flex-wrap items-center gap-3">
            {[
              'Tour de France',
              'Exam Results',
              'Israel',
              'Summer Destinations',
              'Our Animals in Danger',
            ].map((title) => (
              <li key={title}>
                <Link
                  href="#"
                  className="bg-cyan-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap hover:bg-cyan-800 transition"
                >
                  {title.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </section>

    </div>
    )
}