import React, { useContext, useMemo, useState } from 'react';
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import { deepmerge } from '@mui/utils';
import { theme } from './theme';
import { getPallette } from './palette';

type ThemeModeContextType = {
  toggleMode: () => void;
  mode: PaletteMode;
};

const defaultValue: ThemeModeContextType = {
  toggleMode: () => null,
  mode: 'light',
};

export const ThemeModeContext = React.createContext<ThemeModeContextType>(defaultValue);

type Props = React.PropsWithChildren<unknown>;

export const ThemeModeProvider: React.FC<Props> = (props) => {
  const [mode, setMode] = useState(defaultValue.mode);

  const themeMode = useMemo(
    () => ({
      toggleMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }), [mode]
  );

  const themeWithMode = useMemo(
    () => createTheme(deepmerge(
        { palette: getPallette(mode) },
        { ...theme }
      )), [mode]
  );

  return (
    <ThemeModeContext.Provider value={themeMode} >
      <ThemeProvider theme={themeWithMode}>
        {props.children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeModeContext);
