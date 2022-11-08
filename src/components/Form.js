import React, {useState} from 'react';
import Error from './Error'

const Form = ({data, updateData}) => {



    const [ error, setError ] = useState(false)

    const getInfo = e => {
        updateData({
            ...data, 
            [e.target.name] : e.target.value
        })
    }


    const {cantidad, moneda, comprar} = data

    const handleSubmit = e => {
        e.preventDefault()

        // VALIDAR
        if( cantidad.trim() === '' || moneda.trim() === '' || comprar.trim() === '' ){
            setError(true);

            // Quitar el mensaje previo
            setTimeout(() =>{
                setError(false);
            }, 4000)
            return
        }


        

    }

  

    return ( 

        <form
            onSubmit={handleSubmit}
            className="my-4" >

            {error? <Error /> : null }

            <label className="font-bold">Cantidad</label>
            <input
                name='cantidad'
                value={cantidad}
                onChange={getInfo}
                type="number"
                className=' shadow-lg block w-full bg-gray-200 p-2 rounded my-2'
            />
            
            <label className="font-bold">Moneda</label>
            <br/>
            <select 
                name='moneda'
                value={moneda}
                onChange={getInfo}
                className='w-full p-2 rounded my-2 bg-gray-200 shadow-lg' >
                    <option value="">---Seleccione Moneda---</option>
                    <option value="EUR">Euro</option>
                    <option value="USD">Dolar</option>
                    <option value="AUD">Dolar Australiano</option>
                    <option value="BRL">Real</option>
                    <option value="CAD">Dolar Canadiense</option>
                    <option value="ARS">Peso Argentino</option>
                    <option value="UYU">Peso Uruguayo</option>
            </select>

            <br/>

            <label className="font-bold">Comprar</label>
            <br/>
            <select 
                name='comprar'
                value={comprar}
                onChange={getInfo}
                className='shadow-lg w-full p-2 rounded mt-2 bg-gray-200' >
                    <option value="">---Seleccione Criptomoneda---</option>
                    <option value="BTC">Bitcoin</option>
                    <option value="ETH">Etherium</option>
                    <option value="CHL">Chainlink</option>
            </select>
            
            <br/>

            <input type='submit' value='cotizar' className='w-full border-2 mt-4 p-2 text-white font-bold bg-cyan-300 hover:bg-cyan-400 cursor-pointer'/>

        </form>



     );
}
 
export default Form;