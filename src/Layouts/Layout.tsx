import React from "react";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Container } from "@material-ui/core"
import BottomNavigation from './Navigation/BottomNavigation'
import Head from './Head/Head'

type LayoutProps = {
    children: NonNullable<React.ReactNode>;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <>
            <nav><Head /></nav>
            <main>
                <Container>
                    {children}
                </Container>
            </main>

            {matches ? null : <nav> <BottomNavigation /> </nav>}

        </>
    )
}

export default Layout;