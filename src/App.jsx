import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Verzögerung zwischen jeder Kindanimation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function App() {
  return <>
    <motion.div
      className="text-white max-w-2xl mx-auto p-4 md:m-52"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col items-left md:items-start">
      <img className="relative size-7 md:size-10 mb-[-16px] md:mb-[-18px] ml-28" src="./src/assets/cat.gif" />
      <h1 className="text-lg md:text-xl font-bold sm:text-center md:text-left">tunahan karakaya*</h1>
      </div>
      <div className="font-light text-sm md:text-lg sm:text-center md:text-left">
        <motion.p className="mt-6" variants={itemVariants}>Software Developer aus Wels, AT</motion.p>
        <motion.p className="mt-3 max-w-lg" variants={itemVariants}>
        Ich studiere Informatik an der <a href="https://www.jku.at/" className='underline'>JKU Linz</a> und fokussiere mich auf Web- und Mobile-App-Entwicklung sowie Automatisierung.
                </motion.p>
        <motion.p className="mt-3 max-w-lg" variants={itemVariants}>
          Zuvor war ich als Softwaretester im Cloud-Team bei <a href="https://www.fronius.com/de" className='underline'>Fronius International</a> tätig.
        </motion.p>
        <motion.p className="mt-3 max-w-lg" variants={itemVariants}>
          Schauen Sie sich einige aktuelle <a href="https://github.com/tunahanbr" className='underline'>Projekte</a> an und nehmen Sie gerne Kontakt auf.
        </motion.p>
      </div>
      <motion.div
        className="flex gap-6 mt-10 sm:justify-center md:justify-start"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.a href="https://github.com/tunahanbr" aria-label="GitHub" variants={itemVariants}>
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/tunahan-karakaya-067b67309/" aria-label="LinkedIn" variants={itemVariants}>
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </motion.a>
        <motion.a href="mailto:me@tunahan.at" aria-label="Email" variants={itemVariants}>
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </motion.a>
      </motion.div>
    </motion.div>
  </>
}

export default App;
