import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import i18n from '../i18n/i18n';
import { useTranslation } from 'react-i18next';


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

function Hero() {
    // i18n und useTranslation entfernt
  return (
    <>
    <motion.div
      className="text-white max-w-2xl mx-auto p-4 md:m-52"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col  md:mt-[-100px] items-left md:items-start">
      <h1 className="text-lg md:text-xl font-bold sm:text-center md:text-left">tunahan karakaya*</h1>
      </div>
      <div className="font-light text-sm md:text-lg sm:text-center md:text-left">
        <motion.p className="mt-6" variants={itemVariants}>
          Software Developer aus Wels, AT
        </motion.p>
        <motion.p className="mt-3 max-w-lg" variants={itemVariants}>
          Ich studiere Informatik an der JKU Linz und fokussiere mich auf Web- und Mobile-App-Entwicklung sowie Automatisierungslösungen.
        </motion.p>
        <motion.p className="mt-3 max-w-lg" variants={itemVariants}>
          Zuvor war ich als Softwaretester im Cloud-Team bei Fronius International tätig.
        </motion.p>
        <motion.p className="mt-3 max-w-lg" variants={itemVariants}>
          Schauen Sie sich einige aktuelle Projekte an und nehmen Sie gerne Kontakt auf.
        </motion.p>
      </div>
      <motion.div
        className="flex gap-6 mt-10 sm:justify-center md:justify-start"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.a 
          href="https://github.com/tunahanbr" 
          aria-label="GitHub" 
          variants={itemVariants}
          whileHover={{ scale: 1.15, boxShadow: "0px 4px 16px rgba(0,0,0,0.15)" }}
        >
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </motion.a>
        <motion.a 
          href="https://x.com/tunahanbrr" 
          aria-label="Twitter" 
          variants={itemVariants}
          whileHover={{ scale: 1.15, boxShadow: "0px 4px 16px rgba(0,0,0,0.15)" }}
        >
          <FontAwesomeIcon icon={faXTwitter} size="xl" />
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/tunahan-karakaya-067b67309/" 
          aria-label="LinkedIn" 
          variants={itemVariants}
          whileHover={{ scale: 1.15, boxShadow: "0px 4px 16px rgba(0,0,0,0.15)" }}
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </motion.a>
        <motion.a 
          href="mailto:me@tunahan.at" 
          aria-label="Email" 
          variants={itemVariants}
          whileHover={{ scale: 1.15, boxShadow: "0px 4px 16px rgba(0,0,0,0.15)" }}
        >
          <FontAwesomeIcon icon={faEnvelope} size="xl" />
        </motion.a>
      </motion.div>
    </motion.div>
    </>
  )
}

export default Hero