import { alpha, darken, lighten, PaletteMode, PaletteOptions } from '@mui/material';

// palette details: https://coolors.co/palette/e63946-f1faee-a8dadc-457b9d-1d3557
const lightestColor = '#F1FAEE'; // hsl(105, 55, 96)
const darkestColor = '#1D3557'; // hsl(215, 50, 23)
const primaryMainColor = '#E63946';// hsl(355, 78, 56)
const secondaryMainColor = '#A8DADC'; // hsl(203, 39, 44)

export const paletteLightOptions: PaletteOptions = {
  mode: 'light',
  primary: {
    main: primaryMainColor
  },
  secondary: {
    main: secondaryMainColor
  },
  background: {
    default: lightestColor
  },
  text: {
    primary: alpha(darkestColor, 0.87),
    secondary: alpha(darkestColor, 0.6),
    disabled: alpha(darkestColor, 0.38)
  }
};

export const paletteDarkOptions: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: lighten(primaryMainColor, 0.15)
  },
  secondary: {
    main: secondaryMainColor
  },
  background: {
   default: darken(darkestColor, 0.3)
  },
  text: {
    primary: lightestColor,
    secondary: alpha(lightestColor, 0.7),
    disabled: alpha(lightestColor, 0.5)
  },
};

export const getPallette = (mode: PaletteMode) => {
  return (mode === 'light') ? paletteLightOptions : paletteDarkOptions;
}
