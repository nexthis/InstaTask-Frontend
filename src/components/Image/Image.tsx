import React, { useState, useRef } from 'react';
import {Box} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from './Image.style'
import { imageURL } from 'utils/url'
import { useInView } from 'react-intersection-observer'
import cx from 'clsx';

interface ImageState extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    lazy?: boolean,
    src: string,
    aspectRatio?: [number, number],
}

const isTrue = (value: boolean | any, ret: any) => value? ret : null

const Image: React.SFC<ImageState> = ({lazy,src,aspectRatio,alt,children,className, ...prams }) => {
    const classes = useStyles();
    let image = useRef<HTMLImageElement>(null);
    const [load, setLoad] = useState(true);
    const [ref, inView] = useInView({triggerOnce: true});

    const aspectRatioCal = () =>  {
       if( aspectRatio && image.current )
        return (image.current.offsetWidth / aspectRatio[0]) * aspectRatio[1]
    }

    const onLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) =>{
        setLoad(false);
    }

    return (
        <Box className={cx(isTrue(aspectRatio,classes.aspectContainer), classes.root)} style={{paddingTop: aspectRatioCal()}} >

            {load? <Skeleton variant="rect" className={cx(isTrue(aspectRatio,classes.aspectImage), className)}/> : null }

            <img className={cx(isTrue(load,classes.hidden), isTrue(aspectRatio,classes.aspectImage), className)} 
                onLoad={onLoad} ref={image} src={imageURL(src)} alt={alt} {...prams} /> 
        </Box>
    );

}

export default Image;