import * as S from './styles';
import Pages from '../../../routes/pages';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export interface ComponentProps {
  children: React.ReactNode;
  pageId: number;
}

const Layout = (props: ComponentProps) => {
  const ActiveIcon = useRef(Pages[props.pageId].icon);

  useEffect(() => {
    ActiveIcon.current = Pages[props.pageId].icon;
  });

  return (
    <>
      <S.Navbar>
        <S.Column style={{ marginLeft: '40px' }}>asdasd</S.Column>

        <S.Column>
          <S.ProfileIcon />
        </S.Column>
      </S.Navbar>
      <S.LateralMenu>
        <S.ActivePage state={Pages[props.pageId].tag}>
          <ActiveIcon.current style={S.activeIconStyles} />
          <S.ActiveTitle>{Pages[props.pageId].name}</S.ActiveTitle>
        </S.ActivePage>

        <S.IconGroup>
          {Pages.map(
            (El, i) =>
              props.pageId != i && (
                <Link to={El.path}>
                  <El.icon key={i}></El.icon>
                </Link>
              ),
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
