import React from 'react'
import {connect} from 'react-redux'


function Button(props) {
 
    return (
      
        <div className="button-wrap" onClick={()=> props.children==="="?props.evaluateResult():props.onButtonClick(props.children)}>
            {props.children}
        </div>
    )
}


const mapDispatchToProps=(dispatch)=>{
    return {
       onButtonClick:(val)=> dispatch({type:"ADD_TO_INPUT", payload:val}),
       evaluateResult:(val)=> dispatch({type:"EVAL_INPUT"})
    }
 }
 
 const mapStateToProps=(state)=>{
   return{
     inputVal:state.inputVal
   }
 }

export default connect(mapStateToProps,mapDispatchToProps)(Button)
