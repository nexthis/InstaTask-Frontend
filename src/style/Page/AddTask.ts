import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
    },
    card: {
        padding: theme.spacing(3),
        height: '100%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3],
        borderRadius: theme.shape.borderRadius,

    },
    mainCard: {
        paddingLeft: theme.spacing(1) + "px!important",
        paddingRight: theme.spacing(1)  + "px!important",
        margin: 0,
        //boxShadow: theme.shadows[4],
    },
    clearPy: {
        paddingTop: '0!important',
        paddingBottom: '0!important',

    },
    button:{
        background: `linear-gradient(45deg, rgba(249,237,50,1) 0%, rgba(238,42,123,1) 75%, rgba(0,42,255,1) 100%)`,
        color: 'white',
        display: 'flex',
        marginLeft: 'auto',
    }
}));