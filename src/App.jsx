import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./companat/Navbar";
import PageTransition from "./companat/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  );
}

export default App;

