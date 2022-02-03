import React, { useState } from 'react';
import Link from 'next/link';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import NavDropDown from '../NavDropDown';
import { LeftSection } from './HeroStyles';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi there👋 I’m Joseph Bayad and I’m a Front-end web developer!
        </SectionText>
        <Button form onClick={handleClick}>
          Contact Me
        </Button>
        <NavDropDown isOpen={isOpen} />
      </LeftSection>
    </Section>
  );
};

export default Hero;
