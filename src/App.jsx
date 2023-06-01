import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { AllRoutes } from './Routing/AllRoutes'

function App() {

  return (
    <>
      <Router>
        <AllRoutes/>
      </Router>
    </>
  )
}

export default App
