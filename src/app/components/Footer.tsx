
import { faFacebook, faInstagramSquare, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Scrollable container on mobile */}
    <div className="flex flex-nowrap overflow-x-auto space-x-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:space-x-0 sm:gap-8">

      {/* Column 1 */}
      <div className="min-w-[200px] flex-shrink-0 sm:flex-shrink sm:min-w-0">
        <h4 className="uppercase mb-2 font-semibold text-base text-black">DEPARTMENTS</h4>
        <ul className="space-y-1">
          <li className="uppercase mb-2 font-semibold text-base text-black">Group & Careers</li>
          <li className="uppercase mb-2 font-semibold text-base text-black">Announcements / Notices</li>
          <li className="uppercase mb-2 font-semibold text-base text-black">Newsletter</li>
          
            <li className="uppercase mb-2 font-semibold text-base text-black">Economy</li>
         
          <li className="uppercase mb-2 font-semibold text-base text-black">Sports</li>
     
          
          </ul>

        </div>
     

      {/* Column 2 */}
      <div className="min-w-[200px] flex-shrink-0 sm:flex-shrink sm:min-w-0">
        <h4 className="uppercase mb-2 font-semibold text-base text-black">Sections</h4>
        <ul className="space-y-1">         
          <li className="uppercase mb-2 font-semibold text-base text-black">Environment</li>
          <li className="uppercase mb-2 font-semibold text-base text-black">Education</li>
          <li className="uppercase mb-2 font-semibold text-base text-black">Politics</li>
          <li className="uppercase mb-2 font-semibold text-base text-black">Health</li>
          <li className="uppercase mb-2 font-semibold text-base text-black">Transport</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="min-w-[200px] flex-shrink-0 sm:flex-shrink sm:min-w-0">
        <ul className="space-y-1">
          <li className="uppercase mb-2 font-semibold text-base text-black">Games</li>
          <li className="uppercase mb-2 font-semibold text-base text-black">TV Program</li>
          <li className="uppercase mb-2 font-semibold text-base text-black">Weather</li>
          <li className="uppercase mb-2 font-semibold text-base text-black">Advertising Agency</li>
          <li className="uppercase mb-2 font-semibold text-base text-black">Gender Equality Index</li>
        </ul>

        <div className="mt-5">
          <h2 className="uppercase mb-2 font-semibold text-base text-black">My Account</h2>
          <ul>
            <span className="footer-hover footer-font">My Subscriptions</span>/
            <span className="footer-hover footer-font">My Newsletters</span>/
            <span className="footer-hover footer-font">My Orders</span>
          </ul>
        </div>
      </div>

      {/* Column 4 */}
      <div className="min-w-[200px] flex-shrink-0 sm:flex-shrink sm:min-w-0">
        <div className="h-20"></div>
        <h4 className="uppercase mb-2 font-semibold text-base text-black">Stay Connected</h4>
        <div className="flex space-x-6 ml-2">
          <div><FontAwesomeIcon icon={faFacebook} className="text-3xl" /></div>
          <div><FontAwesomeIcon icon={faXTwitter} className="text-3xl" /></div>
          <div><FontAwesomeIcon icon={faInstagramSquare} className="text-3xl" /></div>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}
