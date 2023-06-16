import React from "react";
import {Route, Switch} from "react-router-dom";
import BlueNavbar from "./BlueNavbar";
import Home from "./Home";
import Pets from "./Pets";


function App() {


    return(
        <div id="body">
            <div>
                <BlueNavbar/>
            </div>
            <div>
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