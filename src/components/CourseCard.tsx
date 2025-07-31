import React from 'react';
import { ClockIcon, UsersIcon, EuroIcon } from 'lucide-react';
interface CourseCardProps {
  title: string;
  image: string;
  description: string;
  duration: string;
  participants: number;
  price: number;
  level: string;
  date: string;
}
export function CourseCard({
  title,
  image,
  description,
  duration,
  participants,
  price,
  level,
  date
}: CourseCardProps) {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {level}
          </span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <ClockIcon className="w-4 h-4 mr-1" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <UsersIcon className="w-4 h-4 mr-1" />
          <span>Max {participants} participants</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="font-medium">Date: {date}</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-gray-200">
          <div className="text-xl font-bold text-blue-800 flex items-center">
            <EuroIcon className="w-4 h-4 mr-1" />
            {price}
          </div>
          <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg text-sm">
            Réserver
          </button>
        </div>
      </div>
    </div>;
}