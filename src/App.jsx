import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/temphome";
import About from "./pages/tempabout";
import Skills from "./pages/tempskills";
import Resume from "./pages/tempresume";
import Projects from "./pages/tempprojects";
import Contact from "./pages/tempcontact";

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
