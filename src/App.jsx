import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/pages/Header'
import Footer from './Components/pages/Footer'
import Routing from './Components/Routes/Routing'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routing />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
