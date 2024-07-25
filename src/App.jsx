import "./App.css";
import Navbars from "./components/Navbar";
import Wisata from "./components/Wisata";
import Banner from "./Pages/Banner";
import Isi from "./components/Isi";

function App() {
  return (
    <div>
      <Navbars />
      <Banner />

      <div>
        <Isi />
      </div>
      <Wisata/>
    </div>
  );
}

export default App;
