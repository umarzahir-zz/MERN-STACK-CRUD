import React, { Component } from 'react'
import {MdDeleteForever} from 'react-icons/md'
import { connect } from 'react-redux'
import { ListGroup, Button, ListGroupItem, Container } from 'reactstrap';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import { delteAction } from './../store/actionCreator/delete';
import UpdateData from './updateData';

class listdesign extends Component {

    handleDelete = (data)=>
    {
        this.props.deletea(data)
    }

    render() {
        return (
            <div>
                <Container>
                 <ListGroup>
                  <TransitionGroup>
                      {
                          this.props.listdata.map(({_id, name}) =>
                          (
                              
                              <CSSTransition  key={_id}  classNames="fade" timeout={500} >
                              <ListGroupItem > 
                                  <div className="d-flex flex-row justify-content-between">
                               <Button className="btn-danger btn-sm"   onClick={()=>this.handleDelete(_id)} ><MdDeleteForever/></Button>
                                <p >{name}</p>
                              <UpdateData id={_id} prevData={name}/>
                              </div>
                              </ListGroupItem>
                              </CSSTransition>  
                              
                          )
                              )
                      }
                      </TransitionGroup>
                  </ListGroup>
                </Container>
            </div>
            
        )
    }
}

const mapDispatchToProps = (dispatch)=>
{
    return{
    
        deletea: (data) => dispatch(delteAction(data))
    }
}

export default connect(null, mapDispatchToProps)(listdesign)