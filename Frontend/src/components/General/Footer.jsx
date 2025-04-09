import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-primary text-cream-primary">
      {/* Main Footer Content */}
      <div className="footer p-10 container mx-auto grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <span className="footer-title opacity-80 text-lg">About Us</span>
          <p className="mt-4 max-w-md opacity-80">
            Our research lab focuses on developing innovative solutions 
            at the intersection of artificial intelligence, data science, and 
            computational systems to address real-world challenges.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <span className="footer-title opacity-80 text-lg">Quick Links</span>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <a href="#research" className="link link-hover opacity-80 hover:opacity-100">Research</a>
            <a href="#publications" className="link link-hover opacity-80 hover:opacity-100">Publications</a>
            <a href="#team" className="link link-hover opacity-80 hover:opacity-100">Our Team</a>
            <a href="#projects" className="link link-hover opacity-80 hover:opacity-100">Projects</a>
            <a href="#events" className="link link-hover opacity-80 hover:opacity-100">Events</a>
            <a href="#contact" className="link link-hover opacity-80 hover:opacity-100">Contact</a>
          </div>
        </div>
        
        {/* Contact Info */}
        <div>
          <span className="footer-title opacity-80 text-lg">Contact</span>
          <div className="mt-4 space-y-2 opacity-80">
            <p>Institute of Information Technology</p>
            <p>University of Dhaka</p>
            <p>Dhaka, Bangladesh</p>
            <p className="flex items-center gap-2 mt-1">
              <FaEnvelope size={16} />
              <a href="mailto:contact@researchlab.edu" className="link link-hover">contact@researchlab.edu</a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="border-t border-cream-primary/20"></div>
      
      {/* Bottom Bar */}
      <div className="p-6 bg-green-dark">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm opacity-70 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Research Lab. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="btn btn-circle btn-sm btn-ghost" aria-label="Facebook">
              <FaFacebook size={18} className="text-cream-primary opacity-80 hover:opacity-100" />
            </a>
            <a href="#" className="btn btn-circle btn-sm btn-ghost" aria-label="Twitter">
              <FaTwitter size={18} className="text-cream-primary opacity-80 hover:opacity-100" />
            </a>
            <a href="#" className="btn btn-circle btn-sm btn-ghost" aria-label="LinkedIn">
              <FaLinkedin size={18} className="text-cream-primary opacity-80 hover:opacity-100" />
            </a>
            <a href="#" className="btn btn-circle btn-sm btn-ghost" aria-label="GitHub">
              <FaGithub size={18} className="text-cream-primary opacity-80 hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;