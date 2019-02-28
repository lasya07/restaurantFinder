import React, { Component } from "react";
import { Form, Button, FormGroup, FormControl, FormLabel,Col,ButtonGroup, Modal } from "react-bootstrap";
import "./login.css";
<<<<<<< HEAD
=======
import {Route,Router} from "react-router-dom";
>>>>>>> cd51afe677e15d5fadef2c93793c01d6b1a764fc
import { withRouter } from 'react-router-dom';
import Home from "./../home/index"
import Loggedin from "../loggedUser/index";

<<<<<<< HEAD
var body;

class Login extends Component {
  constructor(props) {
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
=======

const responseGoogle = (response) => {
  console.log(response);
}

var body;
let token="";
class Login extends Component {
  constructor(props) {
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
>>>>>>> cd51afe677e15d5fadef2c93793c01d6b1a764fc
    // this.routeChange = this.routeChange.bind(this);
  }
 

  handleSubmit(event) {

<<<<<<< HEAD
   
    
=======
  handleSubmit(event) {

>>>>>>> cd51afe677e15d5fadef2c93793c01d6b1a764fc
    body = {
      email: this.state.email,
      password: this.state.password,
    }
    console.log(body)
    console.log(body.password)
    console.log(body.email)
    const url = "http://localhost:9000/signIn?username="+body.email+"&password="+body.password;
<<<<<<< HEAD
    console.log(url)
=======
    
    console.log(url)

>>>>>>> cd51afe677e15d5fadef2c93793c01d6b1a764fc
    let headers = new Headers();
 
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
 
    headers.append('Access-Control-Allow-origin',url);
<<<<<<< HEAD
    headers.append('Access-Control-Allow-Credentials','true');
 
    headers.append('GET','PUT');
 
    fetch(url, {
       headers:headers,
       method: 'PUT',
       body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(contents => {console.log(contents);
                      
 })
 .catch(()=> console.log("can't access" + url + "response. "))
 

 return({
    
 })
 
  }
=======
   
    headers.append('Access-Control-Allow-Credentials','true');
 
    headers.append('PUT','GET');

    fetch(url, {
            headers:headers,
            method: 'PUT',
            body: JSON.stringify(body)
          })
          .then(response => response.json())
          .then(contents => {console.log(contents);
          
                localStorage.setItem("AccessToken",contents.accessToken);
                let path=`loggedin`
          this.props.history.push(path);
                            
      })
          .catch(()=> console.log("can't access" + url + "response. "))
          

      }

  
>>>>>>> cd51afe677e15d5fadef2c93793c01d6b1a764fc

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 5;
  }

  handlePasswordChange (event) {
    this.setState({
      
      password: event.target.value

    });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value})
<<<<<<< HEAD
  }
   
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login Here!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form  >
              
              <Modal.Body>
              <FormGroup >
                <Col componentClass={FormLabel} sm={2}>
                  Email
                </Col>
                <Col>
                  <FormControl type="email" placeholder="Email" onChange = {this.handleEmailChange}
                  />
                </Col>
              </FormGroup>
                      
              <FormGroup >
                <Col componentClass={FormLabel} sm={2}>
                  Password
                </Col>
                <Col >
                  <FormControl type="password" placeholder="Password" onChange={this.handlePasswordChange}
                  />
                </Col>
              </FormGroup>
            </Modal.Body>
              <FormGroup>
                <ButtonGroup>
                <Col>
                  <Button onClick={this.handleSubmit} type="submit">Sign in</Button>
                </Col>
                </ButtonGroup>
              </FormGroup>
              
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default withRouter(Login);

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

   
  }





  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}




class App extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
=======
>>>>>>> cd51afe677e15d5fadef2c93793c01d6b1a764fc
  }
   
  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
<<<<<<< HEAD
      <ButtonToolbar>
        <Button
          variant="primary"
          onClick={() => this.setState({ modalShow: true })}
        >
          Launch vertically centered modal
        </Button>

        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </ButtonToolbar>
    );
  }
}
=======
      <Modal.Dialog>
      <Form  onSubmit={this.onSubmit}>
          <Modal.Header >Login Here!!</Modal.Header>
          <Modal.Body>
           <FormGroup >
            <Col componentClass={FormLabel} sm={2}>
              Email
            </Col>
            <Col>
              <FormControl type="email" placeholder="Email" onChange = {this.handleEmailChange}
              />
            </Col>
          </FormGroup>
                   
          <FormGroup >
            <Col componentClass={FormLabel} sm={2}>
              Password
            </Col>
            <Col >
              <FormControl type="password" placeholder="Password" onChange={this.handlePasswordChange}
              />
            </Col>
          </FormGroup>
        </Modal.Body>
          <FormGroup>
            <ButtonGroup>
            <Col>
              <Button onClick={this.handleSubmit} type="submit">Sign in</Button>
            </Col>
            </ButtonGroup>
          </FormGroup>
          
        </Form>
        </Modal.Dialog>
                  
    );
  }
}

export default withRouter(Login);
>>>>>>> cd51afe677e15d5fadef2c93793c01d6b1a764fc
