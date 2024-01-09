import './App.css'
import Chart from './components/Chart/Chart'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PriceOption from './components/PriceOption/PriceOption'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <DaisyNav></DaisyNav>
      <h1 className='text-4xl font-bold text-center'>Vite + React</h1>

      <PriceOption></PriceOption>
      <Chart></Chart>

    </>
  )
}

export default App
