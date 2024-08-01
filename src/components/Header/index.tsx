import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold">
          Mathias Fuhr
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FaTimes size={24} color='#4FC3F7' />
            ) : (
              <FaBars size={24} color='#4FC3F7' />
            )}
          </button>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-300 transition-colors duration-300">
            Home
          </Link>
          <Link to="/projects" className="hover:text-blue-300 transition-colors duration-300">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-blue-300 transition-colors duration-300">
            Contact
          </Link>
        </nav>
      </div>

      {/* Menu dropdown */}
      <div
        className={`fixed top-0 right-0 w-64 bg-gray-800 text-white h-full transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-20`}
        style={{ transition: 'transform 0.3s ease-in-out' }}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-2xl">
            <FaTimes color='#4FC3F7' />
          </button>
        </div>
        <nav className="flex flex-col items-center mt-16 space-y-4">
          <Link to="/" onClick={toggleMenu} className="hover:text-blue-300 text-xl transition-colors duration-300">
            Home
          </Link>
          <Link to="/projects" onClick={toggleMenu} className="hover:text-blue-300 text-xl transition-colors duration-300">
            Projects
          </Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-blue-300 text-xl transition-colors duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
