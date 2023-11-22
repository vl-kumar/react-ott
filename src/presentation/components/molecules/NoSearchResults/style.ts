import styled from "styled-components";

export const Container = styled.div((props) => ({
    display: "flex",
    minHeight: '60vh',
    maxWidth: '80%',
    margin: 'auto',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifySelf: 'center',
    justifyContent: 'center',

  }));

  
export const ImageView = styled.img(() => ({
  width: "45%",
}));

export const TextView = styled.h3((props) => ({
  color: props.theme.colors.textColor,
  fontSize: props.theme.fontSizes.header3,
  fontWeight: 400,
  margin: 0,
  opacity: 0.8,
}));

export const SubTextView = styled.div((props) => ({
  color: props.theme.colors.textColor,
  fontSize: props.theme.fontSizes.body1,
  textAlign: 'center',
  fontWeight: 300,
  opacity: 0.6,
}));