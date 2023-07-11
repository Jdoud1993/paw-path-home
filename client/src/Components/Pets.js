import React from "react";
import PetCard from "./PetCard";


function Pets({pets, onDeletePet, onUpdatePet}) {

    const petList = pets.map((pet) => <PetCard key={pet.id} pet={pet} onUpdatePet={onUpdatePet} onDeletePet={onDeletePet}/>)

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