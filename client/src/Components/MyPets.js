import React, {useState, useEffect} from "react";
import PetCard from "./PetCard"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MyPets({user}) {
    
    const [myPets, setMyPets] = useState([])
    const [formData, setFormData] = useState({
        name:"",
        species:"",
        breed:"",
        phone_number:"",
        sex:"Unknown",
        lost_or_found:"",
        image:"",
        user_id:`${user.id}`

    })

    useEffect(() => {
        fetch("/mypets")
        .then(res => res.json())
        .then(data => {
            setMyPets(data)
        })
    }, [])

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const myPetList = myPets.map((pet) => <PetCard key={pet.id} pet={pet}/>)
    
    return(
        <div className="pet-view">
            <h1>Post a Lost or Found Pet</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Pet Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Enter Pet Name " value={formData.name} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Species</Form.Label>
                        <Form.Control name="species" type="text" placeholder="Enter Species" value={formData.species} onChange={handleChange}  />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Breed</Form.Label>
                        <Form.Control name="breed" type="text" placeholder="Enter Breed" value={formData.breed} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control name="phone_number" type="password" placeholder="Example: (888) 888-8888" value={formData.phone_number} onChange={handleChange} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Sex</Form.Label>
                        <Form.Select name="sex" value={formData.sex} onChange={handleChange} >
                            <option>Unknown</option>
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Lost or Found</Form.Label>
                        <Form.Select name="lost_or_found" defaultValue="Lost" value={formData.lost_or_found} onChange={handleChange} >
                            <option>Lost</option>
                            <option>Found</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Form.Group>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" placeholder="Image URL" value={formData.image} onChange={handleChange} />
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit">
                    Post Pet
                </Button>
            </Form>
            <h1 className="pet-title">My Posted Pets</h1>
            <p className="pet-title">If a pet has been reunited with its owner please delete your post.</p>
            <div id="pet-disp">
                {myPetList}
            </div>
        </div>
        )
}

export default MyPets