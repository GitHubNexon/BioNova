import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/A - Navbar/Navbar.jsx";
import Home from "./pages/Home Page/Home.jsx";
import Footer from "./components/B - Footer/Footer.jsx";
import Innovation from "./pages/Innovation Page/Innovation.jsx";

function App() {
  return (
    <Router>   
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/purpose" element={<h1 className="text-white">Purpose</h1>} />
        <Route path="/forum" element={<h1 className="text-white">Forum</h1>} />
        <Route path="/people" element={<h1 className="text-white">People</h1>} />
        <Route path="/contact" element={<h1 className="text-white">Contact</h1>} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
