import React, { Component } from 'react'
import Listdesign from './listdesign';
import {connect} from 'react-redux'
import { getItem } from './../store/actionCreator/getItem';
class list extends Component
 {
     state = {
         abc: this.props.list
     }

    componentDidMount = () =>{
    this.props.getData()
    }
    componentDidUpdate = () =>
    {
        

    }
    
    render() 
    {
        return (
            <div>
                <Listdesign listdata={this.props.list} /> 
            </div>
            )
    }
 }

const mapStateToProps = (state)=>
{
    return{
        list: state.list.list
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return{
    getData: () => {dispatch(getItem())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(list)

