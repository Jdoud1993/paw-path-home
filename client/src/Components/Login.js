import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login({setCurrentUser}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')
  const [errors, setErrors] = useState([])

  function onSubmit(e) {
    e.preventDefault()
    const user = {
      username,
      password
    }
    fetch("http://localhost:3000/users",{
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    })
    .then(res => {
      if(res.ok) {
        res.json().then(setCurrentUser)
      } else {
        res.json().then( e => setErrors(Object.entries(e.error).flat()))
      }
    })
  }
  

  return (
    <Form>
      <p>Please sign in below or sign up for an account</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      </Form.Group>
      <Button style={{margin: "5px"}} variant="primary" type="submit">
        Login
      </Button>
      <Button style={{margin: "5px"}} variant="primary" type="submit">
        SignUp
      </Button>
    </Form>
  );
}

export default Login;