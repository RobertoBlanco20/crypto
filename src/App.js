import React, {useState} from 'react';
import axios from 'axios';
import image from '../src/images/cripto.png'
import Form from './components/Form'
import Answer from './components/Answer'

function App() {

  const [ data, updateData ] = useState({
    moneda: '',
    comprar: ''
})

const [resultado, setResultado] = useState({})
const [ condicional, setCondicional ] = useState(false)


  const cotizarCripto = async () =>  {
    
    if(data.moneda === '' || data.comprar === '') return;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${data.comprar}&tsyms=${data.moneda}`
    const resultado = await axios.get(url)
    setResultado(resultado.data.DISPLAY[data.comprar][data.moneda])
    console.log(resultado.data.DISPLAY[data.comprar][data.moneda])
  }


  return (
    
    <main className="flex flex-col align-center  lg:flex lg:justify-around lg:mt-10 lg:flex-wrap">
      
      <div className='mx-auto w-3/6'>
        <img 
          src={image}
          alt='Crypto'
        />
      </div>
      
      <div className='w-5/6 mx-auto lg:w-4/6'>
       

        { !condicional  ?         
          <Form
            data={data}
            updateData={updateData} 
            cotizarCripto={cotizarCripto}
            setCondicional={setCondicional}
          /> : 
          
          <Answer
          resultado={resultado}
          setCondicional={setCondicional}
        />
          
          }

      </div>


    </main>
  );
}

export default App;
