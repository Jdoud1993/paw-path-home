import React from "react";
import PetCard from "./PetCard";


function Pets({pets}) {

    const petList = pets.map((pet) => <PetCard key={pet.id} pet={pet}/>)

    return(
        <div>
            <h1>Pets</h1>
            <div id="pet-disp">
                {petList}
            </div>
        </div>
    )
}

export default Pets