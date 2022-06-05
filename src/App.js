import "./app.scss";
import NavBar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Individual from "./components/individual/Individual";
import Group from "./components/group/Group";
import Corporate from "./components/corporate/Corporate";

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
      </div>
    </div>
  );
}

export default App;
