import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { name: "Home", to: "heroSection" },
    { name: "About", to: "AboutMe" },
    { name: "Skills", to: "mySkills" },
    { name: "Portfolio", to: "MyPortfolio" },
    { name: "Testimonials", to: "testimonial" },
  ];

  return (
    <nav
      className={`navbar ${navActive ? "active" : ""} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="navbar--container">
        <div className="navbar--brand">
          <img
            className="navLogo"
            src="./img/mylogo.png"
            alt="Tajudeen Yusuf"
          />
         </div>

        <button
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </button>

        <div className={`navbar--items ${navActive ? "active" : ""}`}>
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to={item.to}
                  className="navbar--content"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar--cta">
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Contact"
              className="btn btn-outline-primary navbar--contact-btn"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}