import React, { useState, useEffect, useMemo, ChangeEvent } from "react";

import { useDispatch, useSelector } from 'react-redux';
import actions from 'store/posts/actions';
import { StoreInterface } from 'store/storeType'

import { useStyles } from 'style/Page/AddTask'
import { getImage } from 'api/instagram'
import { TaskInterface, AddTaskInterface } from 'api/post'

import { Box, Grid, Typography, Slider, Switch, IconButton, Button, TextField, Link, CircularProgress, useTheme } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import VisibilityIcon from '@material-ui/icons/Visibility';

import { Send } from '@material-ui/icons';
import cx from 'clsx';


enum TaskType {
    comments = "comments",
    like = "like",
    follow = "follow",
    promo = "promo",
}

const AddTask = () => {
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const addPost = useSelector<StoreInterface, AddTaskInterface | null>((store) => store.posts.addPost)
    const userName = useSelector<StoreInterface, string>((store) => store.auth.user?.name as string)

    const [image, setImage] = useState({ isLoading: false, url: '', image: '', validUser: false, validImage: false, });
    const [url, setUrl] = useState('');
    const [task, setTask] = useState<TaskInterface>({ comments: 0, like: 3, follow: false, promo: false });
    const [prize, setPrize] = useState<TaskInterface>({ comments: 0, like: 3, follow: false, promo: false });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    let defaultPrize = useMemo(() => ({ like: addPost?.prize === undefined ? prize.like : addPost.prize.like, comments: addPost?.prize === undefined ? prize.comments : addPost.prize.comments }), [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let defaultTask = useMemo(() => ({ like: addPost?.task === undefined ? task.like : addPost.task.like, comments: addPost?.task === undefined ? task.comments : addPost.task.comments }), [])

    useEffect(() => {
        if (addPost?.image !== undefined) {
            // setImage(addPost.image)
            setTask(addPost.task)
            setPrize(addPost.prize)
            console.log(addPost, 'asd');

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {

        if (url.includes('https://www.instagram.com/p/')) {
            setImage({ ...image, isLoading: true });
            getImage(url).then((data) => {
                if (data?.image !== undefined) {
                    if(userName === data.username)
                        setImage({ isLoading: false, url: url, image: data.image, validUser: true, validImage: true, });
                    else 
                        setImage({ isLoading: false, url: url, image: data.image, validUser: false, validImage: true, });
                }
                else {
                    setImage({ isLoading: false, url: '', image: '', validUser: false, validImage: false, });
                }

            })
        }
        else{
            setImage({ isLoading: false, url: '', image: '', validUser: false, validImage: false, });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    useEffect(() => {
        if (JSON.stringify(addPost) !== JSON.stringify({ task, prize, image }))
            storeData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prize, image, task])

    const storeData = () => dispatch(actions.addPostSetData({ task, prize, image:{image: image.image, url: image.url }}))

    const setTaskEvent = (e: ChangeEvent<{}>, value: number | number[] | boolean, type: TaskType) => {
        setTask({ ...task, [type]: value })

    }

    const setPrizeEvent = (e: ChangeEvent<{}>, value: number | number[] | boolean, type: TaskType) => {
        setPrize({ ...prize, [type]: value })
    }

    return (
        <Grid container spacing={3} className={classes.root}>


            <Grid item xs={12} className={classes.clearPy} >
                <Box display="flex" flexDirection="row" justifyContent="flex-end">
                    <Link href="https://www.facebook.com/Insta4Task/" rel="noopener noreferrer" target="_blank">
                        <IconButton ><FacebookIcon /></IconButton>
                    </Link>
                    <IconButton><VisibilityIcon /></IconButton>
                </Box>
            </Grid>


            <Grid item xs={12} md={2} >

                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" className={classes.card}>
                    {image.isLoading ?
                        <CircularProgress /> :
                        (
                            <>
                                <Typography style={{ width: '100%' }} variant="caption">
                                    <Box width={10} height={10} marginRight={0.5} display="inline-block" borderRadius="100%" bgcolor={image.validImage ? theme.palette.success.dark : theme.palette.error.dark} />
                                    Poprawne zdjęcie
                                </Typography>
                                <Typography style={{ width: '100%' }} variant="caption">
                                    <Box width={10} height={10} marginRight={0.5} display="inline-block" borderRadius="100%" bgcolor={image.validUser ? theme.palette.success.dark : theme.palette.error.dark} />
                                        Twoje zdjęcie
                                </Typography>
                            </>
                        )}
                </Box>
            </Grid>

            <Grid item xs={12} md={10} >
                <Box display="flex" flexDirection="column" justifyContent="center" className={cx(classes.card)}>
                    <TextField value={url} onChange={(e) => setUrl(e.currentTarget.value)} fullWidth label="Zdjęcie" variant="outlined" />
                </Box>
            </Grid>

            <Grid container item xs={12} md={6} spacing={1} className={classes.mainCard}>
                <Grid item xs={12}>
                    <Typography variant="h6" component="p">Czego oczekujesz?</Typography>
                </Grid>
                <Grid item xs={8} md={9}>
                    <Box className={classes.card}>
                        <Typography>Like: {task.like}</Typography>
                        <Slider onChangeCommitted={(e, v) => setTaskEvent(e, v, TaskType.like)} defaultValue={defaultTask.like} valueLabelDisplay="auto" min={0} max={10} aria-labelledby="Like" />
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" flexDirection="column" alignItems="center" className={classes.card}>
                        <Typography>Follow</Typography>
                        <Switch checked={task.follow} onChange={(e) => setTaskEvent(e, e.target.checked, TaskType.follow)} />
                    </Box>
                </Grid>
                <Grid item xs={8} md={9}>
                    <Box className={classes.card}>
                        <Typography >Komentarze: {task.comments}</Typography>
                        <Slider onChangeCommitted={(e, v) => setTaskEvent(e, v, TaskType.comments)} defaultValue={defaultTask.comments} valueLabelDisplay="auto" min={0} max={5} aria-labelledby="Like" />
                    </Box>
                </Grid>
                <Grid item xs={4} md={3} >
                    <Box display="flex" flexDirection="column" alignItems="center" className={classes.card}>
                        <Typography>Promo</Typography>
                        <Switch checked={task.promo} onChange={(e) => setTaskEvent(e, e.target.checked, TaskType.promo)} />
                    </Box>
                </Grid>
            </Grid>

            <Grid container item xs={12} md={6} spacing={1} className={classes.mainCard}>
                <Grid item xs={12}>
                    <Typography variant="h6" component="p">Co oddasz?</Typography>
                </Grid>
                <Grid item xs={8} md={9}>
                    <Box className={classes.card}>
                        <Typography>Like: {prize.like}</Typography>
                        <Slider onChangeCommitted={(e, v) => setPrizeEvent(e, v, TaskType.like)} defaultValue={defaultPrize.like} valueLabelDisplay="auto" min={0} max={10} aria-labelledby="Like" />
                    </Box>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Box display="flex" flexDirection="column" alignItems="center" className={classes.card}>
                        <Typography>Follow</Typography>
                        <Switch checked={prize.follow} onChange={(e) => setPrizeEvent(e, e.target.checked, TaskType.follow)} />
                    </Box>
                </Grid>
                <Grid item xs={8} md={9}>
                    <Box className={classes.card}>
                        <Typography >Komentarze: {prize.comments}</Typography>
                        <Slider onChangeCommitted={(e, v) => setPrizeEvent(e, v, TaskType.comments)} defaultValue={defaultPrize.comments} valueLabelDisplay="auto" min={0} max={5} aria-labelledby="Like" />
                    </Box>
                </Grid>
                <Grid item xs={4} md={3} >
                    <Box display="flex" flexDirection="column" alignItems="center" className={classes.card}>
                        <Typography>Promo</Typography>
                        <Switch checked={prize.promo} onChange={(e) => setPrizeEvent(e, e.target.checked, TaskType.promo)} />
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Button size="large" endIcon={<Send />} className={classes.button}>Dodaj Zadanie</Button>
            </Grid>
        </Grid>
    )
}


const Modal = () =>  {

}

export default AddTask;