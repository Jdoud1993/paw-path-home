import React, {useEffect, useState, createContext} from "react";
import {Route, Switch} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import NavBar from "./NavBar"
import Pets from "./Pets";
import PetDetail from "./PetDetail";
import MyPets from "./MyPets";
import CommPets from "./CommPets";

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


    function handleAddPet (newPet) {
        const userClone = {...user}
        userClone.posted_pets.push(newPet)
        setUser(userClone)
        setPets([...pets, newPet]) 
        
    }

    function handleUpdatePet(updatedPet) {
        const index = pets.indexOf(pets.find((pet)=> pet.id === updatedPet.id))
        const updatedPets = [...pets]
        updatedPets[index] = updatedPet
        setPets(updatedPets)
        const userClone = {...user} 
        if (user.pets.find((pet) => pet.id === updatedPet.id)) {
            const commentClone = [...user.pets]
            const commentIndex = userClone.pets.indexOf(userClone.pets.find((pet) => pet.id === updatedPet.id))
            commentClone[commentIndex] = updatedPet
            userClone.pets = commentClone
            const postedClone = [...user.posted_pets]
            const postedIndex = userClone.posted_pets.indexOf(userClone.posted_pets.find((pet) => pet.id === updatedPet.id))
            postedClone[postedIndex] = updatedPet
            userClone.posted_pets = postedClone
            setUser(userClone)
        } else    
            {
            const postedClone = [...user.posted_pets]
            const postedIndex = userClone.posted_pets.indexOf(userClone.posted_pets.find((pet) => pet.id === updatedPet.id))
            postedClone[postedIndex] = updatedPet
            userClone.posted_pets = postedClone
            setUser(userClone)
        }
        
    }

    function handleDeletePet(deletedPet) {
        const newPets = pets.filter((pet) => pet.id !== deletedPet.id)
        setPets(newPets)
        if(user.pets.find((pet) => pet.id === deletedPet.id)) {
            const userClone = {...user}
            const newPostedPets = userClone.posted_pets.filter((pet) => pet.id !== deletedPet.id)
            userClone.posted_pets = newPostedPets
            const newCommPets = userClone.pets.filter((pet) => pet.id !== deletedPet.id)
            userClone.pets = newCommPets
            setUser(userClone)
        } else {
        const userClone = {...user}
        const newPostedPets = userClone.posted_pets.filter((pet) => pet.id !== deletedPet.id)
        userClone.posted_pets = newPostedPets
        setUser(userClone)}
    }

    function handleCommStateUpdate (commPet) {
        const userComm = commPet.comments.filter((comm) => comm.username === user.username)
        const userClone = {...user}
        console.log(userComm.length)
        
        if(userComm.length === 1) {
            userClone.pets.push(commPet)
            setUser(userClone)
        } else if(userComm.length > 1) {
            return(null)
        } else {
            const newPets = userClone.pets.filter((pet) => pet.id !== commPet.id)
            userClone.pets = newPets
            setUser(userClone)
        }

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
                            <PetDetail onUpdateCommState={handleCommStateUpdate} />
                        </Route>
                        <Route exact path ="/MyPets">
                            <MyPets onDeletePet={handleDeletePet} onUpdatePet={handleUpdatePet} onAddPet={handleAddPet} />
                        </Route>
                        <Route exact path ="/CommPets">
                            <CommPets onDeletePet={handleDeletePet} onUpdatePet={handleUpdatePet} onAddPet={handleAddPet} />
                        </Route>
                    </Switch>
                </div>

            </div>
        </userContext.Provider>
    )
    
}

export default App;