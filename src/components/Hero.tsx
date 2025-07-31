import React from 'react';
export function Hero() {
  return <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-4">
          Découvrez l'art de la cuisine
        </h2>
        <p className="text-xl mb-8 max-w-2xl">
          Apprenez à cuisiner comme un chef avec nos ateliers pratiques et
          conviviaux. Réservez dès maintenant votre cours de cuisine.
        </p>
        <a href="#booking" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full transition duration-300">
          Réserver un cours
        </a>
        <div className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-2">+50</h3>
              <p>Cours différents</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">+20</h3>
              <p>Chefs experts</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">+5000</h3>
              <p>Élèves satisfaits</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}