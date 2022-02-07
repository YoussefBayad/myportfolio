import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
import { keyframes } from '@emotion/react';

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

export const Header = styled.header`
  position: 'absolute';
  top: 0;
  left: 0;
  padding: 20px;
  background-color: 'transparent';
  transition: 'all 0.4s ease';
  width: '100%';
  animation: ${positionAnim} 0.4s ease;
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  a {
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Div2 = styled.nav`
  width: 50%;
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.lg} {
    display: none;
  }

  a {
    font-size: 2rem;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.2s ease;
    &:hover {
      color: #fff;
      opacity: 1;
      cursor: pointer;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      padding: 0.5rem;
    }
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
