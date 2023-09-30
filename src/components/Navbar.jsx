import logo from "../images/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBasket, BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import NavbarCategory from "./navigation/NavbarCategory";

const Navbar = () => {
  return (
    <header>
      <nav className="p-5 flex gap-5 items-center justify-evenly">
        <Link to="basket" className="relative">
          <BsBasket size={35} />
          <div className="absolute w-5 h-5 bg-red-300 text-white font-semibold right-0 bottom-0 rounded-[50%] flex items-center justify-center translate-x-2	translate-y-2">
            1
          </div>
        </Link>
        <button className="flex items-center w-[200px]">
          <AiOutlineSearch size={25} className="mr-2" />
          <input
            type="text"
            placeholder="Поиск"
            className="w-full h-full p-2 border-b outline-none"
          />
        </button>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <div className="flex gap-5">
          <Link to="tel:+7 (999) 131-32-49" className="flex items-center gap-4">
            <BsTelephone size={25} />
            <p>+7 (999) 131-32-49</p>
          </Link>
        </div>
      </nav>
      <NavbarCategory />
    </header>
  );
};

export default Navbar;
