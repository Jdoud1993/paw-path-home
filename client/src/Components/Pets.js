import React, {useState, useEffect} from "react";
import PetCard from "./PetCard";


function Pets() {

    const [pets, setPets] = useState([])

    useEffect(() => {
        fetch("/pets")
        .then(res => res.json())
        .then(data => {
            setPets(data)
        })
    }, [])

    const petList = pets.map((pet) => <PetCard key={pet.id} pet={pet}/>)

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