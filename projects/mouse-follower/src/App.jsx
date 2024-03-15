import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('efecto')
  })

  return (
    <>
    <div> clase 3</div>
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? 'Desactivar' : 'activar'} seguir puntero</button>
  </>
  )
}

export default App
