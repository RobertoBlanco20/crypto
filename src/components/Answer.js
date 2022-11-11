import React, {Fragment} from 'react'

const Answer = ({resultado, setCondicional, condicional}) => {

    const updateData = e =>{
        
        if(condicional){
            setCondicional(false)
        }


    }

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


            <input onClick={updateData} type='submit' value='Volver' className='flex justify-center mx-auto w-full lg:w-3/6  border-2 mt-4 p-2 text-black font-bold bg-yellow-500 rounded hover:bg-yellow-600 cursor-pointer'/>

        </Fragment>

     );
}
 
export default Answer;