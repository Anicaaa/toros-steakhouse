import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import './App.css'
import "./index.css";

function App() {

  return (
    <div className="w-full min-h-screen font-sans">

      {/* NAVBAR COMPONENT */}
      <Navbar />

      {/* HERO SECTION */}
      <Hero />
    </div>
  )
}

export default App
