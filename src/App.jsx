import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./temp/navbar";
import Home from "./temppages/Home";
import About from "./temppages/About";
import Skills from "./temppages/Skills";
import Resume from "./temppages/Resume";
import Projects from "./temppages/Projects";
import Contact from "./temppages/Contact";

function App() {
  return (
    <div>
      <div className="relative text-white">
        <div className="absolute">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
