import React from "react";
import './App.css';
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import {Locations} from './pages/Locations'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Book } from "./pages/Book";
import { Dubai } from "./pages/locations/Dubai/Dubai";
import { Himachal } from "./pages/locations/Himachal/Himachal";
import {Goa} from "./pages/locations/Goa/Goa"
function App() {

  return (
    <div className="App">
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/book" element={<Book />}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/locations" element={<Locations/>}/>
              <Route path="/locations/dubai" element={<Dubai/>}/>
              <Route path="/locations/himachal" element={<Himachal/>}/>
              <Route path="/locations/goa" element={<Goa/>}/>
              <Route path="*" element={<div>Page not found</div>}/>
            </Routes>
            <Footer/>
          </Router>
    </div>
  )

}

export default App;