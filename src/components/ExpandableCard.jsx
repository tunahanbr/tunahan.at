import { useState, useEffect, useRef } from 'react';

const ExpandableCard = ({ 
  cards,
  imageHeight = 'h-80',
  thumbnailSize = 'h-40 w-40 md:h-14 md:w-14',
  maxWidth = 'max-w-[500px]',
  ctaButtonColor = 'bg-[#9fba9f]',
  sourceButtonColor = 'bg-white',
  hoverButtonColor = 'hover:bg-[#9fba9f]',
  darkMode = true,
}) => {
  const [active, setActive] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    };

    if (active) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [active]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActive(null);
      setIsClosing(false);
    }, 200);
  };

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );

  const darkModeClasses = {
    background: darkMode ? 'dark:bg-neutral-900' : '',
    text: darkMode ? 'dark:text-neutral-200' : '',
    subtext: darkMode ? 'dark:text-neutral-400' : '',
    hover: darkMode ? 'dark:hover:bg-neutral-800' : '',
  };

  const handleCardClick = (card, isButton) => {
    if (!isButton) {
      setActive(card);
    }
  };

  return (
    <div className="relative animate-fadeIn">
      {/* Overlay */}
      {active && (
        <div 
          className={`fixed inset-0 bg-black/20 h-full w-full z-10 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
        />
      )}

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 grid place-items-center z-[100] px-4">
          <div 
            ref={ref}
            className={`w-full ${maxWidth} h-full md:h-fit md:max-h-[90%] flex flex-col bg-white ${darkModeClasses.background} sm:rounded-3xl overflow-hidden ${isClosing ? 'animate-scaleOut' : 'animate-scaleIn'}`}
          >
            <button
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={handleClose}
            >
              <CloseIcon />
            </button>

            <img
              src={active.src}
              alt={active.title}
              className={`w-full ${imageHeight} sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top`}
            />

            <div className="p-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className={`font-bold text-neutral-700 ${darkModeClasses.text}`}>
                    {active.title}
                  </h3>
                  <p className={`text-neutral-600 ${darkModeClasses.subtext}`}>
                    {active.description}
                  </p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  {active.sourceLink && (
                    <a
                      href={active.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bg-white px-4 py-3 text-sm rounded-full font-bold ${sourceButtonColor} text-black text-center flex-1 sm:flex-initial`}
                    >
                      Source
                    </a>
                  )}
                  <a
                    href={active.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-3 text-sm rounded-full bg-[#9fba9f] font-bold ${ctaButtonColor} text-white text-center flex-1 sm:flex-initial`}
                  >
                    {active.ctaText}
                  </a>
                </div>
              </div>
              <div className="pt-4">
                <div className={`text-neutral-400 ${darkModeClasses.subtext} text-sm md:text-base overflow-auto`}>
                  {active.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Card List */}
      <div className="w-full">
        <ul className="w-full gap-4 flex flex-col">
          {cards.map((card) => (
            <div
              key={card.title}
              onClick={() => handleCardClick(card, false)}
              className={`p-4 flex flex-col sm:flex-row justify-between items-center hover:bg-neutral-50 ${darkModeClasses.hover} rounded-xl cursor-pointer transition-all duration-200 ease-in-out`}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 w-full">
                <img
                  src={card.src}
                  alt={card.title}
                  className={`${thumbnailSize} rounded-lg object-cover object-top`}
                />
                <div className="text-center sm:text-left flex-1">
                  <h3 className={`font-medium text-neutral-800 ${darkModeClasses.text}`}>
                    {card.title}
                  </h3>
                  <p className={`text-neutral-600 ${darkModeClasses.subtext}`}>
                    {card.description}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href={card.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`px-4 py-2 text-sm rounded-full font-bold bg-gray-100 ${hoverButtonColor} hover:text-white text-black transition-colors duration-200`}
                  >
                    {card.ctaText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }

          @keyframes scaleIn {
            from { 
              opacity: 0;
              transform: scale(0.95);
            }
            to { 
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes scaleOut {
            from { 
              opacity: 1;
              transform: scale(1);
            }
            to { 
              opacity: 0;
              transform: scale(0.95);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.2s ease-in-out;
          }

          .animate-fadeOut {
            animation: fadeOut 0.2s ease-in-out;
          }

          .animate-scaleIn {
            animation: scaleIn 0.2s ease-in-out;
          }

          .animate-scaleOut {
            animation: scaleOut 0.2s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default ExpandableCard;