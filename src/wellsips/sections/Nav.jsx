import { tealogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="py-4 z-10 w-full px-6 sm:px-12 md:px-24 lg:px-32">
      <nav className="flex justify-between items-center">
        <div className="flex">
          <img src={tealogo} />
          <h1 className="text-4xl font-bold text-lime-600">WellSips</h1>
        </div>
        <ul className="flex-1 flex justify-end items-center gap-8 max-lg:gap-4 max-md:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-lime-300 font-bold hover:text-lime-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-md:block w-auto bg-lime-300 rounded-full p-2">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
