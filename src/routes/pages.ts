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

const DiárioIcon = styled(BiNews)``;
const FuncionáriosIcon = styled(BiIdCard)``;
const ClientesIcon = styled(BiGroup)``;
const ProdutosIcon = styled(BiPackage)``;
const AtividadesIcon = styled(BiTask)``;
const DocumentosIcon = styled(BiCabinet)``;
const MovimentaçãoIcon = styled(BiSpreadsheet)``;

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
