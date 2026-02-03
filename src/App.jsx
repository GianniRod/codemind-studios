import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <nav style={{ padding: '1.5rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Codemind Studios</div>
      </nav>
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
