"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  
  // Footer link groups
  const linkGroups = [
    {
      title: "Platform",
      links: [
        { name: "Features", href: "#features" },
        { name: "Demo", href: "#demo" },
        { name: "Showcase", href: "#showcase" },
        { name: "Pricing", href: "#pricing" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "GitHub", href: "https://github.com/Gcavazo1/Quicktoken-Landing-Blog.git" },
        { name: "Support", href: "https://personal-link-tree-mu.vercel.app/" },
        { name: "FAQ", href: "#faq" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "License", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-surface pt-16 pb-8 border-t border-background">
      <div className="container mx-auto px-4">
        {/* Top Footer: Logo + Links */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Logo + Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image 
                src="/images/quicktoken_logo.png" 
                alt="QuickToken Logo" 
                width={40} 
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-semibold text-textLight font-title">QuickToken</span>
            </div>
            <p className="text-textMuted mb-4 font-body">
              The streamlined solution for launching your own branded token deployment platform and generating revenue through platform fees.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-textMuted hover:text-primary transition-colors duration-200" aria-label="Twitter">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://github.com/Gcavazo1/Quicktoken-Landing-Blog.git" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-primary transition-colors duration-200" aria-label="GitHub">
                <FaGithub className="text-xl" />
              </a>
              <a href="#" className="text-textMuted hover:text-primary transition-colors duration-200" aria-label="Discord">
                <FaDiscord className="text-xl" />
              </a>
            </div>
          </div>
          
          {/* Link Groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-textLight font-semibold mb-4 font-title">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-textMuted hover:text-primary transition-colors duration-200 font-body">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Footer: Copyright & Credits */}
        <div className="border-t border-background pt-8 text-center md:flex md:justify-between md:items-center flex-wrap">
          <p className="text-textMuted text-sm mb-4 md:mb-0 font-body">
            &copy; {year} QuickToken. All rights reserved.
          </p>
          
          <p className="text-textMuted text-sm mb-4 md:mb-0 font-body">
            Developed by <a href="https://personal-link-tree-mu.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors duration-200">Gabriel Cavazos, GigaCode</a>
          </p>
          
          <div>
            <a 
              href="https://quicktokendashboarddemo.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light transition-colors duration-200 text-sm font-body"
            >
              Try the QuickToken Dashboard Demo →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;