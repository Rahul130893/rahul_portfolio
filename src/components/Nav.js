import React, { useState } from 'react';
import {
  FaGithubSquare,
  FaLinkedin,
  // FaTwitterSquare,
  FaEnvelope,
  FaTimes,
  FaBars,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">{"<Rahul/>"}</div>
      </Link>
      <div className={click ? "menu active" : "menu"}>
        <ul className="navvs">
          <li onClick={closeMobileMenu}>
            <a href="#aboutDiv"> About</a>
          </li>
          <li onClick={closeMobileMenu}>
            <a href="#techStack">Skills</a>{" "}
          </li>
          <li onClick={closeMobileMenu}>
            <a href="#projectDiv">Projects</a>{" "}
          </li>

          <li onClick={closeMobileMenu}>
            {" "}
            <a href="#bottom">Contact</a>{" "}
          </li>

          <li className="navvs" onClick={closeMobileMenu}>
            <a
              target="_blank"
              rel="noreferrer"
              href={
                "https://drive.google.com/file/d/1T7TOL8vpd92X-qA_1tXwvttvBqgY34ep/view?usp=sharing"
              }
            >
              Resume
            </a>
          </li>
        </ul>
        <div className="socials">
          <ul>
            <li className="resumes" onClick={closeMobileMenu}>
              {/* <Link to='/blog'>
                <div>Blogs</div>
              </Link> */}
            </li>
            <li onClick={closeMobileMenu}>
              <a
                title="rahulrdx1308@gmail.com"
                target="_blank"
                rel="noreferrer"
                href="mailto:rahulrdx1308@gmail.com"
              >
                <FaEnvelope />{" "}
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Rahul130893"
              >
                <FaGithubSquare />
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/rahul-kumar-61436b233/"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
}

export default Nav;
// menu
