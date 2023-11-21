import styled from "styled-components";

export const CardContainer = styled.div((props) => ({
    display: "flex",
    flexDirection: 'column',
    width: '100%',
    marginBottom: props.theme.spacings.lg,
  }));