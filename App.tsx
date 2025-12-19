
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Fleet from './components/Fleet';
import Services from './components/Services';
import Packages from './components/Packages';
import Seasons from './components/Seasons';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-orange-100 selection:text-orange-600">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Fleet />
        <Services />
        <Packages />
        <Seasons />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
