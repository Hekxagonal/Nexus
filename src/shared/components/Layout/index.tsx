import * as S from './styles';
import Pages from '../../../routes/pages';

export interface ComponentProps {
  children: React.ReactNode;
  pageId: number;
}

const Layout = (props: ComponentProps) => {
  const ActiveIcon = Pages[props.pageId].icon;

  return (
    <>
      <S.Navbar>
        <S.Column style={{ marginLeft: '40px' }}>asdasd</S.Column>

        <S.Column>
          <S.ProfileIcon />
        </S.Column>
      </S.Navbar>
      <S.LateralMenu>
        <S.ActivePage>
          <ActiveIcon />
        </S.ActivePage>

        <S.IconGroup>
          {Pages.map(
            (El, i) => props.pageId != i && <El.icon key={i}></El.icon>,
          )}
        </S.IconGroup>
      </S.LateralMenu>
      <S.Content>
        page {props.pageId} {props.children}
      </S.Content>
    </>
  );
};

export default Layout;
