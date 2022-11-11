import React, {useState} from 'react';
import axios from 'axios';
import image from '../src/images/cripto.png'
import Form from './components/Form'
import Answer from './components/Answer'
import Spinner from './components/Spinner'
import PropTypes from 'prop-types'
        

function App() {

  /* State para los datos */
  const [ data, updateData ] = useState({
    moneda: '',
    comprar: ''
})

/* State para el spiner */
const [cargando, setCargando] = useState(false)

/* State con el resultado de la API */
const [resultado, setResultado] = useState({})

/* State para la ejecucion condicional de los componentes */
const [ condicional, setCondicional ] = useState(false)


 /* Funcion que obtiene el resultado de la API */
  const cotizarCripto = async () =>  {
    
    /* Si esta vacio retorna */
    if(data.moneda === '' || data.comprar === '') return;

    setCargando(true)

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${data.comprar}&tsyms=${data.moneda}`
    const resultado = await axios.get(url)

    setTimeout( () => {
      /* Cargar el Spinner */
      setCargando(false)

      /* Obtener la cotizacion de la API */
      setResultado(resultado.data.DISPLAY[data.comprar][data.moneda])
  }, 3000)
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

          cargando ?   <Spinner /> :
          
          <Answer
          resultado={resultado}
          setCondicional={setCondicional}
          condicional={condicional}
        />
          
          }

      </div>


    </main>
  );
}

Form.propTypes = {
  data: PropTypes.object.isRequired,
  updateData: PropTypes.func.isRequired,
  cotizarCripto: PropTypes.func.isRequired,
  setCondicional: PropTypes.func.isRequired
}

Answer.propTypes = {
  resultado: PropTypes.object.isRequired,
  setCondicional: PropTypes.func.isRequired,
  condicional: PropTypes.bool.isRequired
}

export default App;
