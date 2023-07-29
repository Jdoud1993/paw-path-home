import React, {useContext} from "react";
import PetCard from "./PetCard"
import {userContext} from "./App"


function CommentedPets({onDeletePet, onUpdatePet}) {
    const user = useContext(userContext)
    const myPetList = user.pets.map((pet) => <PetCard key={pet.id} pet={pet} onDeletePet={onDeletePet} onUpdatePet={onUpdatePet}/>)
    
    return (
         <div className="pet-view">
            <h1 className="pet-title">My Posted Pets</h1>
            <p className="pet-title">If a pet has been reunited with its owner please delete your post.</p>
            <div id="pet-disp">
                {{myPetList}}
            </div>
        </div>   
    )
}

export default CommentedPets