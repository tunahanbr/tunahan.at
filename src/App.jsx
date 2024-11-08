import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function App() {
  return (
    <motion.div
      className="text-white max-w-2xl mx-auto p-4 md:m-52"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-lg md:text-xl font-bold sm:text-center md:text-left">tunahan karakaya*</h1>
      <div className="font-light text-sm md:text-lg sm:text-center md:text-left">
        <motion.p className="mt-6" variants={itemVariants}>Software engineer based in Wels, AT.</motion.p>
        <motion.p className="mt-3 max-w-lg" variants={itemVariants}>
          Currently studying computer science at JKU Linz, alongside I specialize myself in building web & mobile apps and building automation solutions.
        </motion.p>
        <motion.p className="mt-3 max-w-lg" variants={itemVariants}>
          Previously I worked as a Software Tester in the Cloud Team at Fronius International.
        </motion.p>
        <motion.p className="mt-3 max-w-xs" variants={itemVariants}>
          Take a look at some recent projects and feel free to get in touch.
        </motion.p>
      </div>
      <motion.div
        className="flex gap-6 mt-14 sm:justify-center md:justify-start"
        initial="hidden"
        animate="visible"
        variants={containerVariants} // Apply same stagger effect as the text
      >
        <motion.a href="https://github.com/tunahanbr" aria-label="GitHub" variants={itemVariants}>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/tunahan-karakaya-067b67309/" aria-label="LinkedIn" variants={itemVariants}>
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </motion.a>
        <motion.a href="https://twitter.com/devtunahan" aria-label="Twitter" variants={itemVariants}>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </motion.a>
        <motion.a href="https://instagram.com/tunahan.at" aria-label="Instagram" variants={itemVariants}>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </motion.a>
        <motion.a href="mailto:me@tunahan.at" aria-label="Email" variants={itemVariants}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default App;
