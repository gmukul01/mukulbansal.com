import { Home } from '@components';
import { CssBaseline } from '@medly-components/core';
import { ThemeProvider } from '@styled';
import { defaultTheme } from '@theme';
import { hot } from 'react-hot-loader/root';
// tslint:disable-next-line: ordered-imports
import React from 'react';

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <>
                <CssBaseline />
                <Home />
            </>
        </ThemeProvider>
    );
};

export const HotApp = hot(App);
