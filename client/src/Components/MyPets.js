import React, {useState, useEffect, useContext} from "react";
import PetCard from "./PetCard"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {userContext} from "./App"


function MyPets() {
    const user = useContext(userContext)
    const [myPets, setMyPets] = useState([])
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name:"",
        species:"",
        breed:"",
        phone_number:"",
        sex:"Unknown",
        lost_or_found:"Lost",
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

    function handleUpdatePet(updatedPet) {
        const index = myPets.indexOf(myPets.find((pet)=> pet.id === updatedPet.id))
        const updatedPets = [...myPets]
        updatedPets[index] = updatedPet
        setMyPets(updatedPets)
    }

    function handleDeletePet(deletedPet) {
        const newPets = myPets.filter((pet) => pet.id !== deletedPet.id)
        setMyPets(newPets)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/pets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then((res) => {
            if(res.ok) {
                res.json().then((data) => {
                    setMyPets([...myPets, data])
                    setFormData({
                        name:"",
                        species:"",
                        breed:"",
                        phone_number:"",
                        sex:"Unknown",
                        lost_or_found:"Lost",
                        image:"",
                        user_id:`${user.id}`
                
                    })
                })
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }

    const myPetList = myPets.map((pet) => <PetCard key={pet.id} pet={pet} onDeletePet={handleDeletePet} onUpdatePet={handleUpdatePet}/>)
    
    return(
        <div>
             <h1>Post a Lost or Found Pet</h1>
            <Form onSubmit={handleSubmit}>
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
                        <Form.Control name="phone_number" placeholder="Example: (888) 888-8888" value={formData.phone_number} onChange={handleChange} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Sex</Form.Label>
                        <Form.Select name="sex" value={formData.sex} onChange={handleChange} >
                            <option value="Unknown">Unknown</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Lost or Found</Form.Label>
                        <Form.Select name="lost_or_found" value={formData.lost_or_found} onChange={handleChange} >
                            <option value="Lost">Lost</option>
                            <option value="Found">Found</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Form.Group>
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" placeholder="Image URL" name="image" value={formData.image} onChange={handleChange} />
                </Form.Group>
                <br></br>
                <Row>
                    <Button variant="primary" type="submit">
                        Post Pet
                    </Button>
                    <h5 style={{color: "red"}}>{errors}</h5>
                </Row>
            </Form>
            <div className="pet-view">
                <h1 className="pet-title">My Posted Pets</h1>
                <p className="pet-title">If a pet has been reunited with its owner please delete your post.</p>
                <div id="pet-disp">
                    {myPetList}
                </div>
            </div>
        </div>
        )
}

export default MyPets