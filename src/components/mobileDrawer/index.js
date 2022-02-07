import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Drawer from './drawer';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';
import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaDribbble,
} from 'react-icons/fa';
import menuItems from '../../constants/header.data';
import {
  Handler,
  DrawerBox,
  Close,
  Content,
  Menu,
  MenuFooter,
  Social,
  Button,
  SocialIcon,
} from './drawerStyles';

const social = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaTwitter />,
  },
  {
    path: '/',
    icon: <FaGithubAlt />,
  },
  {
    path: '/',
    icon: <FaDribbble />,
  },
];

export default function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Drawer
      width='320px'
      drawerHandler={
        <Handler>
          <IoMdMenu size={26} />
        </Handler>
      }
      open={isDrawerOpen}
      toggleHandler={() => setIsDrawerOpen((prev) => !prev)}
      closeButton={<IoMdClose size='24px' color='#ffffff' />}
      DrawerBox={DrawerBox}
      Close={Close}>
      <Scrollbars autoHide>
        <Content>
          <Menu>
            {menuItems.map((menuItem, i) => (
              <Link
                activeClass='active'
                to={menuItem.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
                key={i}>
                {menuItem.label}
              </Link>
            ))}
          </Menu>
          <MenuFooter>
            <Social>
              {social.map((socialItem, i) => (
                <SocialIcon key={i}>
                  <Link to={socialItem.path}>{socialItem.icon} </Link>
                </SocialIcon>
              ))}
            </Social>
          </MenuFooter>
        </Content>
      </Scrollbars>
    </Drawer>
  );
}
