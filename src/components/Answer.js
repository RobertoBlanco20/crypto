import React, {Fragment} from 'react'
import Button from './Button'

const Answer = ({resultado, setCondicional}) => {

/*     const handleUpdate = e => {
        e.preventDefault()

        setTimeout( () => {
            setCondicional(false);
        }, 4000)
        
    } */

    
    if(Object.keys(resultado).length === 0) return null;
    
    return ( 
        <Fragment>
            <h1 className='text-4xl font-bold text-center'>Cotización</h1>

            <p className=' m-2 p-2 text-center font-bold text-2xl'>Valor: {resultado.PRICE }</p>
            
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <p className=' m-2 p-2 text-center font-bolder text-md border-b-2 shadow-md'><span className='font-bold'>Precio más alto de hoy:</span> {resultado.HIGHDAY}</p>
                <p className=' m-2 p-2 text-center font-bolder text-md border-b-2 shadow-md'><span className='font-bold'>Precio más alto última hora:</span> {resultado.HIGHHOUR}</p>
                <p className=' m-2 p-2 text-center font-bolder text-md border-b-2 shadow-md'><span className='font-bold'>Precio más bajo de hoy:</span> {resultado.LOWDAY}</p>
                <p className=' m-2 p-2 text-center font-bolder text-md border-b-2 shadow-md'><span className='font-bold'>Precio más bajo última hora:</span> {resultado.LOWHOUR}</p>
            </div>

            <div>
              <p className=' m-2 p-2 text-center font-bolder text-md border-b-2 shadow-md'><span className='font-bold'>Última actualización:</span> {resultado.LASTUPDATE}</p>
            </div>


            <Button 
                text='Volver'
           /*      onClick={handleUpdate} */
            />
        </Fragment>

     );
}
 
export default Answer;