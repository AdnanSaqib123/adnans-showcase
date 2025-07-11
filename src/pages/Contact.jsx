import React, { useState } from 'react';
import { contactInfo, socialLinks } from '../assets/data.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-10 sm:py-24">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">Get In Touch</h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
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
          <div className="flex justify-center gap-4 mt-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/60 border border-slate-600 rounded-full flex items-center justify-center text-2xl text-green-500 transition-all duration-300 hover:bg-green-500 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Contact Form */}
        <form className="flex flex-col gap-6 " onSubmit={handleSubmit}>
          <h3 className="text-white text-center sm:text-left text-2xl font-semibold mb-2">Send Message</h3>
          <div className="flex flex-col gap-2">
            <label className="text-white text-base font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
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
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="p-4 bg-slate-800/60 border border-slate-600 rounded-lg text-white text-base focus:outline-none focus:border-green-500 transition-colors duration-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white text-base font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              required
              className="p-4 bg-slate-800/60 border border-slate-600 rounded-lg text-white text-base min-h-[120px] resize-y focus:outline-none focus:border-green-500 transition-colors duration-300"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 mt-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;