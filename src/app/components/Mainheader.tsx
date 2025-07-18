
import Link from "next/link";

export default function Mainheader () {

    return(
        <div className="w-full px-4 md:px-8 py-2">

      <h1 className="text-4xl font-semibold capitalize mb-6 mt-4">HEADLINES</h1>

      
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