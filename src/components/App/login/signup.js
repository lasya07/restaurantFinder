import React, { Component } from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel,Col,PageHeader } from "react-bootstrap";


 class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 5 && this.state.password == this.state.confirmPassword;
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
            <Form onSubmit={this.handleSubmit}>
            
            <Form horizontal>
                <PageHeader>
                    Register Here!! 
                </PageHeader>

                <FormGroup controlId="email">
                    <Col componentClass={ControlLabel} sm={2}> Email </Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="Email" 
                                    value = {this.state.email} 
                                    onChange = {this.handleChange}
                        />
                    </Col>
                </FormGroup>
                
                <FormGroup controlId="password">
                    <Col componentClass={ControlLabel} sm={2}>Password</Col>
                    <Col sm={10}>
                    <FormControl type="password" placeholder="Password" 
                                    value={this.state.password}
                                    onChange={this.handleChange}
                    />
                    </Col>
                </FormGroup>

                <FormGroup controlId="confirmPassword">
                    <Col componentClass={ControlLabel} sm={2}>Password</Col>
                    <Col sm={10}>
                    <FormControl type="password" placeholder=" Confirm Password" 
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                    />
                    </Col>
                </FormGroup>  
            
                <FormGroup>
                    
                    <Col smOffset={2} sm={10}>
                    <Button href="#" type="submit" disabled={!this.validateForm()} >Register</Button>
                    </Col>
                                
                </FormGroup>
            </Form>
           </Form>           
    );
  }
}

export default Signup;