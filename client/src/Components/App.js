import React, {useEffect, useState, createContext} from "react";
import {Route, Switch} from "react-router-dom";
import Login from "./Login"
import Home from "./Home";
import NavBar from "./NavBar"
import Pets from "./Pets";
import PetDetail from "./PetDetail";
import MyPets from "./MyPets"
import CommentedPets from "./CommentedPets";

export const userContext = createContext(null)

function App() {
    
    const [pets, setPets] = useState([])
    const [user, setUser] = useState(null)
  

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

    console.log(pets)
    console.log(user)

    function handleAddPet (newPet) {
        setPets([...pets, newPet])
    }

    function handleUpdatePet(updatedPet) {
        const index = pets.indexOf(pets.find((pet)=> pet.id === updatedPet.id))
        const updatedPets = [...pets]
        updatedPets[index] = updatedPet
        setPets(updatedPets)
    }

    function handleDeletePet(deletedPet) {
        const newPets = pets.filter((pet) => pet.id !== deletedPet.id)
        setPets(newPets)
    }

   

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
                        <Route exact path ="/Pets" >
                            <Pets pets={pets} onDeletePet={handleDeletePet} onUpdatePet={handleUpdatePet}/>
                        </Route>
                        <Route exact path="/Pets/:id">
                            <PetDetail/>
                        </Route>
                        <Route exact path ="/MyPets">
                            <MyPets onDeletePet={handleDeletePet} onUpdatePet={handleUpdatePet} onAddPet={handleAddPet} />
                        </Route>
                        <Route exact path ="/CommentedPets">
                            <CommentedPets onDeletePet={handleDeletePet} onUpdatePet={handleUpdatePet} />
                        </Route>
                    </Switch>
                </div>

            </div>
        </userContext.Provider>
    )
    
}

export default App;