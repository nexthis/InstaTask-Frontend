import React, { useEffect } from "react";
import { useEffectSkipFirst } from 'hooks/useEffectSkipFirst'

import { useDispatch, useSelector } from 'react-redux';
import actions from 'store/posts/actions'
import { StoreInterface, PostsInterface } from 'store/storeType'

import { Grid, Box } from '@material-ui/core';
import { useInView } from 'react-intersection-observer'
import Card from 'components/Card/Card'


const Home = () => {

    const dispatch = useDispatch();
    const posts = useSelector<StoreInterface, PostsInterface>((store) => store.posts)
    const [ref, inView] = useInView({ rootMargin: "100px 0px 0px 0px" });

    useEffect(() => {
        //console.log(posts.postIsLoading);
        if (posts.postIsLoading === undefined)
            dispatch(actions.featchPosts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts.postIsLoading])

    useEffectSkipFirst((first) => {
        if (!first && inView && !posts.postIsLoading && posts.postIsLoading !== undefined)
            dispatch(actions.featchPosts('next'))

    }, [inView, posts.postIsLoading])


    return (
        <>
            <Grid container spacing={4} style={{ marginTop: 30 }}>
                {posts.postIsLoading && !posts.postErrorMessage ? 'Ładuję...' : null}
                {posts.postErrorMessage ? posts.postErrorMessage : null}
                {posts.posts?.map((item, index) =>
                    <Grid key={index} item xs={12} lg={6}>
                        <Card post={item} />
                    </Grid>)
                }
                {posts ?
                    <Grid ref={ref} item xs={12}>
                        <Box height={100} />
                    </Grid> : null}

            </Grid>
        </>
    )
}

export default Home;