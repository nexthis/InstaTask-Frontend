import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        boxShadow: theme.shadows[3],
    },

    image:{
        width: '100%',
        height: '100%',

    },
    instagramContainer :{
        width: '100%',
        paddingTop: '100%',
        position: 'relative',
    },
    instagram:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        objectFit: 'cover',
    },
    card:{
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(3),
        height: '100%',
    }
}));