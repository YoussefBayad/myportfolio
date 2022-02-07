import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import NavDropDown from '../NavDropDown';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './styles';

const Contact = () => (
  <Section id='contact'>
    <SectionTitle>Contact</SectionTitle>
    <NavDropDown isOpen={true} />
    <SectionDivider colorAlt />
  </Section>
);

export default Contact;
