import React from 'react'
import {connect} from 'react-redux'


const Input=(props)=> {
    return (
        <div className="input-wrap">
            {props.inputVal}
        </div>
    )
}





 
 const mapStateToProps=(state)=>{
   return{
     inputVal:state.inputVal
   }
 }


export default connect(mapStateToProps)(Input)
