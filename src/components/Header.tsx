
import React, { useState } from 'react';
import type { Page } from '../types';
import { BookOpenIcon } from './icons/BookOpenIcon';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  activePage: Page;
  setActivePage: (page: Page) => void;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ page, activePage, setActivePage, children, onClick }) => {
  const isActive = activePage === page;
  const classes = `px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
    isActive
      ? 'bg-brand-orange text-white shadow-md'
      : 'text-gray-700 hover:bg-brand-yellow hover:text-brand-blue'
  }`;

  return (
    <a
      href="#"
      className={classes}
      onClick={(e) => {
        e.preventDefault();
        setActivePage(page);
        if (onClick) onClick();
      }}
    >
      {children}
    </a>
  );
};

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems: Page[] = ['Inicio', 'Nosotros', 'Servicios', 'Inscripciones'];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setActivePage('Inicio')}
          >
            <BookOpenIcon className="h-8 w-8 text-brand-blue" />
            <span className="ml-3 text-2xl font-bold text-brand-blue tracking-tight">
              Estrella Rodriguez
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink key={item} page={item} activePage={activePage} setActivePage={setActivePage}>
                {item}
              </NavLink>
            ))}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('Login');
              }}
              className="ml-4 px-5 py-2.5 bg-brand-blue text-white rounded-full text-sm font-semibold shadow-lg hover:bg-opacity-90 transition-transform transform hover:scale-105"
            >
              Login
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-brand-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-inset transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white shadow-lg border-t border-gray-200">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActivePage(item);
                  setIsMenuOpen(false);
                }}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activePage === item
                    ? 'bg-brand-orange text-white'
                    : 'text-gray-700 hover:bg-brand-yellow hover:text-brand-blue'
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('Login');
                setIsMenuOpen(false);
              }}
              className="block w-full mt-2 px-4 py-2 bg-brand-blue text-white rounded-md text-sm font-semibold text-center hover:bg-opacity-90 transition-colors"
            >
              Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;