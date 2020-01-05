import {makeCalculation} from '../Util.js'

const initialState={
    inputVal:""
}


const reducer=(state=initialState, action)=>{
    const newSate={...state};

   
    if(action.type==="ADD_TO_INPUT"){
        newSate.inputVal=newSate.inputVal+action.payload
    }

    if(action.type==="EVAL_INPUT"){
        newSate.inputVal=makeCalculation(newSate.inputVal)
    }

    if(action.type==="CLEAR_INPUT"){
        newSate.inputVal=""
    }

    return newSate;
}


export default reducer;