"use client";
import React, { useState } from 'react';
import { Menu, X, Code, Bot, Zap, Brain, Users, Mail, Github, Linkedin } from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, setIsOpen }) => (
  <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            SpectraIQ
          </span>
        </div>
        
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item} className="text-gray-300 hover:text-white px-3 py-2">
                {item}
              </a>
            ))}
          </div>
        </div>
        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </div>
    
    {isOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item} className="text-gray-300 hover:text-white block px-3 py-2">
              {item}
            </a>
          ))}
        </div>
      </div>
    )}
  </nav>
);

const Hero = () => (
  <section id="home" className="pt-20 pb-32 px-4 bg-gradient-to-b from-black to-gray-900">
    <div className="max-w-7xl mx-auto mt-16 text-center">
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
        Transform Your Ideas Into Reality
      </h1>
      <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
        Expert web development and AI solutions to elevate your business. From React applications to custom AI integrations, we bring your vision to life.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </a>
        <a href="#services" className="border border-gray-700 text-gray-300 px-8 py-3 rounded-lg hover:border-gray-600 transition">
          Learn More
        </a>
      </div>
    </div>
  </section>
);

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition">
    <Icon className="w-12 h-12 text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Services = () => (
  <section id="services" className="py-20 px-4 bg-black">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={Code}
          title="Web Development"
          description="Custom React.js and Next.js applications built with modern best practices and optimal performance."
        />
        <ServiceCard
          icon={Bot}
          title="AI Integration"
          description="Seamless integration of AI services including OpenAI, LangChain, and custom LLM solutions."
        />
        <ServiceCard
          icon={Zap}
          title="Backend Solutions"
          description="Scalable Node.js backends with robust APIs and efficient database management."
        />
        <ServiceCard
          icon={Brain}
          title="AI Consulting"
          description="Strategic guidance on implementing AI solutions to enhance your business processes."
        />
        <ServiceCard
          icon={Users}
          title="Team Extension"
          description="Skilled developers ready to join your team and accelerate your project development."
        />
        <ServiceCard
          icon={Mail}
          title="Ongoing Support"
          description="Dedicated maintenance and support to ensure your solutions stay up-to-date and secure."
        />
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {['name', 'email', 'message'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-gray-400 mb-2 capitalize">{field}</label>
              {field === 'message' ? (
                <textarea
                  id={field}
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white"
                  value={formData[field]}
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                  required
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white"
                  
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                  required
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">SpectraIQ</h3>
          <p className="mb-4">Transforming businesses through innovative web and AI solutions.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><Github /></a>
            <a href="#" className="hover:text-white"><Linkedin /></a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-white">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
          <ul className="space-y-2">
            <li><a href="mailto:support@spectraiq.com" className="hover:text-white">support@spectraiq.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>
        <Hero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default App;
