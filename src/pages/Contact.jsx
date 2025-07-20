import React, { useState } from 'react';
import { FaLinkedin, FaWhatsapp, FaFacebook, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { contactInfo, socialLinks } from '../assets/data.js';
import { FiSend } from 'react-icons/fi';

const iconMap = {
  LinkedinLogo: <FaLinkedin size={26} />,
  WhatsappLogo: <FaWhatsapp size={26} />,
  EnvelopeSimple: <MdEmail size={26} />,
  FacebookLogo: <FaFacebook size={26} />,
  GithubLogo: <FaGithub size={26} />,
};

const Contact = () => {
  const [status, setStatus] = useState(null);

  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <section id="contact" className="flex flex-col items-center justify-center px-4 py-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">Get In Touch</h2>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <div data-aos="fade-right" className="flex flex-col gap-6">
            <h3 className="text-white text-2xl text-center sm:text-left font-semibold mb-2">Let's Connect</h3>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-slate-800/60 backdrop-blur rounded-xl border border-slate-600 transition-all duration-300 hover:translate-x-2"
              >
                <span className="text-2xl text-green-500">{info.icon}</span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-400 text-sm font-medium">{info.label}</span>
                  <span className="text-white text-base font-semibold">{info.value}</span>
                </div>
              </div>
            ))}
            <div data-aos="fade-up" className="flex justify-center gap-3 sm:gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-slate-800/60 border border-green-600 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 ${social.color}`}
                  title={social.label}
                >
                  {iconMap[social.iconName]}
                </a>
              ))}
            </div>
          </div>
          {/* Contact Form */}
          <div data-aos="fade-left">
            <form
              className="flex flex-col gap-6 "
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={() => setStatus('pending')}
              onReset={() => setStatus(null)}
            >
              <input type="hidden" name="access_key" value="8de622ca-2e59-471f-9e44-9ca84a41b437" />
              <h3 className="text-white text-center sm:text-left text-2xl font-semibold mb-2">Send Message</h3>
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="p-4 bg-slate-800/60 border border-slate-600 rounded-lg text-white text-base focus:outline-none focus:border-green-500 transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="p-4 bg-slate-800/60 border border-slate-600 rounded-lg text-white text-base focus:outline-none focus:border-green-500 transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white text-base font-medium">Message</label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  required
                  className="p-4 bg-slate-800/60 border border-slate-600 rounded-lg text-white text-base min-h-[120px] resize-y focus:outline-none focus:border-green-500 transition-colors duration-300"
                />
              </div>
              <button
                type="submit"
                className="flex justify-center items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                disabled={status === 'pending'}
              >
                {status === 'pending' ? 'Sending...' : (<><span>Send Message</span><FiSend size={20} className="ml-2" /></>)}
              </button>
              {status === 'success' && (
                <p className="text-green-400 text-center mt-2">Thank you for your message! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;