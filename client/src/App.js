import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import LiquidBackground from './components/LiquidBackground';
import WhatsAppButton from './components/WhatsAppButton';
import QuoteModal from './components/QuoteModal';
import './App.css';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <Router>
      <div className="App">
        <LiquidBackground />
        <FloatingElements />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero onGetQuote={openQuoteModal} />
                <Services onGetQuote={openQuoteModal} />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
              </>
            } />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
      </div>
    </Router>
  );
}

export default App;