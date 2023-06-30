import React, {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Login from "./Login"
import Home from "./Home";
import NavBar from "./NavBar"
import Pets from "./Pets";


function App() {

    const [user, setUser] = useState(null)
    const [pets, setPets] = useState([])

    useEffect(()=>{
        fetch("/authorize")
        .then(r => {
            if(r.ok){
                r.json().then(user => setUser(user))
            }
        })
    }, [])

    useEffect(() => {
        fetch("/pets")
        .then(res => res.json())
        .then(data => {
            setPets(data)
        })
    }, [])

    if (!user) return <Login onLogin={setUser} />

    return(
        <div id="body">
            <div>
                <NavBar onLogin={setUser} user={user}/>
            </div>
            <div id="main">
                <Switch>
                    <Route exact path="/">
                        <Home user={user}/>
                    </Route>
                    <Route exact path ="/Pets">
                        <Pets pets={pets}/>
                    </Route>
                </Switch>
            </div>

        </div>
    )
    
}

export default App;