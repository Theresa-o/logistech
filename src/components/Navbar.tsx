import moonlight from "../../src/assets/images/moonlight.svg";
import star from "../../src/assets/images/star.svg";
import { NavbarProps } from "../types/types";

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-gray-400 text-gray-100"
          : "bg-white text-purple-200"
      } py-3 shadow-2xl`}
    >
      <div className="mx-7 justify-end flex">
        <div
          onClick={toggleTheme}
          className="flex items-center font-semibold cursor-pointer"
        >
          <img
            className="w-5 h-5 mr-2 text-white"
            src={theme === "light" ? star : moonlight}
            alt={theme}
          />
          <p className="">{theme === "light" ? "Light Mode" : "Dark mode"}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
