import React from 'react';
import './App.css';
import Button from './Components/Button'
import Input from './Components/Input'
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
        <div className='row'> 
            <Input/>
        </div>
        <div  className="row">
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
              <Button>+</Button>
        </div>
        <div  className="row">
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button>-</Button>
        </div>
        <div  className="row">
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>*</Button>
        </div>

        <div  className="row">
              <Button>0</Button>
              <Button>.</Button>
              <Button>=</Button>
              <Button>/</Button>
              
             
        </div>
        <div  className="row">
            <div className="clear-input" onClick={()=> props.clearInput()}>CE</div>
        </div>
    </div>
  );
}


const mapDispatchToProps=(dispatch)=>{
   return {
      clearInput:()=> dispatch({type:"CLEAR_INPUT"})
   }
}

const mapStateToProps=(state)=>{
  return{
    inputVal:state.inputVal
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
