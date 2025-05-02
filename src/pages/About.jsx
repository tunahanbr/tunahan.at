import { motion } from 'framer-motion';
import React from 'react';
import { techStack } from '../components/TechStackIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWordpress} from '@fortawesome/free-brands-svg-icons'
import { faCode,faRobot,faChartSimple } from '@fortawesome/free-solid-svg-icons';


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
      description: 'Moderne, skalierbare und responsive Web-Apps, maßgeschneidert auf branchenspezifische Anforderungen – entwickelt mit Fokus auf Nutzerfreundlichkeit und Effizienz.',
      icon: <FontAwesomeIcon icon={faCode} />
    },
    {
      title: 'Workflow-Automatisierung',
      description: 'Ich entwickle smarte Automatisierungslösungen, die manuelle Prozesse digitalisieren und so Zeit und Ressourcen sparen.',
      icon: <FontAwesomeIcon icon={faRobot} />
    },
    {
      title: 'Digitalisierung & Beratung',
      description: 'Ich unterstütze Unternehmen bei der digitalen Transformation – mit einem tiefen Verständnis für wirtschaftliche Prozesse und technologische Möglichkeiten.',
      icon: <FontAwesomeIcon icon={faChartSimple} />
    },
    {
      title: 'WordPress Entwicklung',
      description: 'Kreative und wartbare WordPress-Websites – ideal für Content-getriebene Projekte oder kleinere Unternehmen.',
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
        <h1 className="text-lg md:text-xl font-bold sm:text-center md:text-left">wer bin ich?*</h1>
      </div>
      
      <div className="font-light text-sm md:text-lg sm:text-center md:text-left">
        <motion.p className="mt-6" variants={itemVariants}>
        Derzeit studiere ich Wirtschaftsinformatik an der JKU Linz und habe eine Leidenschaft für das Design und die Entwicklung von Web-Apps. Es bereitet mir große Freude, kreative Ideen auf dem Bildschirm zum Leben zu erwecken und neue Technologien zu erkunden. Besonders interessiert mich die Entwicklung branchenspezifischer Software- und Automatisierungslösungen, die manuelle Arbeit erleichtern und Prozesse effizienter gestalten. Mein Ziel ist es, Unternehmen bei der Digitalisierung zu unterstützen und als Brücke zwischen Wirtschaft und Technik maßgeschneiderte Lösungen zu schaffen.        </motion.p>
        <motion.p className="mt-3" variants={itemVariants}>
        Neben Technik interessiere ich mich auch sehr für Psychologie – besonders in den Bereichen Selbstreflexion, persönliche Weiterentwicklung und wie wir als Menschen ticken. Auch der Islam spielt eine wichtige Rolle in meinem Leben und inspiriert mich, bewusst, verantwortungsvoll und mit Sinn durchs Leben zu gehen. Diese Interessen helfen mir, über den Tellerrand hinauszublicken und mich nicht nur fachlich, sondern auch persönlich weiterzuentwickeln. Wenn du neugierig bist oder dich austauschen möchtest – schau dir gern meine Projekte an und melde dich einfach!        
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