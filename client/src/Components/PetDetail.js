import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Comments from "./Comments"

function PetDetail() {

    const [pet, setPet] = useState(null);

    const {id} = useParams()

    useEffect(() => {
        fetch(`/pets/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setPet(data)
        })
    }, [id])

    if (!pet) return <h2>Loading...</h2>
    console.log(pet)
    return (
        <>
            <Card border="primary">
                <Card.Img variant="top" src={pet.image} style={{ width: "1000px"}}/>
                <Card.Body>
                    <Card.Text className="urgent">
                        {pet.lost_or_found}!! Please call {pet.phone_number}
                    </Card.Text>
                    <Card.Text className="non-urgent">
                        Name: {pet.name}
                    </Card.Text>
                    <Card.Text className="non-urgent">
                        Species: {pet.species}
                    </Card.Text>
                    <Card.Text className="non-urgent">
                        Breed: {pet.breed}
                    </Card.Text>
                    <Card.Text className="non-urgent">
                        Sex: {pet.sex}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card border="primary" style={{marginBottom: "50px"}}>
                <Card.Body>
                    <Card.Text>
                        Comments:
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default PetDetail;