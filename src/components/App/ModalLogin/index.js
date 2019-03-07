import React from "react"

import {Modal, Button,FormGroup, Col, FormLabel, FormControl, ModalBody} from "react-bootstrap"



class ModalLogin extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <>
          <Button variant="link" onClick={this.handleShow}style={{color: '#fffa8b'}}>
            Login
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Login!!</Modal.Title>
            </Modal.Header>
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
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleClose}>
                Login
              </Button>
              <Button variant="danger" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
export default ModalLogin;