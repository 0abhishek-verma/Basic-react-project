import { useState } from 'react'
import Header from './component/Header/header'
import "./App.css"
import HeroSection from './component/HeroSection'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <HeroSection />
    </div>
  )
}

export default App
