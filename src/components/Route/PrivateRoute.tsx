import React from 'react';
import { Redirect, Route,RouteProps } from "react-router-dom";

import { useSelector } from 'react-redux';
import { StoreInterface } from 'store/storeType';


const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    const isLogin = useSelector<StoreInterface, boolean>((store) => store.auth.isLoggedIn)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLogin ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/unauthorized",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    )
}

export default PrivateRoute;