import React from 'react';
import { Link } from 'react-scroll';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SocialLinks } from '../../constants/constants';
import NavDropDown from '../NavDropDown';
import MobileDrawer from '../mobileDrawer';
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles';

const Header = ({ className }) => (
  <Container className={className} id='headers'>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DiCssdeck size='3rem' /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#contact'>
          <NavLink>Contact</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
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
);

export default Header;
