import styled from "styled-components";

export const ScrollView = styled.div((props) => ({
  background: props.theme.colors.primary,
  overflowY: "scroll",
  overflowX: "hidden",
}));

