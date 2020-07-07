import React from "react";

import { useDispatch, useSelector } from 'react-redux';
import actions from 'store/Auth/actions'
import { StoreInterface, AuthInterface } from 'store/storeType'

import { useHistory } from "react-router-dom";
import useStyles from './Head.style'
import { Container, Box, IconButton, Typography,Avatar} from '@material-ui/core';

import RestoreIcon from '@material-ui/icons/Restore';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const Head = () => {
    const classes = useStyles();
    const history = useHistory();

    const dispatch = useDispatch();
    const auth = useSelector<StoreInterface, AuthInterface>((store) => store.auth)

    const handleClick = (to: string) => {
        history.replace(to);
    }
    const logi = () => {
        dispatch(actions.authLogin());
    }

    return (
        <Box className={classes.root}>
            <Container className={classes.content}>
                <Box>
                    <Typography variant="h6">InstaTask</Typography>
                </Box>
                <Box className={classes.action}>
                    <IconButton onClick={() => handleClick('/')} className={classes.noMobileIcon}>
                        <HomeIcon />
                    </IconButton>
                    <IconButton onClick={() => handleClick('/task')} className={classes.noMobileIcon}>
                        <RestoreIcon />
                    </IconButton>
                    <IconButton onClick={() => handleClick('/add')} className={classes.noMobileIcon}>
                        <AddIcon />
                    </IconButton>
                    {auth.isLogin ? (
                        <Box className={classes.user}>
                            <Avatar src={`http://127.0.0.1:8000/${auth.user?.image}`}  alt={auth.user?.name} className="avatar"/>
                            <Typography variant="body1" component="div" className="text" >
                                {auth.user?.name}
                            </Typography>
                        </Box>
                    ) : (
                            <IconButton onClick={logi}>
                                <AccountCircleIcon />
                            </IconButton>
                        )}

                </Box>
            </Container>
        </Box >
    )
}

export default Head;