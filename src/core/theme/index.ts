export interface Colors {
  primary: string;
  secondary: string;
  textColor: string;
}

export interface Spacings {
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  xmd: string;
  xxmd: string;
  lg: string;
  xl: string;
}

export interface FontSizes {
  header1: string;
  header2: string;
  header3: string;
  header4: string;
  header5: string;
  body1: string;
  body2: string;
  subtitle1: string;
  subtitle2: string;
  button: string;
  caption: string;
}

export interface Theme {
  name: "light" | "dark";
  colors: Colors;
  fontSizes: FontSizes;
  spacings: Spacings;
}

const spacings: Spacings = {
  xxs: "2px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  xmd: "16px",
  xxmd: "20px",
  lg: "24px",
  xl: "32px",
};

const fontSizes: FontSizes = {
  header1: "2.5rem",
  header2: "2rem",
  header3: "1.75rem",
  header4: "1.5rem",
  header5: "1.25rem",
  body1: "1.3rem",
  body2: "1rem",
  subtitle1: "0.85rem",
  subtitle2: "0.65rem",
  button: "1.2rem",
  caption: "0.9rem"
};

export const lightTheme: Theme = {
  name: "light",
  colors: {
    primary: "#171717",
    secondary: "#FFDE36",
    textColor: "#FFFFFF",
  },
  spacings: spacings,
  fontSizes: fontSizes,
};

export const darkTheme: Theme = {
  name: "dark",
  colors: {
    primary: "#171717",
    secondary: "#FFDE36",
    textColor: "#FFFFFF",
  },
  spacings: spacings,
  fontSizes: fontSizes,
};
