
import { Navbar } from "flowbite-react";

function Navbars() {
  return (
    <div className="">
      <Navbar className="bg-black m-0">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/wafari.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">WAFARI</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="text-white">
        <Navbar.Link href="#" className="text-white">Home</Navbar.Link>
        <Navbar.Link href="#" className="text-white">About</Navbar.Link>
        <Navbar.Link href="#" className="text-white">Services</Navbar.Link>
        <Navbar.Link href="#" className="text-white">Pricing</Navbar.Link>
        <Navbar.Link href="#" className="text-white">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default Navbars