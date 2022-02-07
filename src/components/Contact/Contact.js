import React from 'react';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents';
import NavDropDown from '../NavDropDown';

const Contact = () => (
  <Section id='contact'>
    <SectionTitle>Contact</SectionTitle>
    <NavDropDown />
    <SectionDivider colorAlt />
  </Section>
);

export default Contact;
