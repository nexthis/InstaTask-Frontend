import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 'auto',
            borderRadius: theme.spacing(2), // 16px
            transition: 'box-shadow 0.3s, transform 0.3s',
            boxShadow: '0px 5px 20px rgba(34, 35, 58, 0.2)',
            position: 'relative',
            maxWidth: 500,
            marginLeft: 'auto',
            overflow: 'initial',
            background: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: theme.spacing(2),
            marginTop: 25,
            [theme.breakpoints.up('md')]: {
                flexDirection: 'row',
                paddingTop: theme.spacing(2),
                marginTop: 0,
            },
            '&:hover':{
                transform: 'translateY(2px)',
                boxShadow: 'rgba(0, 0, 0, 0.12) 0px 4px 20px 0px',
            }
        },
        media: {
            width: '88%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: theme.spacing(-3),
            height: 0,
            paddingBottom: '40%',
            borderRadius: theme.spacing(2),
            backgroundColor: '#fff',
            position: 'relative',
            [theme.breakpoints.up('md')]: {
                maxWidth: 200,
                width: '100%',
                marginLeft: theme.spacing(-3),
                marginTop: 0,
                transform: 'translateX(-8px)',
            },
            '&:after': {
                content: '" "',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
                borderRadius: theme.spacing(2), // 16
                opacity: 0.5,
            },
        },
        content: {
            padding: '10px 24px !important',
            height: '100%',
            [theme.breakpoints.up('md')]: {
                width: '100%',
            },
        },
        cta: {
            marginTop: 24,
            textTransform: 'initial',
        },
        controls: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: 10,
            // paddingLeft: theme.spacing(1),
            // paddingBottom: theme.spacing(1),
        },
        user: {
            padding: 0,
            marginTop: 15,
            marginBottom: 10,
            [theme.breakpoints.up('md')]: {
                marginTop: 0,
            },
        }
    }),
);