import styled from 'styled-components';

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
  background: #c5c5c5;
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

export const IconGroup = styled.div``;

export const PageIcon = styled.div``;

export const ActivePage = styled.div`
  background: #548ada;
  position: fixed;
  margin-top: 70px;
  width: 300px;
  height: 70px;
`;
