import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import imgUser from '../../assets/1710882431518.jfif';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-center text-white"
    >
      <div className="relative w-full flex flex-col items-center justify-center px-6 md:px-12 py-12 md:py-24">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Seja bem-vindo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-2xl mb-8"
        >
          Sou Mathias Fuhr, desenvolvedor front-end
        </motion.p>
        <Link 
          to="/projects" 
          className="bg-white text-blue-700 py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Veja meus projetos
        </Link>
      </div>

      {/* Seção Sobre Mim */}
      <section className="bg-gray-900 text-gray-300 w-full py-12 px-6 md:py-16 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">
            Sobre Mim
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <img 
              src={imgUser}
              alt="Mathias Fuhr"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-gray-500 mb-6 md:mb-0"
            />
            <div className="md:ml-8 flex flex-col items-center md:items-start">
              <p className="text-base md:text-lg mb-6 text-center md:text-left">
                Sou Mathias Fuhr, um técnico em enfermagem com mais de 7 anos de experiência, agora explorando o emocionante mundo da programação. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na Gran Faculdade e participando do curso Full Stack da B7Web, onde estou aprimorando habilidades em HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Bootstrap e React.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
