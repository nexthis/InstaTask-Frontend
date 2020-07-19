import React from "react";
import {Link as RouteLink} from 'react-router-dom'
import { Typography, Link } from '@material-ui/core'

import {Name} from 'routes/RouterList'

const NotFound = () => {
    return (
        <>
            <Typography align="center" variant="h5" component="h1" style={{marginBottom: 20}}>Przepraszamy, ta strona jest niedostępna</Typography>
            <Typography align="center" variant="body1" component="h1">
                Kliknięty link mógł być uszkodzony lub strona mogła zostać usunięta. <Link component={RouteLink} to={Name.Home}> Przejdz do strony głównej </Link>
            </Typography>
        </>
    )
}

export default NotFound;