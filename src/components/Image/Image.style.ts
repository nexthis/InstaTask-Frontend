import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'inline',
            "&$aspectContainer":{
                display: 'inherit',
            }
        },
        aspectContainer: {
            width: '100%',
            position: 'relative',
            paddingTop: '100%',
        },
        aspectImage: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
        },
        hidden: {
            visibility: 'hidden',
        }
    }),
);