import styled from "styled-components";

export const ImageView = styled.img((props) => ({
  aspectRatio: 2 / 3,
  width: "100%",
  borderRadius: props.theme.spacings.xxs,
}));
