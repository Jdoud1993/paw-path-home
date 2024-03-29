import React, {useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {userContext} from "./App"

function CommentForm({pet, onAddComment}) {

    const user = useContext(userContext) 

    const [addComment, setAddComment] = useState(false)
    const [formData, setFormData] = useState({
        body:"",
        user_id:`${user.id}`,
        pet_id: `${pet.id}`
    })

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((pet => {
            onAddComment(pet)
            setAddComment(false)
        }))
    }
    
    if(addComment === true)
    return (
        <div>
            <Button variant="primary" size="sm" onClick={() => setAddComment(false)} >
                Close Comment
            </Button>
            <Form style={{marginTop: "10px"}} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name="body" type="text" placeholder="Enter Comment" value={formData.body} onChange={handleChange} />
                    <Form.Text className="text-muted">
                        Please be kind and courteous to others when commenting.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add Comment
                </Button>
            </Form>
        </div>
    )
    else return (
        <Button variant="primary" size="sm" onClick={() => setAddComment(true)} >
            Add Comment
        </Button>
    )
}

export default CommentForm