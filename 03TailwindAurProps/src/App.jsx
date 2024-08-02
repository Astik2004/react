import './App.css'
import Card from './component/card';
import Bg from './component/bd';
function App() {

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
    <Card username="Astik Yadav" />
    <Card username="Ankit Yadav" btntext="Veiw Profile"/>
    <Bg/>
    </>
  )
}

export default App
