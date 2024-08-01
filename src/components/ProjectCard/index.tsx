import { useState, useEffect } from 'react';

interface ProjectCardProps {
  imgSrc: string;
  name: string;
  description: string;
  gitLink: string;
  liveLink: string;
}

const ProjectCard = ({ imgSrc, name, description, gitLink, liveLink }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isModalOpen]);

  return (
    <div className="relative">
      {/* Card */}
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition-shadow duration-300">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-48 object-cover cursor-pointer"
          onClick={openModal}
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="mt-2 text-gray-600 truncate">{description}</p>
          <div className="mt-4 flex space-x-4">
            <a href={gitLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Live Project</a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden p-6 max-w-4xl mx-auto z-60"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={imgSrc}
              alt={name}
              className="w-full h-auto max-h-[60vh] object-contain"
            />
            <p className="mt-4 text-gray-600">{description}</p>
            <div className="mt-4 flex justify-between">
              <a
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Live Project
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
