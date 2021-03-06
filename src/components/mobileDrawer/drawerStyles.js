import styled from 'styled-components';

export const Handler = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 26px;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const DrawerBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0f1624;
`;

export const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 25px;
  right: 30px;
  z-index: 1;
  cursor: pointer;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 40px;
  padding-right: 30px;
  padding-left: 30px;
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  a {
    font-size: 16px;
    font-weight: 500;
    color: white;
    padding: 15px 0;
    cursor: pointer;
    border-bottom: 1px solid #e8e5e5;
    transition: all 0.25s;
  }

  &:hover {
    color: secondary;
  }

  &.active {
    color: secondary;
  }
`;

export const MenuFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

export const Social = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.75);
  font-size: 14;
  margin-right: 15px;
  transition: all 0.25s;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
`;
