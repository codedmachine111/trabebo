import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Locations } from "./pages/Locations";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Book } from "./pages/Book";
import { Dubai } from "./pages/locations/Dubai/Dubai";
import { Himachal } from "./pages/locations/Himachal/Himachal";
import { Goa } from "./pages/locations/Goa/Goa";
import { Maldives } from "./pages/locations/Maldives/Maldives";
import { Thailand } from "./pages/locations/Thailand/Thailand";
import { Rajasthan } from "./pages/locations/Rajasthan/Rajasthan";
import { Kerala } from "./pages/locations/Kerala/Kerala";
import { Error } from "./pages/Error";
import { Delhi } from "./pages/locations/Delhi/Delhi";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/dubai" element={<Dubai />} />
          <Route path="/locations/himachal" element={<Himachal />} />
          <Route path="/locations/goa" element={<Goa />} />
          <Route path="/locations/maldives" element={<Maldives />} />
          <Route path="/locations/thailand" element={<Thailand />} />
          <Route path="/locations/rajasthan" element={<Rajasthan />} />
          <Route path="/locations/kerala" element={<Kerala />} />
          <Route path="/locations/delhi" element={<Delhi />} />

          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
