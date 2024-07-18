import { Navbar } from "flowbite-react";

function Navbars() {
  return (
    <Navbar className="navbar">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/wafari.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">WAFARI</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#">
        BERANDA
        </Navbar.Link>
        <Navbar.Link href="#">
        DETAIL
        </Navbar.Link>
        <Navbar.Link href="#">
        PROFIL
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars