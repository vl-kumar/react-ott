import styled from "styled-components";


export const MainContainer = styled.div((props) => ({
  minHeight: "100vh",
  backgroundColor: props.theme.colors.primary
}));
export const ContentGrid = styled.div((props) => ({
  height: "100%",
  justifyContent: "space-between",
  display: "grid",
  gridTemplateColumns: "30.5% 30.5% 30.5%",
  paddingLeft: props.theme.spacings.md,
  paddingRight: props.theme.spacings.md,
  paddingTop: `calc(${props.theme.spacings.lg} + ${props.theme.spacings.lg} + ${props.theme.spacings.xl})`,
}));

