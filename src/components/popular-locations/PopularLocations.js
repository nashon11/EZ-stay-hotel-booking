import React from 'react';
import 'aos/dist/aos.css';

const PopularLocations = () => {
  const locations = [
    'Paris', 'Tokyo', 'New York', 'Rome', 'Dubai', 'Sydney',
    'Barcelona', 'Amsterdam', 'Maui', 'London'
  ];

  return (
    <section className="popular-locations bg-gradient-to-r from-purple-700 to-blue-800 p-8">
      <h2 className="text-4xl text-white text-center mb-6" data-aos="fade-up">
        Popular Destinations
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {locations.map((location, index) => (
          <div
            key={index}
            className="location-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            data-aos="zoom-in-up"
          >
            <img
              src={`https://source.unsplash.com/400x300/?${location}`}
              alt={location}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{location}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularLocations;
