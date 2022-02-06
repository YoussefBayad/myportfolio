import React, { useState } from 'react';
import Sticky from 'react-stickynode';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Container } from './LayoutStyles';

export const Layout = ({ children }) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>
      <Container>
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};
