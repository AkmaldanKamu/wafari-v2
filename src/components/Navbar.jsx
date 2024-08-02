import { useState, useEffect } from 'react';
import { Banner, Navbar } from 'flowbite-react';

const MyNavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 50) {
      setIsSticky(true);
      setIsVisible(true);
    } else {
      setIsSticky(false);
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 px-5 ease-in-out text-white ${
        isSticky ? 'bg-transparent backdrop-blur-md opacity-95 shadow-md ' : 'opacity-100 '
      }`}
    > 


      <Navbar fluid={true} rounded={true} className="w-full bg-transparent">
        <div className={`transition-opacity duration-100 ${isVisible ? 'opacity-100' : 'opacity-100'}`}>
          <Navbar.Brand href="https://flowbite-react.com">
            <img
              src="/wafari.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-dark font-wafari opacity-100 ">
              WAFARI
            </span>
          </Navbar.Brand>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="opacity-100">
          <Navbar.Link href="#" className="text-white">
            BERANDA
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white">DETAIL</Navbar.Link>
          <Navbar.Link href="#" className="text-white">PROFIL</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
