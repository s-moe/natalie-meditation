import "./app.scss";
import NavBar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Individual from "./components/individual/Individual";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="sections">
        <Home />
        <Individual />
        <About />
      </div>
    </div>
  );
}

export default App;
