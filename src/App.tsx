import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'
import MarketPlace from './components/MarketPlace'
import Engage from './components/Engage'
import Discover from './components/Discover'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <MarketPlace />
      <Engage />
      <Discover />
      <Footer />
    </div>
  )
}

export default App