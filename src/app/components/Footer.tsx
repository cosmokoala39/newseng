
import { faFacebook, faInstagramSquare, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-gray-100  text-sm text-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrollable container on mobile */}
        <div className="flex flex-nowrap overflow-x-auto space-x-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:space-x-0 sm:gap-8">

          {/* Column 1 */}
          <div className="min-w-[200px] flex-shrink-0 sm:flex-shrink sm:min-w-0">
            <h4 className="uppercase  mb-2 font-semibold text-base text-black ">DÉPARTEMENTS</h4>
            <ul className="space-y-1">
              <li><span className="footer-hover footer-font">Indre </span> / <span className="footer-hover footer-font">Indre-et-Loire </span>/ </li>
               <li> <span className="footer-hover footer-font">Loir-et-Cher </span>/ <span className="footer-hover footer-font">Deux-Sèvres</span> /
              <span className="footer-hover footer-font"> Vienne</span></li>
              
            </ul>

            <h3 className="uppercase  mb-2 font-semibold text-base text-black ">Du côté de</h3>
            <ul className="space-y-1">
              <li><span className="footer-hover footer-font">Blois</span>/
              <span className="footer-hover footer-font">Châteauroux</span>/
              <span className="footer-hover footer-font">Niort</span>/</li>
              <li> <span className="footer-hover footer-font">Poitiers</span>/
              <span className="footer-hover footer-font">Tours</span>/
              <span className="footer-hover footer-font">Châtellerault</span>
              </li>
            </ul>
            <div >
            <h4 className="uppercase  mb-2 font-semibold text-base text-black ">Clubs Sportifs</h4>
            <ul className="space-y-1">
            <li>
              <span className="footer-hover footer-font">ADA Blois Basket 41</span>
              /<span className="footer-hover footer-font">Chambray Touraine Handball</span>/
              </li>
              <li>
              /<span className="footer-hover footer-font">Chamois Niortais</span>
              /<span className="footer-hover footer-font">La Berrichonne Football</span>
              </li>
              <li>
              /<span className="footer-hover footer-font">Les Remparts</span>
              /<span className="footer-hover footer-font">Poinçonnet Basket</span>
              </li>
              <li>
              /<span className="footer-hover footer-font">Poitiers Basket 86</span>
              /<span className="footer-hover footer-font">Tours FC</span>
              </li>
              <li>
              /<span className="footer-hover footer-font">Tours Volley-Ball</span>
              /<span className="footer-hover footer-font">Stade Poitevin Volley</span>
              </li>
              <li>
              /<span className="footer-hover footer-font">Union Tours Basket Métropole</span>
              </li>
            </ul>
          </div>
          </div>
          

          {/* Column 2 */}
          <div className="min-w-[200px] flex-shrink-0 sm:flex-shrink sm:min-w-0">
            <h4 className="uppercase  mb-2 font-semibold text-base text-black ">Rubriques</h4>
            <ul className="space-y-1">
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Économie</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Loisirs</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Sports</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">France Monde</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Éducation</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Environnement</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Faits divers / Justice</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Politique</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Santé</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Transports</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">La NR et Vous</li>
            </ul>
          </div>

         
          

          {/* Column 4 */}
          <div className="min-w-[200px] flex-shrink-0 sm:flex-shrink sm:min-w-0">
            
            <ul className="space-y-1">
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Groupe et Carrières</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Annonces / Carnet</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Newsletter</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">La Boutique NR</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Jeux</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Programme TV</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Météo</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Régie publicitaire</li>
              <li className="uppercase  mb-2 font-semibold text-base text-black ">Index Égalité Professionnelle</li>
            </ul>

            <div className="mt-5">
                <h2 className="uppercase  mb-2 font-semibold text-base text-black ">Mon Compte</h2>
                <ul>
                
              <span className="footer-hover footer-font">Mes Abonnements</span>/
              <span className="footer-hover footer-font">Mes Newsletters</span>/
              <span className="footer-hover footer-font">Mes Commandes</span>
              </ul>
            </div>
             </div>
            <div className="min-w-[200px] flex-shrink-0 sm:flex-shrink sm:min-w-0">
                <div className="h-20"></div>
            <h4 className="uppercase  mb-2 font-semibold text-base text-black ">Restez connectés</h4>
            <div className="flex space-x-6 ml-2">
              <div ><FontAwesomeIcon icon={faFacebook} className="text-3xl"/></div> 
              <div ><FontAwesomeIcon icon={faXTwitter} className="text-3xl"/></div>
              <div ><FontAwesomeIcon icon={faInstagramSquare} className="text-3xl"/></div>
            </div>
           
          </div>
        </div>
      </div>
    </footer>
  );
}
