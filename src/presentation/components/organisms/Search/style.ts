import styled from "styled-components";

export const ContentGrid= styled.div((props) => ({
    color: props.theme.colors.textColor,
    justifyContent: 'space-between',
    display: 'grid',
    gridTemplateColumns: '30% 30% 30%',
    paddingLeft: props.theme.spacings.md,
    paddingRight: props.theme.spacings.md,
    paddingTop: `calc(${props.theme.spacings.lg} + ${props.theme.spacings.lg} + ${props.theme.spacings.xl})`,
  }));