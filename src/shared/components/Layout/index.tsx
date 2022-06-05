import * as S from './styles';

export interface ComponentProps {
  children: React.ReactNode;
}

const Layout = (props: ComponentProps) => {
  return (
    <>
      <S.Navbar>asdsda</S.Navbar>
      layout
      <h1>{props.children}</h1>
    </>
  );
};

export default Layout;
