import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </>
  )
}

export default App
