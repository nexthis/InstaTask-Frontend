import React from "react";
import { useHistory } from "react-router-dom";
import useStyles from './Head.style'
import { Container, Box,IconButton  } from '@material-ui/core';

import RestoreIcon from '@material-ui/icons/Restore';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const Head = () => {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = (to: string) => {
        history.replace(to);
    }


    return (
        <Box className={classes.root}>
            <Container className={classes.content}>
                <Box>
                    <h1>InstaTask</h1>
                </Box>
                <Box className={ classes.action}>
                    <IconButton onClick={()=> handleClick('/')} className={classes.noMobileIcon}>
                        <HomeIcon/>
                    </IconButton>
                    <IconButton onClick={()=> handleClick('/task')} className={classes.noMobileIcon}>
                        <RestoreIcon/>
                    </IconButton>
                    <IconButton onClick={()=> handleClick('/add')} className={classes.noMobileIcon}>
                        <AddIcon/>
                    </IconButton>
                    <IconButton >
                        <AccountCircleIcon/>
                    </IconButton>
                </Box>
            </Container>
        </Box>
    )
}

export default Head;