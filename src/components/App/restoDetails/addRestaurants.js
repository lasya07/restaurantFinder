import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';

export default class addRestaurants extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          file: '',
          imagePreviewUrl:''
        };
    
        
      }
      _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
      }
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
    

      
  render() {

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
    $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
    $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    
    return (
    
      <Form>
        
            <FormGroup row>
                <Label for="exampleEmail" sm={2}>Restaurant name</Label>
                <Col sm={10}>
                    <Input type="text" name="name" id="restaurantName"  />
                </Col>
            </FormGroup>
                
            <FormGroup row>
                <Label for="cityname" sm={2}>City</Label>
                <Col sm={10}>
                    <Input type="select" name="select" id="cityname">
                        <option>Hyderabad</option>
                        <option>Chennai</option>
                        <option>Kolkata</option>
                        <option>Delhi</option>
                        <option>Bangalore</option>
                    </Input> 
                </Col>
            </FormGroup>
                
             <FormGroup row>
                <Label for="phoneNumber" sm={2}>Phone Number</Label>
                <Col sm={10}>
                    <Input type="text" name="name" id="phoneNumber"  />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="restaurantAddress" sm={2}>Address</Label>
                <Col sm={10}>
                    <Input type="textarea" name="text" id="restaurantAddress" />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label for="imageUpload" sm={2}>Upload Image</Label>
                <Col sm={10}>
                    <Input type="file" name="file" id="imageUpload" onChange={(e)=>this._handleImageChange(e)} />
                    <button className="submitButton" type="submit" 
                        onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
                    {/* <FormText color="muted">
                    Upload images of the restaurant 
                    </FormText> */}
                </Col>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </FormGroup>           
            
        
            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        }
      </Form>
    );
  }
}


