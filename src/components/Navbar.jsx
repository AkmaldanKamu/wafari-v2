import { useState, useEffect } from 'react';
import { Navbar } from 'flowbite-react';

function Navbars() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out ${
        isSticky ? 'bg-white backdrop-blur-md opacity-75 shadow-md' : 'opacity-60'
      }`}
    >
      <Navbar fluid={true} rounded={true} className="w-full">
        <Navbar.Brand href="https://flowbite-react.com">
          <img src="/wafari.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white font-wafari">WAFARI</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
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
    </div>
  );
}

export default Navbars;
