import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {common } from '@material-ui/core/colors';
export default makeStyles((theme: Theme) => createStyles({
    root:{
        borderBottom: "1px solid #dbdbdb",
        marginBottom: theme.spacing(3),
        backgroundColor: common.white,
        // position:'fixed',
        // width: '100%',
    },
    content:{
        height: '54px',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
    },
    action:{
        marginLeft: 'auto',
    },
    noMobileIcon:{
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'inline-flex',
        },
    }

}));
