import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Comments from "./Comments";
import ListGroup from 'react-bootstrap/ListGroup';
import CommentForm from './CommentForm'

function PetDetail({user}) {

    const [pet, setPet] = useState(null);
    const [comments, setComments] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`/pets/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setPet(data)
            setComments(data.comments)
        })
    }, [id])

    function handleAddComment(newComment) {
        console.log(newComment)
        // setComments([...comments, newComment])
    }

    if (!pet) return <h2>Loading...</h2>
    const commentList = comments.map((comment) => <Comments key={comment.id} comment={comment}/>)
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
            <Card border="primary" style={{marginBottom: "25px", marginTop: "25px"}}>
                <Card.Body>
                    <CommentForm pet={pet} user={user} onAddComment={handleAddComment}/>
                </Card.Body>
            </Card>
            <Card border="primary" style={{marginBottom: "50px"}}>
                <Card.Body>
                    <Card.Text className="non-urgent">
                        Comments:
                    </Card.Text>
                    <ListGroup>
                        {commentList}
                    </ListGroup>
                </Card.Body>
            </Card>
        </>
    );
}

export default PetDetail;