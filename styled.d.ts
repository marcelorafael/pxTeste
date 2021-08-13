// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
}

type AppThemeFont = {
  fontFamily: string
  fontSize: string
  letterSpacing: string
}

export type AppTheme = {
  COLORS: {
    primary: string
  secondary: string

  white: string
  black: string
  green: string
  red: string
  gray: string
  lightGray: string
  lightGray1: string
  },
  FONTS: {
    h1: string
    h2: string
    h3: string
    h4: string
    body1: string
    body2: string
    body3: string
    body4: string
    body5: string
    bullpen: string
    chigoda: string
    magnolia: string
    magnoliaLight: string
    oswald: string
    oswaldBold: string
    robotoThin: string
  }
}