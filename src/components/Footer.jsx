import React from 'react';

import Section from 'Layouts/Section';

const Footer = () => (
  <Section WrapperComponent="footer">
    { `${new Date().getFullYear()}, by ` }
    <a href="https://marzeelabs.org">Marzee Labs</a>
  </Section>
);

export default Footer;
