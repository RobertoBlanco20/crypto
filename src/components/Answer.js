import React, {Fragment} from 'react'
import Button from './Button'

const Answer = ({resultado}) => {
    
    if(Object.keys(resultado).length === 0) return null;
    
    return ( 
        <Fragment>
            <h1 className='text-4xl font-bold text-center'>Cotización</h1>

            <p className=' m-2 p-2 text-center font-bold text-2xl'>Valor: {resultado.PRICE }</p>
            
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <p className=' m-2 p-2 text-center font-bolder text-md'>Última actualización: {resultado.LASTUPDATE}</p>
                <p className=' m-2 p-2 text-center font-bolder text-md'>Precio más alto de hoy: {resultado.HIGHDAY}</p>
                <p className=' m-2 p-2 text-center font-bolder text-md'>Precio más alto de esta hora: {resultado.HIGHHOUR}</p>
                <p className=' m-2 p-2 text-center font-bolder text-md'>Precio más bajo de hoy: {resultado.LOWDAY}</p>
                <p className=' m-2 p-2 text-center font-bolder text-md'>Precio más bajo de esta hora: {resultado.LOWHOUR}</p>
            </div>


            <Button 
                text='Volver'
                
            />
        </Fragment>

     );
}
 
export default Answer;