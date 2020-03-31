import React from 'react';

import Hero from 'Components/Hero';
import Shops from 'Components/Shops/Shops';

import PageWrapper from 'Layouts/PageWrapper';

export default () => (
  <PageWrapper>
    <Hero background="shopsBg" />
    <Shops />
  </PageWrapper>
);
