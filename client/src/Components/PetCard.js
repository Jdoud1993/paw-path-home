import Card from 'react-bootstrap/Card';

function PetCard({pet}) {
  return (
          <Card border="primary" style={{ width: '18rem', margin: '10px' }}>
              <Card.Img variant="top" src={pet.image} />
              <Card.Header style={{ color: "red" }}>{pet.lost_or_found}, Please contact at {pet.phone_number}</Card.Header>
              <Card.Body>
                  <Card.Title>Name: {pet.name}</Card.Title>
                  <Card.Title>Species: {pet.species}</Card.Title>
                  <Card.Title>Breed: {pet.breed}</Card.Title>
                  <Card.Title>Sex: {pet.sex}</Card.Title>
              </Card.Body>
          </Card>
  );
}

export default PetCard;