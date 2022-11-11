import React from 'react'

const Button = ({text, setCondicional, condicional}) => {



    

    return ( 
        <input type='submit' value={text} className='flex justify-center mx-auto w-full lg:w-3/6  border-2 mt-4 p-2 text-black font-bold bg-yellow-500 rounded hover:bg-yellow-600 cursor-pointer'/>
     );
    }
 
export default Button;