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
        <Home />
        <Individual />
        <Group />
        <Corporate />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
