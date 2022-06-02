import "./app.scss";
import NavBar from "./components/navbar/Navbar";
import About from "./components/about/About";

function App() {
  return (
    <div className="app">
      <header className="app-header">Natalie's site</header>
      <NavBar />
      <About />
    </div>
  );
}

export default App;
