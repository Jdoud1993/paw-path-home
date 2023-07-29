import React, {useState} from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Comments({comment, onUpdateComment, onDeleteComment}) {

    const [isUpdate, setIsUpdate] = useState(false);
    const [errors, setErrors] = useState([])
    const [body, setBody] = useState({
        body:`${comment.body}`
    })

    function handleDelete() {
        fetch(`/comments/${comment.id}`,{
            method: "DELETE",
        })
        .then((res) =>{
            if (res.ok) {
                res.json().then(() => onDeleteComment(comment))
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/comments/${comment.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        .then((res) => {
            if (res.ok) {
                res.json().then((comment) => {
                    onUpdateComment(comment)
                    setIsUpdate(false)
                })
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setBody({
            ...body,
            [name]: value,
        });
    }


    if(isUpdate===false){
    return(
        <ListGroup.Item className="comment" variant="primary">
            <h4>{comment.username}:</h4>
            <h5 className="comment-group">
                {comment.body}
                <div className="button-group">
                <Button variant="primary" size="sm" style={{marginBottom: "5px"}} onClick={()=> {setIsUpdate(true); setErrors([])}}>Update Comment</Button>
                <Button variant="danger" size="sm" onClick={handleDelete}>Delete Comment</Button>
                </div>
            </h5>
            <h5 style={{color: "red"}}>{errors}</h5>
        </ListGroup.Item>
    )} else if (isUpdate===true){
        return(
            <ListGroup.Item className="comment" variant="primary">
                <h4>{comment.username}:</h4>
                <Form style={{ marginTop: "10px" }} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="body" type="text" placeholder="Enter Comment" value={body.body} onChange={handleChange} />
                        <Form.Text className="text-muted">
                            Please be kind and courteous to others when commenting.
                        </Form.Text>
                    </Form.Group>
                    <h5 style={{color:"red"}}>{errors}</h5>
                    <Button variant="primary" type="submit" size="sm">
                        Update Comment
                    </Button>
                </Form>
                <Button variant="primary" style={{marginTop: "5px"}} size="sm" onClick={()=> {setIsUpdate(false); setErrors([])}}>
                        Close
                </Button>
            </ListGroup.Item>
        )
    }
}

export default Comments