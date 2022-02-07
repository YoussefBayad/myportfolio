import React from 'react';
import { Link } from 'react-scroll';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SocialLinks } from '../../constants/constants';
import MobileDrawer from '../mobileDrawer';
import menuItems from '../../constants/header.data';

import {
  Header,
  Container,
  Div1,
  Div2,
  Div3,
  SocialIcons,
} from './HeaderStyles';

export default ({ className }) => (
  <Header className={className}>
    <Container>
      <Div1>
        <Link href='/'>
          <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
            <DiCssdeck size='3rem' /> <span>Portfolio</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        {menuItems.map((menuItem, i) => (
          <Link
            activeClass='active'
            to={menuItem.path}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={i}>
            {menuItem.label}
          </Link>
        ))}
      </Div2>
      <Div3>
        <SocialIcons href={SocialLinks.github}>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href={SocialLinks.linkedin}>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href={SocialLinks.instagram}>
          <AiFillInstagram size='3rem' />
        </SocialIcons>
      </Div3>
      <MobileDrawer />
    </Container>
  </Header>
);
