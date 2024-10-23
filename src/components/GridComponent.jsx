import React from 'react';
import album1 from '../assets/albums-search/SC.jpg'
import album2 from '../assets/albums-search/A2.jpg'
import album3 from '../assets/albums-search/A3.jpg'
import album4 from '../assets/albums-search/A4.jpg'
import album5 from '../assets/albums-search/A5.jpg'
import album6 from '../assets/albums-search/A6.jpg'
import album7 from '../assets/albums-search/A7.jpg'
import album8 from '../assets/albums-search/A8.jpg'
import album9 from '../assets/albums-search/A9.jpg'
import album10 from '../assets/albums-search/A10.jpg'
import album11 from '../assets/albums-search/A11.jpg'
import album12 from '../assets/albums-search/A12.jpg'
import album13 from '../assets/albums-search/A13.jpg'
import album14 from '../assets/albums-search/A14.jpg'

const GridComponent = () => {
  const items = [
    "Music",
    "Podcasts",
    "Live Events",
    "Made for you",
    "Releases",
    "Summer",
    "Pop",
    "Latin",
    "Education",
    "Documentary",
    "Discover",
    "Brazilian Music",
    "Rock", 
    "Indie",  
    //
    "Releases",
    "Live Events",
    "Made for you",
    "Summer",
    "Pop",
    "Indie",  
    "Latin",
    "Education",
    "Rock", 
    "Documentary",
    "Brazilian Music",
    "Discover",
    "Made for you",
    "Live Events",
    "Summer",
    "Pop",
    "Releases",
  ];

  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-teal-500',
    'bg-indigo-500',
    'bg-orange-500',
    'bg-gray-500',
    'bg-lime-500',
    'bg-rose-500',
  ];

  const images = [
    album1,
    album2,
    album3,
    album4,
    album5,
    album6,
    album7,
    album8,
    album9,
    album10,
    album11,
    album12,
    album13,
    album14,
    

  ];

  return (
    <div className="grid grid-cols-1 relative z-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-20 py-2 gap-4 w-[97%] mx-auto">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`${colors[index % colors.length]} text-white h-36 w-full cursor-pointer p-4 rounded-lg flex items-start justify-start font-semibold text-2xl relative overflow-hidden`}
        >
          <span>{item}</span>
          <img 
            src={images[index % images.length]} 
            alt={item} 
            className="absolute -bottom-3 shadow-2xl -right-6 h-28 w-28 rounded-lg object-cover rotate-[30deg]"
          />
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
