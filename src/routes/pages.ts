import {
  BiNews,
  BiIdCard,
  BiGroup,
  BiPackage,
  BiTask,
  BiCabinet,
  BiSpreadsheet,
} from 'react-icons/bi';
import styled from 'styled-components';

const style = {
  color: 'white',
  size: '38px',
  cursor: 'pointer',
};

const DiárioIcon = styled(BiNews).attrs(style)``;
const FuncionáriosIcon = styled(BiIdCard).attrs(style)``;
const ClientesIcon = styled(BiGroup).attrs(style)``;
const ProdutosIcon = styled(BiPackage).attrs(style)``;
const AtividadesIcon = styled(BiTask).attrs(style)``;
const DocumentosIcon = styled(BiCabinet).attrs(style)``;
const MovimentaçãoIcon = styled(BiSpreadsheet).attrs(style)``;

const pages = [
  {
    name: 'Diário',
    icon: DiárioIcon,
    path: '/',
    tag: { width: '170px', color: '#a6241b' },
  },
  {
    name: 'Funcionários',
    icon: FuncionáriosIcon,
    path: '/func',
    tag: { width: '270px', color: '#a6471b' },
  },
  {
    name: 'Clientes',
    icon: ClientesIcon,
    path: '/client',
    tag: { width: '200px', color: '#65a61b' },
  },
  {
    name: 'Produtos',
    icon: ProdutosIcon,
    path: '/prod',
    tag: { width: '220px', color: '#1ba65e' },
  },
  {
    name: 'Atividades',
    icon: AtividadesIcon,
    path: '/task',
    tag: { width: '240px', color: '#1b81a6' },
  },
  {
    name: 'Documentos',
    icon: DocumentosIcon,
    path: '/docs',
    tag: { width: '270px', color: '#1b36a6' },
  },
  {
    name: 'Movimentação',
    icon: MovimentaçãoIcon,
    path: '/movements',
    tag: { width: '300px', color: '#651ba6' },
  },
];

export default pages;
