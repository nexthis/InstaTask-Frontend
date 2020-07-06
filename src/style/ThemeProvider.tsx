import React from "react";
import theme from './theme'
import { ThemeProvider as BaseThemeProvider } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';

type ThemeProviderProps = {
    children: NonNullable<React.ReactNode>;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    return (
        <BaseThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </BaseThemeProvider>
    )
}

export default ThemeProvider;