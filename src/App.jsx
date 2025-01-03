import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Footer from "./components/Footer"

function App() {

  let calculateAge = () => {
    console.log(20);
  }

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About cal ={calculateAge} />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
