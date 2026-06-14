'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaHouse as Home,
  FaUser as User,
  FaCode as Code,
  FaBriefcase as Briefcase,
  FaFolderOpen as FolderOpen,
  FaEnvelope as Mail,
  FaRegHand as Hand
} from 'react-icons/fa6';
import { 
  PiSunLight as Sun, 
  PiMoonThin as Moon
} from "react-icons/pi";
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, isToggling } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Skills', href: '/skills', icon: Code },
    { name: 'Experience', href: '/experience', icon: Briefcase },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'navbar-glass-scrolled' 
          : 'navbar-glass'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center space-x-2 sm:space-x-3 text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Hand className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-wave" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
                </div>
                <span className="hidden sm:block">Shashank</span>
                <span className="block sm:hidden text-base">Shashank</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group relative flex items-center space-x-2 px-4 xl:px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      active
                        ? 'bg-primary-500/5 dark:bg-primary-900/10' 
                        : 'hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:backdrop-blur-sm'
                    }`}
                  >
                    <Icon 
                      size={16} 
                      className={`transition-all duration-300 ${
                        active 
                          ? 'text-primary-600 dark:text-primary-400 active-icon' 
                          : 'text-gray-500 dark:text-gray-400 group-hover:text-primary-500 dark:group-hover:text-primary-400'
                      }`} 
                    />
                    
                    {/* Gradient Text for Active State (with Sharpness Helper) */}
                    <span className={`hidden xl:block transition-all duration-300 ${
                      active
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-400 font-extrabold text-sharp'
                        : 'text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium'
                    }`}>
                      {item.name}
                    </span>

                    {/* Animated Underline Indicator */}
                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all duration-300 ease-out bg-gradient-to-r from-blue-600 to-sky-400 ${
                      active 
                        ? 'w-1/2 opacity-100' 
                        : 'w-0 opacity-0 group-hover:w-1/4 group-hover:opacity-40'
                    }`}></span>
                  </Link>
                );
              })}
              
              {/* Theme Switcher */}
              <div className="ml-6">
                <button
                  onClick={toggleTheme}
                  className="group p-3 rounded-xl bg-gradient-to-r from-gray-100/80 to-gray-200/80 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:from-cyan-100/80 hover:to-blue-100/80 dark:hover:from-cyan-900/30 dark:hover:to-blue-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 hover:scale-110 hover:shadow-neon border border-gray-200/50 dark:border-gray-700/50"
                  title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                  <div className={`transition-transform duration-700 ${isToggling ? 'rotate-180' : ''}`}>
                    {theme === 'light' ? (
                      <Sun size={18} />
                    ) : (
                      <Moon size={18} />
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* Mobile/Tablet Navigation Controls */}
            <div className="flex lg:hidden items-center space-x-4">
              {/* Theme Switcher Mobile */}
              <div>
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-gray-100/80 to-gray-200/80 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300"
                  title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                  <div className={`transition-transform duration-700 ${isToggling ? 'rotate-180' : ''}`}>
                    {theme === 'light' ? (
                      <Sun size={18} />
                    ) : (
                      <Moon size={18} />
                    )}
                  </div>
                </button>
              </div>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-gray-100/80 to-gray-200/80 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:from-cyan-100/80 hover:to-blue-100/80 dark:hover:from-cyan-900/30 dark:hover:to-blue-900/30 transition-all duration-200 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105"
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                  <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fluid Mobile/Tablet Navigation Menu */}
      <div className={`lg:hidden mobile-menu-wrapper ${isOpen ? 'is-open' : ''}`}>
        {/* The blurry backdrop that slides down */}
        <div className="mobile-menu-backdrop"></div>
        
        {/* The links that fade in */}
        <div className="mobile-menu-content">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`relative flex items-center justify-center space-x-4 px-6 py-4 rounded-xl text-lg transition-all duration-300 overflow-hidden ${
                  active
                    ? 'glass-card-strong border-primary-500/30 scale-[1.02] shadow-neon'
                    : 'glass-card hover:bg-white/10 dark:hover:bg-white/5 font-medium'
                }`}
              >
                {/* Pulsing Background Glow for Active Mobile Item */}
                {active && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-sky-500/10 animate-pulse"></div>
                )}

                <Icon 
                  size={22} 
                  className={`relative z-10 transition-all duration-300 ${
                    active ? 'text-primary-500 dark:text-primary-400 active-icon' : 'text-gray-500 dark:text-gray-400'
                  }`} 
                />
                
                {/* Sharp Font Trigger for Active Text */}
                <span className={`relative z-10 transition-all duration-300 ${
                  active
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-400 font-extrabold text-sharp'
                    : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;