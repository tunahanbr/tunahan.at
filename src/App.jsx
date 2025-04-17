import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AnimatedCursor from "react-animated-cursor";
import Projects from './pages/Projects';
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import FeedbackPlugin from "./components/FeedbackPlugin";

function App() {
  return <>
    <Analytics />
    <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={ <Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
    </Router>
  </>
}

export default App;
