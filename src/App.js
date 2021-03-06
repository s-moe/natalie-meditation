import { Route, Routes } from "react-router-dom";
import "./app.scss";
import NavBar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Individual from "./components/individual/Individual";
import Group from "./components/group/Group";
import Corporate from "./components/corporate/Corporate";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="sections">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/individual" element={<Individual />} />
          <Route path="/group" element={<Group />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
