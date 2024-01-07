import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import ModeContextProvider from "./context/ModeContext"

function App() {

  return (
    <>
      <BrowserRouter>
        <ModeContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </ModeContextProvider>
      </BrowserRouter>
      
        
        
    </>
  )
}

export default App
