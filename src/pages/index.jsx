import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Layout/Hero';
import Register from '../components/Layout/Register';
import About from '../components/Layout/About';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Hero />
    <About />
    <Register />
  </div>
);

export default IndexPage;
