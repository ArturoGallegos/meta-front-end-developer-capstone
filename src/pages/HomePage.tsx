import React from 'react';
import About from 'src/components/About/About';
import Hero from 'src/components/Hero/Hero';
import Highlights from 'src/components/Highlights/Highlights';
import Layout from 'src/components/Layout/Layout';
import Testimonials from 'src/components/Testimonials/Testimonials';

const HomePage: React.FC = () => {
  return (<Layout>
    <Hero />
    <Highlights />
    <Testimonials />
    <About />
  </Layout>);
};

export default HomePage;
