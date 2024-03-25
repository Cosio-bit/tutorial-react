import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('efecto',{enabled})
  }, [enabled])

  return (
    <>
    <div> clase 3</div>
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? 'Desactivar' : 'activar'} seguir puntero</button>
  </>
  )
}

export default App
