import React, { useState } from 'react';
import { ChefHatIcon, MenuIcon } from 'lucide-react';
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ChefHatIcon className="w-8 h-8" />
          <h1 className="text-xl font-bold">Les Cordons Bleus</h1>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon className="w-6 h-6" />
        </button>
        <nav className={`${menuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 md:top-0 left-0 right-0 bg-blue-800 md:bg-transparent z-50 md:z-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
            <li className="py-2 md:py-0">
              <a href="#" className="hover:underline">
                Accueil
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#courses" className="hover:underline">
                Nos cours
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#booking" className="hover:underline">
                Réservation
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#" className="hover:underline">
                À propos
              </a>
            </li>
            <li className="py-2 md:py-0">
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>;
}