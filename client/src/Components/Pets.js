import React, {useState, useEffect, useContext} from "react";
import {userContext} from "./App";
import PetCard from "./PetCard";


function Pets() {

    const user = useContext(userContext)
    const [pets, setPets] = useState([])

    useEffect(() => {
        fetch("/pets")
        .then(res => res.json())
        .then(data => {
            setPets(data)
        })
    }, [])

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

    const petList = pets.map((pet) => <PetCard key={pet.id} pet={pet} user={user} onUpdatePet={handleUpdatePet} onDeletePet={handleDeletePet}/>)

    return(
        <div className="pet-view">
            <h1 className="pet-title">Please See Below for Our Lost and Found Pets</h1>
            <p className="pet-title">If you find the pet you are looking for below, please click on the "See More Details Button" for more information.</p>
            <div id="pet-disp">
                {petList}
            </div>
        </div>
    )
}

export default Pets