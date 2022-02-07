import React from 'react';
import { Link } from 'react-scroll';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
  return (
    <Section row nopadding id='hero'>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi there👋 I’m Joseph Bayad and I’m a Front-end web developer!
        </SectionText>
        <Link
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}>
          <Button>Contact Me</Button>
        </Link>
      </LeftSection>
    </Section>
  );
};

export default Hero;
