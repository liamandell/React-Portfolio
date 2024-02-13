import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Home from "./pages/Home.js";
import Projects from "./pages/Projects";
 import Experience from "./pages/Experience";
 import Navbar from "./pages/Components/Navbar";
 import Footer from "./pages/Components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <ProjectDisplay />
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </Router> 
    </div>
  );
}

export default App;