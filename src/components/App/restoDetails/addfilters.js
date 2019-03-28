import React from 'react';
import {Form, FormGroup, Label, Input,Button} from 'reactstrap'
import Slider from 'react-rangeslider'

export default class addfilters extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
          volume: 0
        }
      }
    
      handleOnChange (value) {
        this.setState({
          volume: value
        })
      }

    render () {
        let { volume } = this.state
        return (
            <Form>
                <legend>Cuisines </legend>
                <FormGroup check>
                    <Label check>
                        <Input type = "checkbox" /> Italian 
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type = "checkbox" /> Thai
                    </Label>
                </FormGroup>
                <legend>Cost </legend>
                <FormGroup>
                <Slider
                    value={volume}
                    orientation="vertical"
                    onChange={this.handleOnChange}
                />
                </FormGroup>
                <legend>More Filters</legend>
                <FormGroup check>
                    <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Veg
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Non-Veg
                    </Label>
                </FormGroup>
                
                <Label>Open/close</Label>
                <FormGroup check>
                    <Label check>
                    <Input type="radio" name="radio3" />{' '}
                    Open only
                    </Label>
                </FormGroup>                
                <legend>Sort </legend>
                <FormGroup>
                <Button color="link">Rating--high to low</Button>
                </FormGroup>
                <FormGroup>
                <Button color="link">Cost--high to low</Button> 
                </FormGroup>                        
            </Form>
        );
    }
}