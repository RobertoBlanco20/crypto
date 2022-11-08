import React, {Fragment} from 'react'

const Answer = ({resultado}) => {
    
    if(Object.keys(resultado).length === 0) return null;
    
    return ( 
        <Fragment>
            <p>El resultado es: {resultado.PRICE}</p>
        </Fragment>

     );
}
 
export default Answer;