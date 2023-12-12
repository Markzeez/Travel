import react from "react"
import Navbar from "./Component/Navbar"
import Hero from './Component/Hero'
import Destination from './Component/Destination'
import Search from './Component/Search'
import Selects from './Component/Selects'

import Footer from "./Component/Footer"
import Carousel from "./Component/Carousel"


function App() {


  return (
    <div className=''>
        <Navbar/>
        <Hero/>
        <Destination/>
        <Search/>
        <Selects/>
        <Carousel/>
        <Footer/>
    </div>
  )
}

export default App
