import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <Form>
      <p>Please sign in below or sign up for an account</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
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