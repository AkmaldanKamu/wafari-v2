import "./App.css";
import Navbars from "./components/Navbar";
import Banner from "./Pages/Banner";
import Isi from "./components/Isi";
import Beranda from "./Pages/Beranda";
import { Options } from "./components/Models/Options";

function App() {
  return (
    <div>
      <Navbars />
      <Banner />
      <div>
        <Isi />
      </div>
      <Beranda/>
      <Options text="Tes" />
      <Options text="Tessssssssss" />

    </div>
  );
}

export default App;
