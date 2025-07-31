import React from 'react';
import { CourseCard } from './CourseCard';
export function CourseList() {
  const courses = [{
    id: 1,
    title: 'Pâtisserie française',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Apprenez à réaliser des pâtisseries françaises classiques comme les macarons, éclairs et tartes.',
    duration: '3 heures',
    participants: 8,
    price: 85,
    level: 'Débutant',
    date: 'Nous contacter pour les dates'
  }, {
    id: 2,
    title: 'Cuisine italienne',
    image: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Découvrez les secrets de la cuisine italienne authentique, des pâtes fraîches aux sauces traditionnelles.',
    duration: '4 heures',
    participants: 10,
    price: 95,
    level: 'Intermédiaire',
    date: 'Nous contacter pour les dates'
  }, {
    id: 3,
    title: 'Cuisine moléculaire',
    image: 'https://images.unsplash.com/photo-1528826007177-f38517ce0a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Explorez les techniques modernes de la cuisine moléculaire et surprenez vos invités avec des plats innovants.',
    duration: '5 heures',
    participants: 6,
    price: 120,
    level: 'Avancé',
    date: 'Nous contacter pour les dates'
  }, {
    id: 4,
    title: 'Sushis & cuisine japonaise',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: "Initiez-vous à l'art délicat de la préparation des sushis et découvrez d'autres spécialités japonaises.",
    duration: '3 heures',
    participants: 8,
    price: 90,
    level: 'Débutant',
    date: 'Nous contacter pour les dates'
  }, {
    id: 5,
    title: 'Atelier parent-enfant',
    image: 'https://images.unsplash.com/photo-1556911073-38141963c9e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Partagez un moment privilégié avec votre enfant en cuisinant ensemble des recettes amusantes et délicieuses.',
    duration: '2 heures',
    participants: 12,
    price: 70,
    level: 'Tous niveaux',
    date: 'Nous contacter pour les dates'
  }];
  return <section id="courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-blue-800">
          Nos cours de cuisine
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explorez notre sélection de cours et ateliers culinaires animés par
          nos chefs experts. Choisissez celui qui vous inspire et réservez votre
          place dès maintenant.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map(course => <CourseCard key={course.id} {...course} />)}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg inline-flex items-center">
            Voir tous les cours
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>;
}