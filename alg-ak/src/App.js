import './App.css';
import { useEffect, useState } from 'react';
import { NavLink, Link,  Routes, Route } from 'react-router-dom'
import { grabMenu } from "./services"
import Home from "./components/Home/Home"
import Menu from "./components/Menu/Menu"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  
  const [menu, setMenu] = useState([])
  
  useEffect(() => {
    const getMenu = async () => {
      const res = await grabMenu()
      setMenu(res)
    }
    getMenu()
  }, [])

  return (
    
    <div className="App">
      <Header />
      <nav>
        <NavLink to="/">HOME </NavLink>
        <NavLink to="/menu">OUR MENU</NavLink>
        <NavLink to="/about">ABOUT ANNA</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </nav>
      <div className='main'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu menu={menu} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
