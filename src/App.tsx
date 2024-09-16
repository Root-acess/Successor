import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Steps from './Pages/Steps';
import Explore from './Pages/Explore';
import TestimonialsWithStats from './Pages/Testimonials';
import Newsletter from './Components/Newsletter';
import Accordion from './Pages/FAQ';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar with smooth scroll links */}
      <Navbar />

      {/* Main content sections wrapped with 'Element' for smooth scrolling */}
      <main>
        {/* Links for smooth scrolling, ensure each name matches the Element */}
        <Element name="hero">
          <Hero />
        </Element>

        <Element name="features">
          <Features />
        </Element>

        <Element name="steps">
          <Steps />
        </Element>

        <Element name="explore">
          <Explore />
        </Element>

        <Element name="testimonials">
          <TestimonialsWithStats />
        </Element>

        <Element name="newsletter">
          <Newsletter />
        </Element>

        <Element name="faq">
          <Accordion />
        </Element>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
