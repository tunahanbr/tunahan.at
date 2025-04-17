import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import i18n from '../i18n/i18n';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  
  const navItems = [
    { path: '/', label: 'nav.home'},
    {path: '/about', label: 'nav.about'},
    { path: '/projects', label: 'nav.projects'}  
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full mt-10 p-4 text-white relative">
      {/* Container for navigation items - responsive alignment */}
      <div className="flex md:justify-center justify-start items-center">
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                relative text-s 
                hover:text-white/90
                transition-colors duration-200
                group flex items-center gap-2
              `}
            >
              {t(item.label)}
              <span className={`
                absolute left-0 -bottom-1 w-full h-0.5 
                bg-[#9fba9f] transform origin-left
                transition-transform duration-300
                group-hover:scale-x-100
                scale-x-0
              `} />
            </NavLink>
          ))}
        </div>
      </div>

      {/* Language toggle button - absolutely positioned */}
      <button
        onClick={toggleLanguage}
        className="absolute right-8 top-1/2 -translate-y-1/2
                   px-3 py-1 rounded-full 
                   text-xl 
                   transition-colors duration-200
                   flex items-center gap-2"
      >
        {i18n.language === 'en' ? '🇩🇪' : '🇬🇧'}
      </button>
    </nav>
  );
};

export default Navbar;