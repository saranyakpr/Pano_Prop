import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SearchProperty from '../pages/SearchProperty'
import PropertyDetails from '../pages/PropertyDetails'

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<SearchProperty />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
    </Routes>
  )
}

export default Routing
