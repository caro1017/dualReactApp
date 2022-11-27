import React,{useState} from 'react'
import Boton from './layout/Boton'
import DisplayNumber from './layout/DisplayNumber'
import './CounterApp.css'

const CounterApp = () => {
    // const [state,setState] = useState (estadoInicial)
    const [display, setDisplay] = useState(0)

    function decrement(){
        setDisplay(display-1)
    }

    function increment(){
        setDisplay(display+1)
    }

    function reset(){
        setDisplay(0)
    }

  return (
    <div className='counter'>
        <h2 className='text-3xl'>CounterApp</h2>
        <DisplayNumber>{display}</DisplayNumber>
        <div>
            <Boton funcion={decrement} > <i class='bx bx-chevron-down'></i> </Boton>
            <Boton funcion={reset}> <i class='bx bx-reset bx-spin bx-flip-horizontal' ></i></Boton>
            <Boton funcion={increment}>  <i class='bx bx-chevron-up'></i></Boton>
        </div>
    </div>
  )
}

export default CounterApp