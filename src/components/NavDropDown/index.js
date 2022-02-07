import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';

import {
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer,
} from './NavDropDown';

const NavDropDown = (props) => (
  <DropDownContainer active={props.isOpen}>
    <DropDownItem href="mailto:bayadyoussef20@gmail.com?subject=🤘 Hi Jo, I'd like to hire you">
      <DropDownIcon>
        <AiOutlineMail />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Email</DropDownItemTitle>
        <DropDownItemDesc>
          Got a question or proposal, or just want to say hello 👋 ? Go ahead.
        </DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href='#' rel='noreferrer'>
      <DropDownIcon>
        <AiFillPhone />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Phone</DropDownItemTitle>
        <DropDownItemDesc>
          Let's get together and have a chat "+212607267677"
        </DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>

    <DropDownItem href='#' target='_blank' rel='noreferrer'>
      <DropDownIcon>
        <FaLocationArrow />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Slack</DropDownItemTitle>
        <DropDownItemDesc>
          Let's get together and have a chat on Slack
        </DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
  </DropDownContainer>
);

export default NavDropDown;
