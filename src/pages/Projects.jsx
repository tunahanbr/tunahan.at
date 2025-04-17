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
  const { t, i18n } = useTranslation();

  const projectCards = [
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      src: "portfolio.png",
      ctaText: "Demo",
      ctaLink: "https://tunahan.at",
      sourceLink: "https://github.com/devtunahan/tunahan.at",
      content: t('projects.portfolio.content')
    },
    {
      title: t('projects.timeloom.title'),
      description: t('projects.timeloom.description'),
      src: "timeloom-white.svg",
      ctaText: "Demo",
      ctaLink: "https://timeloom.co",
      sourceLink: "https://github.com/devtunahan/timeloom",
      content: t('projects.timeloom.content')
    },
    {
      title: t('projects.feedback.title'),
      description: t('projects.feedback.description'),
      src: "feedback.jpeg",
      ctaText: "Demo",
      ctaLink: "https://github.com/tunahanbr/feedback.git",
      sourceLink: "https://github.com/devtunahan/feedback",
      content: t('projects.feedback.content')
    },
    {
      title: t('projects.googleMapsScraper.title'),
      description: t('projects.googleMapsScraper.description'),
      src: "google-maps-scraper.png",
      ctaText: "Demo",
      ctaLink: "https://github.com/tunahanbr/google-maps-scraper",
      sourceLink: "https://github.com/tunahanbr/google-maps-scraper",
      content: t('projects.googleMapsScraper.content')
    },
    {
      title: t('projects.ipInsight.title'),
      description: t('projects.ipInsight.description'),
      src: "ip-insight.jpg",
      ctaText: "Demo",
      ctaLink: "https://ip-insight-api-e3aa1f4a8919.herokuapp.com/",
      sourceLink: "https://github.com/tunahanbr/ip-insight-api",
      content: t('projects.ipInsight.content')
    }
  ];

  return (
   <>
   <div className="max-w-2xl  p-4 md:m-52">
      <h1 className="text-lg mb-2 md:mt-[-100px] text-white md:text-xl font-bold sm:text-center md:text-left">projects*</h1>
      <p className='text-white mb-6'>{t('projects.description')}</p>
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