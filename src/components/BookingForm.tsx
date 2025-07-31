import React, { useState } from 'react';
import { CalendarIcon, UsersIcon, ClockIcon } from 'lucide-react';
export function BookingForm() {
  // Définition des prix pour chaque cours
  const coursePrices = {
    '': 0,
    patisserie: 85,
    italienne: 95,
    moleculaire: 120,
    sushi: 90,
    'parent-enfant': 70
  };
  // État pour suivre le cours sélectionné
  const [selectedCourse, setSelectedCourse] = useState('');
  // Fonction pour mettre à jour le cours sélectionné
  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(e.target.value);
  };
  // Obtenir le prix actuel basé sur le cours sélectionné
  const currentPrice = coursePrices[selectedCourse as keyof typeof coursePrices];
  return <section id="booking" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-blue-800">
            Réservez votre cours
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Sélectionnez le cours qui vous intéresse et réservez votre place en
            quelques clics.
          </p>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="p-6 bg-blue-700 text-white">
              <h3 className="text-xl font-semibold">
                Formulaire de réservation
              </h3>
              <p className="text-blue-100">
                Complétez ce formulaire pour réserver votre atelier de cuisine
              </p>
            </div>
            <form className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="firstName">
                    Prénom
                  </label>
                  <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="lastName">
                    Nom
                  </label>
                  <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                  Téléphone
                </label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="course">
                  Cours
                </label>
                <select id="course" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required value={selectedCourse} onChange={handleCourseChange}>
                  <option value="">Sélectionnez un cours</option>
                  <option value="patisserie">Pâtisserie française</option>
                  <option value="italienne">Cuisine italienne</option>
                  <option value="moleculaire">Cuisine moléculaire</option>
                  <option value="sushi">Sushis & cuisine japonaise</option>
                  <option value="parent-enfant">Atelier parent-enfant</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="block text-gray-700 font-medium mb-2">
                    <CalendarIcon className="w-5 h-5 text-blue-700 inline mr-2" />
                    Dates et horaires
                  </p>
                  <p className="text-gray-600">
                    Nous contacter pour les dates et horaires disponibles
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <UsersIcon className="w-5 h-5 text-blue-700" />
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="participants">
                      Participants
                    </label>
                    <select id="participants" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                      <option value="4">4 personnes</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="notes">
                  Notes spéciales (allergies, restrictions alimentaires, etc.)
                </label>
                <textarea id="notes" rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-700 font-medium">Total:</span>
                  <span className="text-2xl font-bold text-blue-800">
                    {currentPrice > 0 ? `${currentPrice} €` : '-- €'}
                  </span>
                </div>
                <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition duration-300" disabled={!selectedCourse}>
                  Réserver et payer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
}