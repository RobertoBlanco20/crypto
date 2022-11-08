import React, {useState, useEffect} from 'react';
import axios from 'axios';
import image from '../src/images/cripto.png'
import Form from './components/Form'
import Answer from './components/Answer'

function App() {

  const [ data, updateData ] = useState({
    cantidad: '',
    moneda: '',
    comprar: ''
})

const [resultado, setResultado] = useState({})

useEffect( () => {

  const cotizarCripto = async () =>  {
    
    if(data.moneda === '' || data.comprar === '') return;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${data.comprar}&tsyms=${data.moneda}`
    const resultado = await axios.get(url)
    setResultado(resultado.data.DISPLAY[data.comprar][data.moneda])
    console.log(resultado.data.DISPLAY[data.comprar][data.moneda])
  }

  cotizarCripto()

}, [data.moneda , data.comprar] )

  return (
    
    <main className="flex flex-col align-center  lg:flex lg:justify-around lg:mt-10 lg:flex-wrap">
      
      <div className='mx-auto w-3/6'>
        <img 
          src={image}
          alt='Crypto'
        />
      </div>
      
      <div className='w-5/6 mx-auto lg:w-2/6'>
        <h1 className='text-4xl font-bold text-center'>Cotizá tu Cripto</h1>

        <Form
          data={data}
          updateData={updateData} 
          

        />
      </div>

      <div className='w-5/6 mx-auto lg:w-2/6'>
        <h1 className='text-4xl font-bold text-center'>Cotización</h1>

        <Answer
          resultado={resultado}
        />

      </div>
    </main>
  );
}

export default App;
