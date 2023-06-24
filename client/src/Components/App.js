import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar"
import Pets from "./Pets";


function App() {

    const [pets, setPets] = useState([])

    useEffect(() => {
        fetch()
        .then(res => res.json())
        .then(data => {
            setPets(data)
        })
    }, [])

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
                        <Pets pets= {pets}/>
                    </Route>
                </Switch>
            </div>

        </div>
    )
    
}

export default App;