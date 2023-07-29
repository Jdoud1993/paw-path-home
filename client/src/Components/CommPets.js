import React, {useContext} from "react";
import {userContext} from "./App";
import PetCard from "./PetCard";

function CommPets ({onDeletePet, onUpdatePet}) {
    
    const user = useContext(userContext)
    const CommPetList = user.pets.map((pet) => <PetCard key={pet.id} pet={pet} onDeletePet={onDeletePet} onUpdatePet={onUpdatePet}/>)

    return(
        <div className="pet-view">
            <h1 className="pet-title">Commented Pets</h1>
            <p className="pet-title">Please see more detail for pet comments.</p>
            <div id="pet-disp">
                {CommPetList}
            </div>
        </div>
    )
}

export default CommPets