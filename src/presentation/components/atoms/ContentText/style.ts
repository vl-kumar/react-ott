import styled from "styled-components";

export const TextView = styled.div((props) => ({
  color: props.theme.colors.textColor,
  fontSize: props.theme.fontSizes.body1,
  margin: 0,
  fontWeight: "200",
  marginTop: props.theme.spacings.sm,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
}));
