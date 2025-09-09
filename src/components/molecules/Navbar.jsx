import React, { memo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Icon from "../atoms/Icon";
import { navLinks } from "../../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [location.pathname]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : 'unset';
  };

  return (
    <>
      {/* Mobile Menu Overlay - moved above header to fix layering */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-screen h-screen bg-gray-950/98 backdrop-blur-xl z-[9998] lg:hidden"
          >
            {/* Mobile menu content positioned below the header */}
            <div className="flex flex-col h-full justify-center text-center px-8 pt-20">
              <nav className="space-y-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block text-3xl font-bold transition-colors duration-300 ${
                          isActive 
                            ? 'text-blue-400' 
                            : 'text-gray-300 hover:text-white'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="pt-8"
                >
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-lg rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-200"
                  >
                    Download Resume
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header with highest z-index to stay above mobile menu */}
      <header 
        className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 ease-out z-[9999] ${
          scrolled 
            ? 'bg-gray-950/95 backdrop-blur-xl border-b border-gray-800/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            {/* Logo - Always visible and clickable */}
            <button
              onClick={handleLogoClick}
              className="flex items-center space-x-3 text-gray-100 hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1 relative z-[10001]"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={16} className="text-white" />
              </div>
              <span className="text-lg font-bold hidden sm:block">Hemanth</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-blue-400' 
                        : 'text-gray-300 hover:text-gray-100'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-200"
              >
                Resume
              </a>
            </div>

            {/* Mobile menu button - Always visible and clickable */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg relative z-[10001]"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Icon name={isOpen ? "X" : "Menu"} size={24} />
              </motion.div>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default memo(Navbar);