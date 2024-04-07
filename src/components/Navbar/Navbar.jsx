import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to={"/news"}>News</NavLink>
      </li>
      <li>
        <NavLink to={"/destination"}>Destination</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar justify-between bg-base-100 my-6">
      <div className="navbar-start w-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenu size={30} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"}>
          <img className="max-w-[7.5rem]" src={logo} alt="" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>

      <div className="navbar-end w-auto">
        {/* navLinks */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <a className="btn">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
