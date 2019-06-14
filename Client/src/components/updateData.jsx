import React, { Component } from 'react'    
import { GoPencil } from 'react-icons/go'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { update } from './../store/actionCreator/updateAction';
class updateData extends Component {

    state = {
        newName: this.props.prevData,
        modal: false
    }

    handleChange  = (event) =>
    {
        this.setState({
            newName: event.target.value
        })
    }

    handleSubmitt = () =>
    {
        this.setState({
            modal: false
        })
   const axiosData = {
        newname: this.state.newName
    }
        const idofu = this.props.id
        console.log("updatedata id:", idofu)
        this.props.update(idofu, axiosData)
    }
    toggle = () =>
    {
        this.setState(prevState =>(
            {
                modal: !prevState.modal
            }
        ))
    }
    
    render() {
        return (
            <div>
                <Button color="success btn-sm"  onClick={this.toggle}><GoPencil/></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>UPDATE DATA</ModalHeader>
                 <ModalBody>
                 <InputGroup>
                <InputGroupAddon addonType="prepend">{this.props.label}</InputGroupAddon>
                <Input  onChange={this.handleChange} value={this.state.newName} />
                </InputGroup>
                    <Button color="success" onClick={this.handleSubmitt}>UPDATE</Button>
                </ModalBody>
                <ModalFooter>
                 
                 <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                 </ModalFooter>
                </Modal>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch)=>
{
    return{
        update: (id,da) => dispatch(update(id,da))
    }
   
}
 export default connect(null, mapDispatchToProps)(updateData)