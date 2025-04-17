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
  const { t } = useTranslation();
  const services = [
    {
      title: t('about.service1Title'),
      description: t('about.service1Description'),
      icon: <FontAwesomeIcon icon={faCode} />
    },
    {
      title: t('about.service2Title'),
      description: t('about.service2Description'),
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
        <h1 className="text-lg md:text-xl font-bold sm:text-center md:text-left">{t('about.title')}</h1>
      </div>
      
      <div className="font-light text-sm md:text-lg sm:text-center md:text-left">
        <motion.p className="mt-6" variants={itemVariants}>
          {t('about.intro1')}
        </motion.p>
        <motion.p className="mt-3" variants={itemVariants}>
          {t('about.intro2')}
        </motion.p>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="mt-12">
          <h3 className="text-base font-semibold mb-6 text-left">{t('about.techStackTitle')}</h3>
          <div className="grid grid-cols-4 gap-6 justify-items-center">
            {techStack.map((tech, index) => (
              <TechIcon key={index} icon={tech} />
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-base font-semibold mb-6 text-left">{t('about.servicesTitle')}</h3>
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