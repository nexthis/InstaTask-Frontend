import React, { useEffect, useState, useRef } from "react";

import { Grid, Box, Typography, CardHeader, Avatar } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Card from 'components/Card/Card';
import Image from 'components/Image/Image'

import { useStyles } from 'style/Page/ViewTask'

import { getPost } from 'api/post'
import { getImages } from 'api/instagram'
import { useApi } from 'hooks/useApi'

import { useSelector } from 'react-redux';
import { getPosstById } from 'store/posts/selectors'

import { useParams } from 'react-router-dom'
import { imageURL } from 'utils/url'
import { dateFormat } from 'utils/data'

import _ from 'lodash';
import cx from 'clsx';

const display = (str: string, value: number | boolean | undefined) => value ? `${str} ${value === true ? '' : value}` : '';



const ViewTask = () => {
    const prams = useParams<{ userame: string, id: string }>()
    const myPost = useSelector((store: any) => getPosstById(store, prams.id));

    const [api, apiState] = useApi<typeof getPost>(getPost, prams.id)
    //const [apiInstagram, apiInstagramState, apiInstagramTool] = useApi<typeof getImages>(getImages, myPost ? myPost.user.instagram_profil : '')

    const [post, setPost] = useState(myPost);

    const classes = useStyles();
    const createAt = dateFormat(post ? post.created_at : 0)

    useEffect(() => {
        if (!myPost && api) {
            setPost(api.post)

            //apiInstagramTool.fetchData([api.post.user.instagram_profil])
        }
        else {
            if (api) {
                ///@ts-ignore
                setPost({ ...post, views: api.post.views })
            }
        }

    }, [api, myPost])

    const isFirstRun = useRef(true);
    useEffect(() => {
        if (!isFirstRun.current) {
            setPost(api?.popular.find((item) => item.data_key === prams.id) || api?.post)
        }
        else {
            isFirstRun.current = false
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prams.id])

    return (
        <>
            <Grid container className={classes.root}  >

                <Grid item xs={12} sm={3}>
                    {post || (post && apiState.isLoading) ?
                        <Image aspectRatio={[1,1]} className={classes.image} src={post.image} alt={"post created by " + post.user.name} />
                        :
                        <Skeleton variant="rect" height={312} />
                    }

                </Grid>
                <Grid item xs={12} sm={9}>
                    <Box className={classes.card}>
                        <CardHeader
                            avatar={
                                post || (post && apiState.isLoading) ?
                                    <Avatar aria-label="avatar" src={imageURL(post.user.image)} >
                                        A
                                    </Avatar>
                                    :
                                    <Skeleton variant="circle" width={40} height={40} />
                            }
                            title={post?.user.name}
                            subheader={createAt}
                        />
                        <Typography variant="h5">{post?.views}</Typography>
                        <Grid container item>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h5">Otrzymasz</Typography>
                                <Typography> {display('Komentarze:', post?.task.comments as number)} </Typography>
                                <Typography> {display('Like:', post?.task.like as number)} </Typography>
                                <Typography> {display('Promocję', post?.task.promo as boolean)} </Typography>
                                <Typography> {display('Follow', post?.task.follow as boolean)} </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h5">Oddasz</Typography>
                                <Typography> {display('Komentarze:', post?.prize.comments as number)} </Typography>
                                <Typography> {display('Like:', post?.prize.like as number)} </Typography>
                                <Typography> {display('Promocję', post?.prize.promo as boolean)} </Typography>
                                <Typography> {display('Follow', post?.prize.follow as boolean)} </Typography>
                            </Grid>

                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            {/* <Box marginTop={5}>
                <Typography align="center" variant="h5" component="h2">Proponowane zdjęcia</Typography>
                <Grid spacing={0} container>
                    {apiInstagram?.map((item, index) => (
                        <Grid item xs={4} sm={3} key={index}>
                            <div >
                                <Image aspectRatio={[16,9]} className={cx( classes.image)} src={item.image} alt="" />
                            </div>
                        </Grid>

                    ))}
                    {apiInstagramState.isLoading ? _.range(10).map((item) => (
                        <Grid item xs={4} sm={3} key={item}>
                            <div className={classes.instagramContainer}>
                                <Skeleton variant="rect" className={cx(classes.instagram, classes.image)}/>
                            </div>
                        </Grid>
                    )) : null}
                </Grid>
            </Box> */}
            <Box marginTop={5}>
                <Typography align="center" variant="h5" component="h2">Popularne Zadania</Typography>
            </Box>

            <Grid style={{ marginTop: 20 }} spacing={5} container justify='center'>
                {api?.popular.map(item =>
                    <Grid lg={6} item key={item.data_key}>
                        <Card post={item} />
                    </Grid>
                )}
                {apiState.isLoading ? _.range(3).map((item) =>
                    <Grid lg={6} item key={item}>
                        <Skeleton variant="rect" width={'100%'} height={232} />
                    </Grid>
                ) : null}
            </Grid>
        </>
    )
}

export default ViewTask;

