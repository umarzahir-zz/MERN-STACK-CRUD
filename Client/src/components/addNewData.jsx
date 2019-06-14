import {MdQueue} from 'react-icons/md'
import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap'
import Input from './input'
import {connect} from 'react-redux'
import { addProject } from './../store/actionCreator/addProject';

class addNewData extends Component {
    state = {
        modal: false,
        name: ""
    }
    toggle = () =>
    {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    handleSubmitt = ()=>
{
    const axiosData = {
       name: this.state.name
    }
    this.props.add(axiosData)
    this.setState({
        modal: false
    })
}
    iv = (name)=>{
        this.setState({
            name: name
        })
    }
    render() {
        return (
            <div>
                <div className="d-flex  justify-content-center mt-5">
                <Button className="mb-5" color="primary"  onClick={this.toggle}><MdQueue/> </Button>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>ADD NEW DATA</ModalHeader>
                 <ModalBody>
                    <Input iv={this.iv} label="Name" placeholder="Enter Name"/>
                    <Button color="success" onClick={this.handleSubmitt}>Submitt</Button>
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
        add: (name) => dispatch(addProject(name))
    }
}


export default connect(null,mapDispatchToProps)(addNewData)