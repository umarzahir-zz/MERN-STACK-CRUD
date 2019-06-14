import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

export default class input extends Component {
    state = {
        name: ""
    }
    handleChange = (event) =>
    {
        this.setState({
            name: event.target.value
        })
        return this.props.iv(event.target.value)
    }
   
    render() {
       
        return (
            <div>
                <p>{this.state.name}</p>
                <InputGroup>
                <InputGroupAddon addonType="prepend">{this.props.label}</InputGroupAddon>
                <Input  onChange={this.handleChange} placeholder={this.props.placeholder} />
                </InputGroup>
      <br />
            </div>
        )
    }
}
