import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50 w-full bg-customBackground bg-opacity-70 blurred-background">
        <div className="flex justify-between items-center p-5 w-full max-w-6xl mx-auto">
          <a href="#home" className="text-2xl font-bold">
            Joshua Foti
          </a>
          <div className="md:hidden">
            <button onClick={toggleMenu} ref={buttonRef} className="text-xl focus:outline-none">
              <FontAwesomeIcon
                icon={isOpen ? faTimes : faBars}
                className={`icon-transition ${isOpen ? 'icon-rotate' : ''}`}
              />
            </button>
          </div>
          <div className="hidden md:flex flex-row gap-5 md:items-center">
            <a href="#projects" className="hover:text-customHover text-xl">
              Projects
            </a>
            <a href="#about" className="hover:text-customHover text-xl">
              About
            </a>
            <a href="#contact" className="hover:text-customHover text-xl">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div
        ref={menuRef}
        className={`fixed top-16 left-0 right-0 bg-customBackground blurred-background bg-opacity-70 p-5 shadow-lg z-50 flex flex-col gap-5 items-center transition-all duration-300 ${
          isOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <a href="#projects" className="hover:text-customHover text-xl" onClick={toggleMenu}>
          Projects
        </a>
        <a href="#about" className="hover:text-customHover text-xl" onClick={toggleMenu}>
          About
        </a>
        <a href="#contact" className="hover:text-customHover text-xl" onClick={toggleMenu}>
          Contact
        </a>
        <a
          href="public/JoshuaFotiResume.pdf"
          className="hover:text-customHover text-xl"
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
        >
          Resume
        </a>
      </div>
    </>
  );
};

export default Navbar;
