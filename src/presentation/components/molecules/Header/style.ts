import styled from "styled-components";

export const HeaderContainer = styled.div((props) => ({
  position: 'fixed',
  top: 0,
  width: '100%',
}));

export const HeaderRow = styled.div((props) => ({
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  top: 0,
  position: 'absolute',
  left: 0,
  width: `calc(100% - ${props.theme.spacings.lg})`,
  paddingLeft: props.theme.spacings.md,
  paddingRight: props.theme.spacings.md,
  paddingTop: props.theme.spacings.lg,
  paddingBottom: props.theme.spacings.lg,
}));



export const HeaderLeftRow = styled.div((props) => ({
  justifyContent: "start",
  display: "flex",
  alignItems: "center",
}));

export const BackIcon = styled.img((props) => ({
  alt: "Back Icon",
  height: props.theme.spacings.lg,
  marginRight: props.theme.spacings.xmd,
}));

export const SearchIcon = styled.img((props) => ({
  alt: "Search Icon",
  height: props.theme.spacings.lg,
}));

export const HeaderBackground = styled.img(() => ({
  height: '100%',
  width: '100%',
}));
