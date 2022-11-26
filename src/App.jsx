import './App.css'
import CounterApp from './assets/components/CounterApp'
import WeatherApp from './assets/components/WeatherApp'

function App() {

  return (
    <div className="App">
      <h1> My Dual React App</h1>
      <div className='container'>
        <CounterApp/>
        <WeatherApp></WeatherApp>
      </div>
    </div>
  )
}

export default App
