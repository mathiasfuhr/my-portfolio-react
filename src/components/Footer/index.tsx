import { FaGithub, FaLinkedin, FaFilePdf, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center space-x-6 mb-6"
        >
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-gray-400"
          >
            <FaGithub size={36} />
          </a>
          <a
            href="https://www.linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 text-blue-600 hover:text-blue-300"
          >
            <FaLinkedin size={36} />
          </a>
          <a
            href="/path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 hover:text-gray-400"
          >
            <FaFilePdf size={36} />
          </a>
          <a
            href="https://wa.me/55997282539"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110 text-green-600 hover:text-green-300"
          >
            <FaWhatsapp size={36} />
          </a>
        </motion.div>
        <p className="text-gray-300">
          &copy; 2024 Mathias Fuhr. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
