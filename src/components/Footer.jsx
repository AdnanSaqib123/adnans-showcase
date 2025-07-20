import React from 'react';
import { FaLinkedin, FaWhatsapp, FaFacebook, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { socialLinks } from '../assets/data';

const iconMap = {
  LinkedinLogo: <FaLinkedin size={26} />,
  WhatsappLogo: <FaWhatsapp size={26} />,
  EnvelopeSimple: <MdEmail size={26} />,
  FacebookLogo: <FaFacebook size={26} />,
  GithubLogo: <FaGithub size={26} />,
};

const Footer = () => {
  return (
    <footer className="bg-slate-900/90 backdrop-blur border-t border-slate-600 py-8 text-center w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="text-green-500 text-2xl font-bold mb-2">Adnan's Showcase</div>
          <p className="text-slate-400 text-base max-w-xl leading-relaxed">
            Crafting meaningful digital experiences through clean design and modern frontend development. <br className="block" />
            Let's turn your ideas into reality.
          </p>
          <div className="flex gap-5 sm:gap-6 mt-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className={`transition-all duration-300 border border-green-600 rounded-full p-1.5 cursor-pointer transform hover:scale-110 ${social.color}`}
                tabIndex={0}
              >
                {iconMap[social.iconName]}
              </a>
            ))}
          </div>
          <div className="text-slate-500 text-sm mt-8 pt-4 border-t border-slate-600 w-full">
            © 2025 Adnan's Showcase. All rights reserved. Made with <span role="img" aria-label="love">❤️</span> by <span className="text-green-500 font-bold">MUHAMMAD ADNAN SAQIB</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;