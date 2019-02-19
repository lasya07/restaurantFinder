import React, { Component } from "react";
import { Form, Button, FormGroup, FormControl, FormLabel,Col,ButtonGroup, Modal } from "react-bootstrap";
import "./login.css";
import { withRouter } from 'react-router-dom';
import Home from "./../home/index"
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}


class Login extends Component {
  constructor(props) {
    super(props);
    


    this.state = {
      email: "",
      password: ""
    };

    this.routeChange = this.routeChange.bind(this);
  }

  routeChange(){
    let path = `Home`;
    this.props.history.push(path);
    }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 5;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
 
  
  render() {
    return (
      <Modal.Dialog>
      <Form onSubmit={this.handleSubmit} horizontal>
          <Modal.Header >Login Here!!</Modal.Header>
          <Modal.Body>
           <FormGroup controlId="email">
            <Col componentClass={FormLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" 
                           value = {this.state.email} 
                           onChange = {this.handleChange}
              />
            </Col>
          </FormGroup>
                   
          <FormGroup controlId="password">
            <Col componentClass={FormLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" 
                            value={this.state.password}
                            onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
        </Modal.Body>
          <FormGroup>
            <ButtonGroup>
             {/* <Col smOffset={2} sm={10}>
              <Button  type="submit">Sign in</Button>
            </Col>  */}
            <Col smOffset={2} >
              <Button onClick={this.routeChange} type="submit">Sign in</Button>
            </Col>
            </ButtonGroup>
          </FormGroup>
          <GoogleLogin
                clientId="400438159436-qv64gtq14t805sjglglq7clo5fcdkpda.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
        />
        </Form>
        </Modal.Dialog>
                  
    );
  }
}

export default withRouter(Login);
