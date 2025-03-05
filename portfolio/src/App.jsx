import 'react'
import Navbar from './components/Navbar/navbar'
import Hero  from './components/Hero/hero'
import About from './components/About/about'
import Contact from './components/Contact/contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App