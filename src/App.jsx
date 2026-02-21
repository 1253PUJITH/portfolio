import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

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
