import React from 'react';
import Hero from 'src/components/Hero/Hero';
import Highlights from 'src/components/Highlights/Highlights';
import Layout from 'src/components/Layout/Layout';

const HomePage: React.FC = () => {
  return (<Layout>
    <Hero />
    <Highlights />
  </Layout>);
};

export default HomePage;
