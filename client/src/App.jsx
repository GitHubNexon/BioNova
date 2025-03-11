import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHero from "./components/C - Scroll to Top/ScrollToHero.jsx"; 
import Navbar from "./components/A - Navbar/Navbar.jsx";
import Home from "./pages/Home Page/Home.jsx";
import Footer from "./components/B - Footer/Footer.jsx";
import Innovation from "./pages/Innovation Page/Innovation.jsx";
import Purpose from "./pages/Purpose Page/Purpose.jsx";
import Forum from "./pages/Forum Page/Forum.jsx";
import People from "./pages/People's Page/People.jsx";
import Contact from "./pages/Contact Page/Contact.jsx";

function App() {
  return (
    <Router>
      <ScrollToHero /> {/* Makes sure page starts at the top */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/purpose" element={<Purpose />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/people" element={<People />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
