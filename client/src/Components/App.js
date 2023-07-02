import React, {useEffect, useState, createContext} from "react";
import {Route, Switch} from "react-router-dom";
import Login from "./Login"
import Home from "./Home";
import NavBar from "./NavBar"
import Pets from "./Pets";
import PetDetail from "./PetDetail";
import MyPets from "./MyPets"

export const userContext = createContext(null)

function App() {

    
    
    const [user, setUser] = useState(null)
    

    useEffect(()=>{
        fetch("/authorize")
        .then(r => {
            if(r.ok){
                r.json().then(user => setUser(user))
            }
        })
    }, [])

   

    if (!user) return <Login onLogin={setUser} />
    
    return(
        <userContext.Provider value={user}>
            <div id="body">
                <div>
                        <NavBar onLogin={setUser}/>
                </div>
                <div id="main">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path ="/Pets">
                            <Pets/>
                        </Route>
                        <Route exact path="/Pets/:id">
                            <PetDetail/>
                        </Route>
                        <Route exacty path ="/MyPets">
                            <MyPets />
                        </Route>
                    </Switch>
                </div>

            </div>
        </userContext.Provider>
    )
    
}

export default App;