import { motion } from 'framer-motion';
import React from 'react';
import { techStack } from '../components/TechStackIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWordpress} from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TechIcon = ({ icon }) => {
    return (
      <div className="flex flex-col items-center p-5">
        {icon.svg("w-10 h-10 transition-colors duration-300")}
        <span className="mt-2 text-xs text-white">{icon.name}</span>
      </div>
    );
  };
  
  
const ServiceCard = ({ title, description, icon }) => {
  return (
    <motion.div 
      className="bg-[#020D14]/50 p-6 rounded-lg border border-zinc-800 hover:border-zinc-600 transition-colors duration-300"
      variants={itemVariants}
    >
      <div className="text-white mb-4">
        {icon}
      </div>
      <h3 className="text-white text-base font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm">{description}</p>
    </motion.div>
  );
};

function About() {
  const services = [
    {
      title: 'Individuelle Webanwendungen',
      description: 'Moderne, skalierbare und responsive Webanwendungen oder Websites, die mit den neuesten Technologien entwickelt wurden.',
      icon: <FontAwesomeIcon icon={faCode} />
    },
    {
      title: 'WordPress Entwicklung',
      description: 'Ich entwerfe und entwickle WordPress-Websites und pflege sie bei Bedarf',
      icon: <FontAwesomeIcon icon={faWordpress} />
    }
  ];

  return (
    <motion.div
      className="text-white max-w-2xl mx-auto p-4 md:m-52"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col md:mt-[-100px] items-left md:items-start">
        <h1 className="text-lg md:text-xl font-bold sm:text-center md:text-left">Wer bin ich?</h1>
      </div>
      
      <div className="font-light text-sm md:text-lg sm:text-center md:text-left">
        <motion.p className="mt-6" variants={itemVariants}>
          Derzeit studiere ich Informatik an der JKU in Linz und habe eine Leidenschaft für das Designen und Erstellen von Web-Apps. Es bereitet mir Freude, Ideen auf dem Bildschirm zum Leben zu erwecken, und ich erkunde gerne die neuesten Tech-Trends. Automatisierung von Workflows zur Steigerung der Effizienz ist ein weiteres Gebiet, das mich begeistert.
        </motion.p>
        <motion.p className="mt-3" variants={itemVariants}>
          Ich bin auch fasziniert von Psychologie, besonders wenn es um Allgemeinwissen und Selbstverbesserung geht. Dieses Interesse fördert meine Neugier und hilft mir, sowohl persönlich als auch beruflich zu wachsen. Erkunden Sie gerne meine Projekte und kontaktieren Sie mich, wenn Sie sich vernetzen möchten!
        </motion.p>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="mt-12">
          <h3 className="text-base font-semibold mb-6 text-left">Aktueller Tech-Stack:</h3>
          <div className="grid grid-cols-4 gap-6 justify-items-center">
            {techStack.map((tech, index) => (
              <TechIcon key={index} icon={tech} />
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-base font-semibold mb-6 text-left">Meine Dienstleistungen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;