import './App.css'
import CounterApp from './assets/components/CounterApp'
import Autor from './assets/components/layout/Autor'
import WeatherApp from './assets/components/WeatherApp'

function App() {

  return (
    <div className="App">
      <h1> My Dual React App</h1>
      <div className='container'>
        <CounterApp/>
        <WeatherApp/>
      </div>
      <Autor/>
    </div>
  )
}

export default App
