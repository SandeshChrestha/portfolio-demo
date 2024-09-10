import React from 'react';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="font-bold text-2xl mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={link} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">View More</a>
      </div>
    </div>
  );
};

export default ProjectCard;
