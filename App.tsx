
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Fleet from './components/Fleet';
import Services from './components/Services';
import Packages from './components/Packages';
import Seasons from './components/Seasons';
import Contact from './components/Contact';
import TripPlanner from './components/TripPlanner';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ServiceArea from './components/ServiceArea';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-sky-100 selection:text-sky-600">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TripPlanner />
        <About />
        <ServiceArea />
        <Fleet />
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
