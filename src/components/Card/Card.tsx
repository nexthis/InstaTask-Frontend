import React from 'react';
import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography, Avatar, Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import ShareIcon from '@material-ui/icons/Share';
import useStyles from './Card.style'
import cx from 'clsx';

interface CardState {
    image?: string
    user?: { name: string, image: string, profil: string },
}

const CardComponent: React.SFC<CardState> = ({ image, user }) => {
    const classes = useStyles();
    return (
        <Card className={cx(classes.root)}>
            <CardMedia
                className={classes.media}
                image={
                    image
                }
            />
            <CardContent className={classes.content}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar" src={user?.image} >
                            A
                        </Avatar>
                    }
                    title={user?.name}
                    subheader="September 14, 2016"
                    className={classes.user}
                />

                <Box>
                    <Typography component="h5" variant="h5"> Po polubieniu 5 zdjęć</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Po polubieniu 5 zdjęć otrzymasz 5 lików   Po polubieniu 5 zdjęć otrzymasz 5 lików
                    </Typography>
                </Box>
                <Box className={classes.controls}>
                    <IconButton aria-label="previous">
                        <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="next">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="next">
                        <DoneIcon />
                    </IconButton>
                </Box>
            </CardContent>

        </Card>
    );

}

export default CardComponent;