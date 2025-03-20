import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Components
const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="nav-link">
    {children}
  </a>
);

const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="p-6 bg-dark-700 rounded-lg transform hover:scale-105 transition-all">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Head>
        <title>VoiceMaster - Voice-Enabled Mobile App</title>
        <meta name="description" content="A powerful voice-enabled mobile application with Game of Thrones character database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-dark-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">VoiceMaster</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#download">Download</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">Voice-Enabled Mobile App</span>
              <span className="block text-primary mt-2">with Game of Thrones Data</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-lg text-gray-300 sm:max-w-3xl">
              Experience the power of voice commands while exploring the world of Game of Thrones characters.
            </p>
            <div className="mt-10">
              <a href="#download" className="btn-primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-16">
            Key Features
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Voice Commands"
              description="Control the app using natural voice commands with real-time processing"
            />
            <FeatureCard
              title="Character Database"
              description="Explore detailed information about Game of Thrones characters"
            />
            <FeatureCard
              title="Secure Authentication"
              description="Firebase-powered secure login system with persistent sessions"
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-10">
            Download Now
          </h2>
          <div className="flex justify-center space-x-6">
            <a href="#" className="btn-primary flex items-center">
              <span>Android App</span>
            </a>
            <a href="#" className="btn-primary flex items-center">
              <span>iOS App</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-8">
            Contact Us
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Have questions about VoiceMaster? We're here to help! Reach out to our team for support or inquiries.
          </p>
          <a
            href="mailto:contact@voicemaster.com"
            className="btn-primary inline-flex items-center"
          >
            Send Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} VoiceMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 