import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar"
import Pets from "./Pets";


function App() {


    return(
        <div id="body">
            <div>
                <NavBar/>
            </div>
            <div id="main">
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path ="/Pets">
                        <Pets/>
                    </Route>
                </Switch>
            </div>

        </div>
    )
    
}

export default App;