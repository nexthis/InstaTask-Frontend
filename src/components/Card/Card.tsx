import React from 'react';
import { Link as RouteLink } from 'react-router-dom'

import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography, Avatar, Box, ButtonBase } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';


import { imageURL } from 'utils/url'
import { dateFormat } from 'utils/data'

import { PostsInterface } from 'api/post'

import { useInView } from 'react-intersection-observer'

import VisibilityIcon from '@material-ui/icons/Visibility';
import DoneIcon from '@material-ui/icons/Done';
import ShareIcon from '@material-ui/icons/Share';


import useStyles from './Card.style'
import cx from 'clsx';

interface CardState {
    post: PostsInterface,
}

const CardComponent: React.SFC<CardState> = ({ post }) => {
    const classes = useStyles();
    const [ref, inView] = useInView({triggerOnce: true});


    return (
        <Card className={cx(classes.root)} ref={ref}>
            <RouteLink to={`/task/${post.user.name}/${post.data_key}`} style={{ display: 'contents' }}>
                {inView ?
                    <CardMedia
                        component={ButtonBase}
                        className={classes.media}
                        image={
                            imageURL(post.image)
                        }
                    />
                    :
                    <Skeleton variant="rect" className={classes.media}/>
                }
                
            </RouteLink>
            <CardContent className={classes.content}>

                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar" src={imageURL(post.user.image)} alt={post.user.name}>
                            A
                        </Avatar>
                    }
                    title={post.user.name}
                    subheader={dateFormat(post.created_at, { day: 'numeric', month: 'short', year: 'numeric', })}
                    className={classes.user}
                />

                <Box>
                    <Typography component="h5" variant="h5">
                        Po polubieniu 5 zdjęć
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Otrzymasz 5 polubień i 2 komentarze
                    </Typography>
                </Box>
                <Box className={classes.controls}>
                    <IconButton aria-label="previous">
                        <ShareIcon />
                    </IconButton>
                    <RouteLink to={`/task/${post.user.name}/${post.data_key}`} style={{ display: 'contents' }} >
                        <IconButton aria-label="next">
                            <VisibilityIcon />
                        </IconButton>
                    </RouteLink>
                    <IconButton aria-label="next">
                        <DoneIcon />
                    </IconButton>
                </Box>
            </CardContent>

        </Card>
    );

}

export default CardComponent;