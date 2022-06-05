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

const style = { color: 'white', size: '40px' };

const DiárioIcon = styled(BiNews).attrs(style)``;
const FuncionáriosIcon = styled(BiIdCard).attrs(style)``;
const ClientesIcon = styled(BiGroup).attrs(style)``;
const ProdutosIcon = styled(BiPackage).attrs(style)``;
const AtividadesIcon = styled(BiTask).attrs(style)``;
const DocumentosIcon = styled(BiCabinet).attrs(style)``;
const MovimentaçãoIcon = styled(BiSpreadsheet).attrs(style)``;

const pages = [
  { name: 'Diário', icon: DiárioIcon, path: '/' },
  { name: 'Funcionários', icon: FuncionáriosIcon, path: '' },
  { name: 'Clientes', icon: ClientesIcon, path: '' },
  { name: 'Produtos', icon: ProdutosIcon, path: '' },
  { name: 'Atividades', icon: AtividadesIcon, path: '' },
  { name: 'Documentos', icon: DocumentosIcon, path: '' },
  { name: 'Movimentação', icon: MovimentaçãoIcon, path: '' },
];

export default pages;
