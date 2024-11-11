"use client";
import React, { useState } from 'react';
import { Menu, X, Code, Bot, Zap, Brain, Mail, Github, Linkedin, Server } from 'lucide-react';
import Image from 'next/image';
import './page.css';

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
            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
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
          {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
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
          icon={Mail}
          title="Ongoing Support"
          description="Dedicated maintenance and support to ensure your solutions stay up-to-date and secure."
        />
        <ServiceCard
          icon={Server}
          title=".NET Development"
          description="Robust and scalable .NET applications tailored to your business needs."
        />
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, description, link, imageUrl }: { title: string, description: string, link: string, imageUrl: string }) => (
  <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition scroll-item">
    <Image src={imageUrl} alt={title} width={300} height={200} className="w-full h-48 object-cover rounded-t-xl mb-4" />
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
);

const Projects = () => (
  <section id="projects" className="py-20 px-4 bg-black">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Our Projects</h2>
      <h3 className="text-3xl font-bold text-center text-white mb-8">AI Projects</h3>
      <div className="scroll-container">
        <div className="scroll-content">
          {[...Array(5)].map((_, index) => (
            <ProjectCard
              key={index}
              title={`AI Project ${index + 1}`}
              description="A cutting-edge web application that integrates AI-driven solutions for smarter user experiences."
              link="https://github.com/your-repo/ai-powered-web-app"
              imageUrl="https://via.placeholder.com/300x200"
            />
          ))}
        </div>
      </div>
      <h3 className="text-3xl font-bold text-center text-white mb-8">Web Development Projects</h3>
      <div className="scroll-container">
        <div className="scroll-content">
          {[...Array(5)].map((_, index) => (
            <ProjectCard
              key={index}
              title={`Web Dev Project ${index + 1}`}
              description="A custom-built CRM system designed to streamline customer management and sales workflows."
              link="https://github.com/your-repo/custom-crm"
              imageUrl="https://via.placeholder.com/300x200"
            />
          ))}
        </div>
      </div>
      <h3 className="text-3xl font-bold text-center text-white mb-8">.NET Projects</h3>
      <div className="scroll-container">
        <div className="scroll-content">
          {[...Array(5)].map((_, index) => (
            <ProjectCard
              key={index}
              title={`.NET Project ${index + 1}`}
              description="A robust enterprise application built with .NET for optimal performance and scalability."
              link="https://github.com/your-repo/net-enterprise-app"
              imageUrl="https://via.placeholder.com/300x200"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 px-4 bg-black">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-12">About Us</h2>
      <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto text-center">
        SpectraIQ is a leading provider of web development and AI solutions. Our team of experts specializes in creating custom React.js and Next.js applications, integrating AI services, and offering strategic AI consulting. We are dedicated to helping businesses transform their ideas into reality with cutting-edge technology and innovative solutions.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </a>
        <a href="#services" className="border border-gray-700 text-gray-300 px-8 py-3 rounded-lg hover:border-gray-600 transition">
          Our Services
        </a>
      </div>
    </div>
  </section>
);

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwRfV0f12PNFkZv_BjXOb5v68rX7oHluClf0vwmZdjONN2WQokTD1v_FyHslAh4u1au/exec', {
        method: 'POST',
        body: new URLSearchParams({
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const result = await response.text();
      if (result.includes("Your message was successfully sent to the Google Sheet database!")) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Failed to send message.');
    }
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
                  value={formData[field as keyof FormData]}
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                  required
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white"
                  value={formData[field as keyof FormData]}
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                  required
                />
              )}
            </div>
          ))}
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
          {status && <p className="text-center text-gray-400 mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black py-10 text-center text-gray-400">
    <p>&copy; 2024 SpectraIQ. All rights reserved.</p>
    <div className="flex justify-center space-x-6 mt-6">
      <a href="https://github.com" target="_blank" className="hover:text-white">
        <Github size={24} />
      </a>
      <a href="https://linkedin.com" target="_blank" className="hover:text-white">
        <Linkedin size={24} />
      </a>
    </div>
  </footer>
);

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-sans text-white">
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <Services />
      <Projects />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Page;


