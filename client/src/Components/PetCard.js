import React, {useState} from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PetCard({pet, onDeletePet, user}) {

  const [errors, setErrors] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const [formData, setFormData] = useState({
    name:`${pet.name}`,
    species:`${pet.species}`,
    breed:`${pet.breed}`,
    phone_number:`${pet.phone_number}`,
    sex:`${pet.sex}`,
    lost_or_found:`${pet.lost_or_found}`,
    image:`${pet.image}`,
    user_id:`${user.id}`

})

  function handleDelete() {
    fetch(`/pets/${pet.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          res.json().then(() => onDeletePet(pet))
        } else {
          res.json().then((err) => setErrors(err.errors))
        }
      })
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
        ...formData,
        [name]: value,
    });
  }

  if(isUpdate === false){
  return (
          <Card border="primary" style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src={pet.image} />
              <Card.Header style={{ color: "red" }}>{pet.lost_or_found}, Please contact at {pet.phone_number}</Card.Header>
              <Card.Body>
                  <Card.Title>Name: {pet.name}</Card.Title>
                  <Card.Title>Species: {pet.species}</Card.Title>
                  <Card.Title>Breed: {pet.breed}</Card.Title>
                  <Card.Title>Sex: {pet.sex}</Card.Title>
                  <div className="button-group">
                    <Button as={Link} to={`/Pets/${pet.id}`} size="sm" style={{marginBottom: "5px"}}>See More Details</Button>
                    <Button variant="primary" size="sm" onClick={() => setIsUpdate(true)} style={{marginBottom: "5px", marginTop:"5px"}}>Update Pet</Button>
                    <Button variant="danger" size="sm" onClick={handleDelete} style={{marginBottom: "5px", marginTop:"5px"}}>Remove Pet</Button>
                    <h6 style={{ color: "red" }}>{errors}</h6>
                  </div>
              </Card.Body>
          </Card>
  );} else if(isUpdate === true){
    return (
          <Card border="primary" style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={pet.image} />
            <Card.Header style={{ color: "red" }}>{pet.lost_or_found}, Please contact at {pet.phone_number}</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Pet Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Pet Name " value={formData.name} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Species</Form.Label>
                    <Form.Control name="species" type="text" placeholder="Enter Species" value={formData.species} onChange={handleChange} />
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
                  <Button variant="primary" type="submit" size="sm">
                    Update Pet
                  </Button>
                  <h5 style={{ color: "red" }}>{errors}</h5>
                </Row>
              </Form>
              <Button variant="primary" type="submit" size="sm" onClick={() => setIsUpdate(false)}>
                    Close
              </Button>
            </Card.Body>
          </Card>
    )
  }
  
}

export default PetCard;