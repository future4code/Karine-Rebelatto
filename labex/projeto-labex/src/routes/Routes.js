import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/HomePage';

import App from "../App";

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Homepage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;