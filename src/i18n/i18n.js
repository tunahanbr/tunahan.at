// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'home',
        projects: 'projects',
        about: 'about'
      },
      home: {
        description: 'Software Developer based in Wels, AT',
        carrer: 'I am studying computer science at JKU Linz, focusing on web and mobile app development as well as automation solutions.',
        past: 'Previously, I worked as a software tester in the cloud team at Fronius International.',
        cta: 'Take a look at some recent projects and feel free to get in touch.'
      },
      projects: {
        description: 'Here are some of the projects I have worked on',
        portfolio: {
          title: 'Portfolio Website',
          description: 'Personal portfolio built with React and Tailwind CSS',
          content: ''
        },
        timeloom: {
          title: 'timeloom',
          description: 'Time Tracking Application for freelancers',
          content: 'Hosting of this application is on my Raspberry Pi locally, but is using cloudflare tunnel for it to be accessable in public. Build with React and Tailwind CSS in the frontend, Supabase as the backend service'
        },
        feedback: {
          title: 'feedback',
          description: 'Component to embed on your website for giving feedback, backend with PocketBase',
          content: ''
        },
        googleMapsScraper: {
          title: 'Google Maps Scraper',
          description: 'Google Maps Scraper to scrape business information, for self-use!',
          content: 'still in development'
        },
        ipInsight: {
          title: 'IP Insight',
          description: 'With this API, you can display IP data',
          content: 'Easy to use and deploy yourself IP insight backend API for self use. Build with expressJS'
        }
      },
      about: {
        title: 'Who am I?',
        intro1: 'Currently enrolled as a Computer Science student at JKU in Linz, I have a passion for designing and building web apps. I find joy in bringing ideas to life on the screen and love exploring the latest tech trends. Automating workflows to enhance efficiency is another area I enjoy diving into.',
        intro2: "I'm also fascinated by psychology, especially when it comes to general knowledge and self-improvement. This interest fuels my curiosity and helps me grow both personally and professionally. Feel free to explore my projects and reach out if you'd like to connect!",
        techStackTitle: 'current tech stack:',
        servicesTitle: 'my services',
        service1Title: 'Custom Web Applications',
        service1Description: 'Modern, scalable, and responsive web applications or websites built with the latest technologies.',
        service2Title: 'WordPress Development',
        service2Description: 'I am designing and developing Wordpress Websites as well as maintaining them, if necessary'
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: 'home',
        projects: 'projekte',
        about: 'über mich'
      },
      home: {
        description: 'Software Developer aus Wels, AT',
        carrer: 'Ich studiere Informatik an der JKU Linz und fokussiere mich auf Web- und Mobile-App-Entwicklung sowie Automatisierungslösungen.',
        past: 'Zuvor war ich als Softwaretester im Cloud-Team bei Fronius International tätig.',
        cta: 'Schauen Sie sich einige aktuelle Projekte an und nehmen Sie gerne Kontakt auf.'
      },
      projects: {
        description: 'Hier sind einige der Projekte, an denen ich gearbeitet habe',
        portfolio: {
          title: 'Portfolio-Website',
          description: 'Persönliches Portfolio erstellt mit React und Tailwind CSS',
          content: ''
        },
        timeloom: {
          title: 'timeloom',
          description: 'Zeiterfassungsanwendung für Freelancer',
          content: 'Hosting dieser Anwendung ist lokal auf meinem Raspberry Pi, verwendet Cloudflare Tunnel für die Erreichbarkeit im Web. Für das Frontend wurden React und Tailwind CSS verwendet, Supabase als Backend-Dienst.'
        },
        feedback: {
          title: 'feedback',
          description: 'Komponente zum Einbetten auf Ihrer Website zum Geben von Feedback, Backend mit PocketBase',
          content: ''
        },
        googleMapsScraper: {
          title: 'Google Maps Scraper',
          description: 'Google Maps Scraper, um Geschäftsinformationen zu extrahieren, für den Eigenbedarf!',
          content: 'Noch in Entwicklung'
        },
        ipInsight: {
          title: 'IP Insight',
          description: 'Mit dieser API können Sie IP-Daten anzeigen',
          content: 'Einfach zu verwenden und selbst zu hosten. Eine API für die Bereitstellung von IP Daten für den Eigengebrauch. Erstellt mit expressJS.'
        }
      },
      about: {
        title: 'Wer bin ich?',
        intro1: 'Derzeit studiere ich Informatik an der JKU in Linz und habe eine Leidenschaft für das Designen und Erstellen von Web-Apps. Es bereitet mir Freude, Ideen auf dem Bildschirm zum Leben zu erwecken, und ich erkunde gerne die neuesten Tech-Trends. Automatisierung von Workflows zur Steigerung der Effizienz ist ein weiteres Gebiet, das mich begeistert.',
        intro2: 'Ich bin auch fasziniert von Psychologie, besonders wenn es um Allgemeinwissen und Selbstverbesserung geht. Dieses Interesse fördert meine Neugier und hilft mir, sowohl persönlich als auch beruflich zu wachsen. Erkunden Sie gerne meine Projekte und kontaktieren Sie mich, wenn Sie sich vernetzen möchten!',
        techStackTitle: 'Aktueller Tech-Stack:',
        servicesTitle: 'Meine Dienstleistungen',
        service1Title: 'Individuelle Webanwendungen',
        service1Description: 'Moderne, skalierbare und responsive Webanwendungen oder Websites, die mit den neuesten Technologien entwickelt wurden.',
        service2Title: 'WordPress Entwicklung',
        service2Description: 'Ich entwerfe und entwickle WordPress-Websites und pflege sie bei Bedarf'
      }
    }
  }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;