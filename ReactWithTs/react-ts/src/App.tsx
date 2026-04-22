
import './App.css'
import { ChaiCard } from './components/ChaiCard'
import { Counter } from './components/Counter'

function App() {
  
  return (
    <>
      <div>
        <h1>Vite+React</h1>
        <ChaiCard name="Masala Chai" price={3.99} isSpecial={true} />
        <ChaiCard name="Ginger Chai" price={2.99} />
        <Counter />
      </div>
    </>
  )
}

export default App
