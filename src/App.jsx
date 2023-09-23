
import './App.css'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Career from './pages/career/Career'
import Navbar from './components/navbar/Navbar'
import { LanguageProvider } from './containers/Languages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './pages/services/Services'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'


function App() {


  return (
    <BrowserRouter>
        <LanguageProvider>
        <Navbar/>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/career' element={<Career/>}/>
             <Route path='/services' element={<Services/>}/>
             <Route path='/projects' element={<Projects/>}/>
             <Route path='/contact' element={<Contact/>}/>
          </Routes>
        <Footer/>
      </LanguageProvider>
  


    </BrowserRouter>
  )
}

export default App
