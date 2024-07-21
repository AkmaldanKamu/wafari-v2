import "./App.css";
import Navbars from "./components/Navbar";
import Wisata from "./components/Wisata";
import Banner from "./Pages/Banner";

function App() {
  return (
    <div className="body">
      <Navbars />
        <Banner />
      <div>
      </div>
      <Wisata/>
      
    </div>
  );
}

export default App;
