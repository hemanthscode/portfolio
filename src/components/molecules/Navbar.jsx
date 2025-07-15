import React, { memo, useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../atoms/Icon';
import { navLinks } from '../../data';
import { containerPadding, typography } from '../../constants/theme';

/**
 * Responsive navigation bar with mobile menu
 * @returns {JSX.Element}
 */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      document.body.classList.toggle('overflow-hidden', !prev);
      return !prev;
    });
  }, []);

  useEffect(() => {
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl`}>
        <nav className={`flex w-full ${containerPadding} max-w-7xl mx-auto py-4 justify-between items-center`}>
          <NavLink
            to="/"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 font-extrabold text-gray-900"
            aria-label="Portfolio Home"
          >
            <Icon name="Origami" size={32} />
            <span>Hemanth</span>
          </NavLink>
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `${typography.body.base} font-bold transition-colors duration-200 ${isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </nav>
      </header>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 backdrop-blur-xl md:hidden transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `font-extrabold text-2xl transition-colors duration-200 ${isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default memo(Navbar);