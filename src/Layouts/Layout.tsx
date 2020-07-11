import React from "react";
import { Container, Hidden  } from "@material-ui/core"
import BottomNavigation from './Navigation/BottomNavigation'
import Head from './Head/Head'

type LayoutProps = {
    children: NonNullable<React.ReactNode>;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <nav><Head /></nav>
            <main>
                <Container>
                    {children}
                </Container>
            </main>
            <Hidden mdUp>
             <nav> <BottomNavigation /> </nav>
            </Hidden>

        </>
    )
}

export default Layout;