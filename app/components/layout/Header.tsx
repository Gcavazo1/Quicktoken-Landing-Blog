"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
// import Button from '../ui/Button'; // Example import

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'Quicktoken', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background bg-opacity-95 backdrop-blur-sm border-b border-surface">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/quicktoken_logo.png" 
              alt="QuickToken Logo" 
              width={40} 
              height={40}
              className="mr-2"
            />
            <span className="text-xl font-semibold text-textLight font-title">QuickToken</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-textMuted hover:text-primary transition-colors duration-200 font-body"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a 
              href="https://quicktokendashboarddemo.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-opacity-80 text-background font-body px-4 py-2 rounded transition-colors duration-200"
            >
              Try Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-textLight focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-surface">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-textMuted hover:text-primary transition-colors duration-200 font-body py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://quicktokendashboarddemo.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary hover:bg-opacity-80 text-background font-body px-4 py-2 rounded transition-colors duration-200 inline-block w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Try Demo
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;