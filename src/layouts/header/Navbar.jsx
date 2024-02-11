import { Link } from "react-router-dom";
import { NavData } from "../../data/Header-Data/header-data";
import Logo from "./../../assets/icons/Logo";
import SearchIcon from "./../../assets/icons/SearchIcon";
import { useState } from "react";

const Navbar = () => {
  const names = NavData.map((item) => item.name);
  const [active, setActive] = useState(names[0]);

  return (
    <nav className="flex items-center justify-between">
      <a href="/">
        <Logo />
      </a>
      <ul className="flex items-center gap-[35px]">
        {NavData.map(({ name, link }) => (
          <li key={name}>
            <Link
              style={active == name ? { color: "#FB2E86" } : {}}
              to={link}
              onClick={() => setActive(name)}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex">
        <input type="text" className="border" />
        <button className="bg-primaryPink p-2">
          <SearchIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
