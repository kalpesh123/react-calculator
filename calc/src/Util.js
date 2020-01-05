import {evaluate} from 'mathjs'

export const  makeCalculation = (val)=>{

        try{

            let calval=evaluate(val);
            if(!isNaN(calval)){
                return calval
            }else{
                return "Error"
            }
            
        }
        catch(err){
            return "Error"
        }
    
}