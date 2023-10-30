import "@fontsource/lexend";
import { ThemeOptions } from '@mui/material/styles';

export const theme: ThemeOptions = {
  typography: {
    fontFamily: ['"Lexend"', 'Arial', '-apple-system', 'sans-serif'].join(',')
  },
  shape: {
    borderRadius: 6
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedSizeLarge: {
          height: '3rem',
          borderRadius: '1.5rem',
          paddingLeft: '3.75rem',
          paddingRight: '3.75rem',
          whiteSpace: 'nowrap'
        }
      }
    }
  }
};
