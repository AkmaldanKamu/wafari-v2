import "./App.css";
import Navbars from "./components/Navbar";
import Home from "./components/Home";
import Wisata from "./components/Wisata";

function App() {
  return (
    <div className="body">
      <Navbars />
        <Home />
      <div>
      </div>
      <Wisata/>
    </div>
  );
}

export default App;
