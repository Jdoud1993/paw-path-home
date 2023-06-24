import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login({onLogin}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        res.json().then((user) => onLogin(user));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }
  

  return (
    <div className="login">
      <h1>Welcome to Paw Path Home</h1>
      <Form onSubmit={handleSubmit}>
        <p>Please sign in below or sign up for an account</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </Form.Group>
        <Button style={{ margin: "5px" }} variant="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </Form>
      <h2 style={{color:"red"}}>
        {errors}
      </h2>
    </div>
  );
}

export default Login;