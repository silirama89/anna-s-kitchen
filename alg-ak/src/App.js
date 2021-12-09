import { Link, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from "./components/Home/Home"
import Menu from "./components/Menu/Menu"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Our Menu</Link>
        <Link to="/about">About Anna</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
