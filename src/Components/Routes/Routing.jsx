import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SearchProperty from '../pages/SearchProperty'

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<SearchProperty />} />
    </Routes>
  )
}

export default Routing
