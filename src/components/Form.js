import React, {useState, Fragment} from 'react';
import Error from './Error'
import Button from './Button'

const Form = ({data, updateData, cotizarCripto, setCondicional, condicional}) => {



    const [ error, setError ] = useState(false)

    const getInfo = e => {
        updateData({
            ...data, 
            [e.target.name] : e.target.value
        })
    }


    const {moneda, comprar} = data

    const handleSubmit = e => {
        e.preventDefault()

        // VALIDAR
        if( moneda.trim() === '' || comprar.trim() === '' ){
            setError(true);

            // Quitar el mensaje previo
            setTimeout(() =>{
                setError(false);
            }, 4000)
            return
        }


        // Llamar a la funcion
        cotizarCripto()

        setCondicional(true);

        // Reiniciar el form
        updateData({
            moneda: '',
            comprar: ''
        })
        

    }

  

    return ( 
        <Fragment>
                <h1 className='text-4xl font-bold text-center'>Cotizá tu Cripto</h1>

                <form
                    onSubmit={handleSubmit}
                    className="my-4" >

                    {error? <Error /> : null }

                    
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

                    <label className="font-bold">Criptomoneda</label>
                    <br/>
                    <select 
                        name='comprar'
                        value={comprar}
                        onChange={getInfo}
                        className='shadow-lg w-full p-2 rounded mt-2 bg-gray-200' >
                            <option value="">---Seleccione Criptomoneda---</option>
                            <option value="BTC">Bitcoin</option>
                            <option value="ETH">Etherium</option>
                            <option value="BUSD">BUSD</option>
                            <option value="USDT">Tether</option>
                            <option value="MATIC">Polygon</option>
                            <option value="BNB">Binace Coin</option>
                            <option value="DOGE">Dogecoin</option>
                            <option value="LINK">Chainlink</option>
                            <option value="DAI">Dai</option>
                    </select>
                    
                    <br/>
                    
                    <Button
                        text='Cotizar'
                    />
                   
                   
                </form>
        </Fragment>
        



     );
}
 
export default Form;