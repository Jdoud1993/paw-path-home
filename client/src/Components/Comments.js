import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function Comments({comment}) {
    return(
        <ListGroup.Item className="comment" variant="primary">
            <h4>{comment.user.username}:</h4>
            <h5>{comment.body}</h5>
        </ListGroup.Item>
    )
}

export default Comments