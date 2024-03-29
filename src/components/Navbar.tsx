import * as React from "react";
import logo from "../assets/images/SkillRazr.svg";
import { NavLink } from "react-router-dom";

export default function Navbar(props: any) {
  const [scrolled, setScrolled] = React.useState<boolean>(false);
  const scrollHandler = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header
      className={`fixed z-10 px-0 sm:px-6 top-0 left-0 right-0 bg-white flex flex-col items-center flex-wrap justify-between hover:shadow ${
        scrolled ? "shadow" : ""
      }`}
    >
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-between p-2 w-full">
        <div className="flex items-center mt-lg-0">
          <NavLink
            to="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="genlent" style={{ width: "160px" }} />
          </NavLink>
        </div>

        <div id="navlinks" className="navbar-nav-scroll flex flex-row">
          <ul className="navbar-nav flex items-center flex-row text-xs sm:text-base py-3">
            <li className="first:ml-0 nav-item ml-8 font-medium">
              <a className="nav-link" href="/#features">
                Features
              </a>
            </li>
            <li className="nav-item ml-8 font-medium">
              <a className="nav-link" href="/#testimonials">
                Stories
              </a>
            </li>
            <li className="nav-item ml-8 font-medium">
              <a className="nav-link" href="/#courses">
                Courses
              </a>
            </li>
            <li className="nav-item ml-8 font-medium">
              <a className="nav-link" href="/#internship">
                Internship
              </a>
            </li>
            <li className="nav-item ml-8 font-medium">
              <a className="nav-link" href="/#faqs">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
