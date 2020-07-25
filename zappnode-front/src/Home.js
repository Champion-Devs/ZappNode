import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import NavBar from "./NavBar";
import Footer from "./Footer";

import Features from "./Features";
import Usage from "./Usage";
import Pricing from "./Pricing";
import LogIn from "./LogIn";
import Register from "./Register";

// these will be the main pages for non signed in users
function Home() {
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <Router>
                <Switch>
                    <Route exact path="/features">
                        <Features />
                    </Route>
                    <Route exact path="/usage">
                        <Usage />
                    </Route>
                    <Route exact path="/pricing">
                        <Pricing />
                    </Route>
                    <Route exact path="/logIn">
                        <LogIn />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route path="/">
                        <Features />
                    </Route>
                </Switch>
            </Router>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default Home;