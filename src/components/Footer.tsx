import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Les Cordons Bleus</h3>
            <p className="mb-4">
              École de cuisine proposant des ateliers pratiques pour tous les
              niveaux, du débutant au chef expérimenté.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-300">
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-300">
                <TwitterIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <span>
                  45 Boulevard de la Méditerranée, 13001 Marseille, France
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>+33 4 91 23 45 67</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>contact@lescordonsbleus.fr</span>
              </li>
              <li className="flex items-start">
                <ClockIcon className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <span>
                  Lun-ven: 9h-19h
                  <br />
                  Sam: 10h-17h
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:underline">
                  Nos cours
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:underline">
                  Réservation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Chefs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-blue-800 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Les Cordons Bleus. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>;
}