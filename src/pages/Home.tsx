import React, { useLayoutEffect  } from "react";


import { useDispatch, useSelector } from 'react-redux';
import actions from 'store/posts/actions'
import { StoreInterface, PostsInterface } from 'store/storeType'

import { Grid } from '@material-ui/core';
import Card from 'components/Card/Card'


const Home = () => {

    const dispatch = useDispatch();
    const posts = useSelector<StoreInterface, PostsInterface>((store) => store.posts)


    useLayoutEffect(() => {
        //console.log(posts.postIsLoading);
        if(posts.postIsLoading ===  undefined)
            dispatch(actions.featchPosts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts.postIsLoading]) 



    return (
        <>
            <Grid container spacing={4} style={{ marginTop: 30 }}>
                {posts.postIsLoading && !posts.postErrorMessage ? 'Ładuję...' : null}
                {posts.postErrorMessage ? posts.postErrorMessage : null}
                {posts.posts?.map((item, index) =>
                    <Grid key={index} item xs={12} lg={6}>
                        <Card post={item}/>
                    </Grid>)
                }
            </Grid>
        </>
    )
}

export default Home;