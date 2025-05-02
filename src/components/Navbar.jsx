import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  const navItems = [
    { path: '/', label: 'home'},
    { path: '/about', label: 'über mich'},
    { path: '/projects', label: 'projekte'}  
  ];

  return (
    <nav className="w-full mt-10 p-4 text-white relative">
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
              {item.label}
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
      {/* Remove language toggle button */}
    </nav>
  );
};

export default Navbar;