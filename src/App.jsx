import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import Footer from './components/Footer.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import "./index.css";

function App() {

  return (
      <BrowserRouter>
      <div className="w-full min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/menu' element={<MenuPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/booking' element={<BookingPage />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
  )
}

export default App
