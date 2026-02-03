import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import './index.css'; // Ensure CSS is imported

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <WhyUs />
      <Footer />
    </main>
  );
}

export default App;
