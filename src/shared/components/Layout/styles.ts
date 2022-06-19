import styled, { css } from 'styled-components';

import { BsPersonCircle } from 'react-icons/bs';

export const Navbar = styled.div`
  width: 100vw;
  height: 40px;
  background: #d4d4d4;
  position: fixed;
  z-index: 9;
  top: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const LateralMenu = styled.div`
  width: 40px;
  height: 100vh;
  background: #b5b5b5;
  position: fixed;
  z-index: 10;
  top: 0;
`;

export const Content = styled.div`
  margin: 40px 20px 20px 40px;
`;

export const Column = styled.div``;

export const ProfileIcon = styled(BsPersonCircle)`
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-right: 10px;
  color: #757575;
`;

export const IconGroup = styled.div`
  margin-top: 150px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  height: 280px;
`;

export const PageIcon = styled.div``;

interface ActivePageProps {
  state: {
    width: string;
    color?: string;
  };
}

export const ActivePage = styled.div<ActivePageProps>`
  position: fixed;
  margin-top: 70px;
  width: 300px;
  padding-right: 20px;
  height: 70px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-size: 100%;
  transition: width 1s ease-in-out, background 0.5s ease-in-out;

  width: ${({ state }) => state.width};
  background-color: ${({ state }) => state.color || '#548ada'};
`;

export const ActiveTitle = styled.h1`
  color: white;
  margin-left: 10px;
`;

export const activeIconStyles = {
  width: '50px',
  height: '50px',
};
