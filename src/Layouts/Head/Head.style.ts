import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => createStyles({
    root:{
        borderBottom: `1px solid ${theme.palette.type === "light" ? theme.palette.grey[300] : theme.palette.grey[900]}`,
        marginBottom: theme.spacing(3),
        backgroundColor: theme.palette.background.paper,
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
    },
    user:{
        display: 'inline-flex',
        padding: 12,
        verticalAlign: 'middle',
        alignItems: 'center',
        '& .avatar':{
            width: theme.spacing(3.5),
            height: theme.spacing(3.5),
        },
        '& .text':{
            marginLeft: 10,
            [theme.breakpoints.down('xs')]: {
                display: 'none',
            },
        },
    },



}));
