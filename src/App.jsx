import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./containers/Languages";

import "./App.css";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/home/Home";
import Career from "./pages/career/Career";
import Services from "./pages/services/Services";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Team from "./pages/team/Team";
import Blog from "./pages/blog/Blog";

function App() {
    return (
        <BrowserRouter>
            <LanguageProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
                <Footer />
            </LanguageProvider>
        </BrowserRouter>
    );
}

export default App;
