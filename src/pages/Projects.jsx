import React from 'react'
import ExpandableCard from '../components/ExpandableCard';
import { motion } from 'framer-motion';
import i18n from '../i18n/i18n';
import { useTranslation } from 'react-i18next';
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Verzögerung zwischen jeder Kindanimation
      },
    },
  };

function Projects() {
  const projectCards = [
    {
      title: 'Portfolio-Website',
      description: 'Persönliches Portfolio erstellt mit React und Tailwind CSS',
      src: "portfolio.png",
      ctaText: "Demo",
      ctaLink: "https://tunahan.at",
      sourceLink: "https://github.com/devtunahan/tunahan.at",
      content: ''
    },
    {
      title: 'timeloom',
      description: 'Zeiterfassungsanwendung für Freelancer',
      src: "timeloom-white.svg",
      ctaText: "Demo",
      ctaLink: "https://timeloom.co",
      sourceLink: "https://github.com/devtunahan/timeloom",
      content: 'Hosting dieser Anwendung ist lokal auf meinem Raspberry Pi, verwendet Cloudflare Tunnel für die Erreichbarkeit im Web. Für das Frontend wurden React und Tailwind CSS verwendet, Supabase als Backend-Dienst.'
    },
    {
      title: 'feedback',
      description: 'Komponente zum Einbetten auf Ihrer Website zum Geben von Feedback, Backend mit PocketBase',
      src: "feedback.jpeg",
      ctaText: "Demo",
      ctaLink: "https://github.com/tunahanbr/feedback.git",
      sourceLink: "https://github.com/devtunahan/feedback",
      content: ''
    },
    {
      title: 'Google Maps Scraper',
      description: 'Google Maps Scraper, um Geschäftsinformationen zu extrahieren, für den Eigenbedarf!',
      src: "google-maps-scraper.png",
      ctaText: "Demo",
      ctaLink: "https://github.com/tunahanbr/google-maps-scraper",
      sourceLink: "https://github.com/tunahanbr/google-maps-scraper",
      content: 'Noch in Entwicklung'
    },
    {
      title: 'IP Insight',
      description: 'Mit dieser API können Sie IP-Daten anzeigen',
      src: "ip-insight.jpg",
      ctaText: "Demo",
      ctaLink: "https://ip-insight-api-e3aa1f4a8919.herokuapp.com/",
      sourceLink: "https://github.com/tunahanbr/ip-insight-api",
      content: 'Einfach zu verwenden und selbst zu hosten. Eine API für die Bereitstellung von IP Daten für den Eigengebrauch. Erstellt mit expressJS.'
    }
  ];

  return (
   <>
   <div className="max-w-2xl  p-4 md:m-52">
      <h1 className="text-lg mb-2 md:mt-[-100px] text-white md:text-xl font-bold sm:text-center md:text-left">projekte*</h1>
      <p className='text-white mb-6'>Hier sind einige der Projekte, an denen ich gearbeitet habe</p>
      <ExpandableCard 
        cards={projectCards} 
        ctaButtonColor="bg-[#9fba9f]"
        sourceButtonColor="bg-white"
        imageHeight="h-72"
        maxWidth="max-w-[700px]"
      />
    </div>
   </>
  )
}

export default Projects