import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-scroll/modules';

import {
  DropDownContainer,
  DropDownIcon,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer,
} from './NavDropDown';

const NavDropDown = (props) => (
  <DropDownContainer>
    <a href="mailto:bayadyoussef20@gmail.com?subject=🤘 Hi Jo, I'd like to hire you">
      <DropDownIcon>
        <AiOutlineMail />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Email</DropDownItemTitle>
        <DropDownItemDesc>
          Got a question or proposal, or just want to say hello 👋 ? Go ahead.
        </DropDownItemDesc>
      </DropDownTextContainer>
    </a>
    <Link href=''>
      <DropDownIcon>
        <AiFillPhone />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Phone</DropDownItemTitle>
        <DropDownItemDesc>
          Let's get together and have a chat "+212607267677"
        </DropDownItemDesc>
      </DropDownTextContainer>
    </Link>

    <Link href=''>
      <DropDownIcon>
        <FaLocationArrow />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Slack</DropDownItemTitle>
        <DropDownItemDesc>
          Let's get together and have a chat on Slack
        </DropDownItemDesc>
      </DropDownTextContainer>
    </Link>
  </DropDownContainer>
);

export default NavDropDown;
