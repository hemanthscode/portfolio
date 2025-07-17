import React, { memo, useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "../atoms/Icon";
import { navLinks } from "../../data";
import { theme } from "../../constants/theme";

/**
 * Responsive navigation bar with mobile menu.
 * @returns {JSX.Element}
 * @example
 * <Navbar />
 */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const newState = !prev;
      document.body.classList.toggle("overflow-hidden", newState);
      return newState;
    });
  }, []);

  useEffect(() => {
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 ${theme.colors.background}/80 ${theme.colors.backdropBlur} ${theme.colors.border} border-b`}
        aria-label="Main navigation"
        role="banner"
      >
        <nav
          className={`max-w-7xl mx-auto ${theme.spacing.container} ${theme.spacing.navPadding} flex justify-between items-center`}
        >
          <NavLink
            to="/"
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`flex items-center ${theme.spacing.gap.sm} ${theme.typography.heading.h3} ${theme.colors.text.primary}`}
            aria-label="Portfolio Home"
          >
            <Icon name="Origami" size={32} />
            <span>Hemanth</span>
          </NavLink>
          <ul className={`hidden md:flex items-center ${theme.spacing.gap.md}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  end
                  className={({ isActive }) =>
                    `${theme.typography.body.base} font-bold ${
                      theme.transition.default
                    } ${
                      isActive
                        ? theme.colors.text.primary
                        : `${theme.colors.text.secondary} hover:${theme.colors.text.primary}`
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            className={`md:hidden p-2 ${theme.borderRadius.default} ${theme.transition.default} hover:bg-gray-100`}
            onClick={toggleMenu}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={28} />
          </button>
        </nav>
      </header>
      {menuOpen && (
        <nav
          id="mobile-menu"
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center ${theme.spacing.gap.lg} ${theme.colors.background}/80 ${theme.colors.backdropBlur} md:hidden ${theme.transition.default}`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end
              onClick={toggleMenu}
              className={({ isActive }) =>
                `${theme.typography.heading.h3} ${theme.transition.default} ${
                  isActive
                    ? theme.colors.text.primary
                    : `${theme.colors.text.secondary} hover:${theme.colors.text.primary}`
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </>
  );
};

export default memo(Navbar);
