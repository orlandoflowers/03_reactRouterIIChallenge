import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-300 flex justify-between items-center px-8">
      <Link to="/">
        <img
          className="w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/7/74/Location_icon_from_Noun_Project.png"
          alt=""
        />
      </Link>
      <ul className="flex gap-4">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "font-bold text-black"
              : "font-light text-black"
          }
          to="/"
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? "font-bold text-black"
              : "font-light text-black"
          }
          to="/pokemones"
        >
          <li>Pokemones</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
