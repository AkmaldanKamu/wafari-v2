import "./App.css";
import Navbars from "./components/Navbar";
import Wisata from "./components/Wisata";
import Banner from "./Pages/Banner";
import Isi from "./components/Isi";
import Beranda from "./Pages/Beranda";

function App() {
  return (
    <div>
      <Navbars />
      <Banner />
      <div>
        <Isi />
      </div>
      <Beranda/>
    </div>
  );
}

export default App;
