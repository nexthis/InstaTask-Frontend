import React, { useEffect } from "react";

import {  Typography, } from '@material-ui/core'

import { useLocation, useHistory } from 'react-router-dom'
import {  useSelector } from 'react-redux';
import { StoreInterface } from 'store/storeType'

const Unauthorized  = () => {
    const location = useLocation<{from: {pathname: string}}>()
    const history = useHistory();
    const isLogin = useSelector<StoreInterface, boolean>((state) => state.auth.isLoggedIn)

    useEffect(()=>{
      if(isLogin){
        history.push(location.state.from.pathname)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isLogin])

    
    return (
        <>
          <Typography align="center" variant="h6" component="h1">Musisz się najpierw zalogować</Typography>
          {/* <Button>Zaloguj się teraz!</Button> */}
        </>
    )
}

export default Unauthorized;