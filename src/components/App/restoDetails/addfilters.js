import React from 'react';
import {Form, FormGroup, Label, Input,Button} from 'reactstrap'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'


export default class addfilters extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
          volume: 0
        }
      }
      handleChangeStart = () => {
        console.log('Change event started')
      };
      handleOnChange (value) {
        this.setState({
          volume: value
        })
      }
      handleChangeComplete = () => {
        console.log('Change event completed')
      };

    render () {
        const { volume } = this.state
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
                <FormGroup check>
                    <Label check>
                        <Input type = "checkbox" /> 500-1000
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type = "checkbox" /> 350-500
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type = "checkbox" /> 250-350
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type = "checkbox" /> less than 250
                    </Label>
                </FormGroup>
                                 
                {/* <Slider
                    min={0}
                    max={100}
                    value={volume}
                    orientation="horizontal"
                    onChangeStart={this.handleChangeStart}
                    onChange={this.handleOnChange}
                    onChangeComplete={this.handleChangeComplete}
                /> */}
              
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