import { useState } from "react";

const Navbar = () => {
  const [menuopen, setMenuOpen] = useState(false);

  return (
    <div className="shadow-md w-full lg:px-20 lg:py-4 px-2 py-1">
      <div className="lg:flex items-center justify-between gap-20  px-3 py-2">
        <div>
          <img
            src="./assets/images/navbarlogo.svg"
            alt="Logo"
            className="max-w-32"
          />
        </div>

        <div
          onClick={() => setMenuOpen(!menuopen)}
          className="text-3xl absolute right-8 top-2 cursor-pointer lg:hidden"
        >
          <ion-icon name={menuopen ? "close" : "menu"}></ion-icon>
        </div>
        <div>
          <ul
            className={`lg:flex lg:items-center lg:gap-10 xl:gap-44 gap-4 left-0 w-full ${
              menuopen
                ? "absolute bg-light text-inverted py-5 px-8 z-50 flex flex-col gap-4 top-16"
                : "hidden z-[-20] "
            }`}
          >
            <div className="lg:flex-row lg:gap-20 font-normal flex flex-col gap-3">
              <h5 className="lg:text-light cursor-pointer">Home</h5>
              <h5 className="cursor-pointer">Portfolio</h5>
              <h5 className="cursor-pointer">About</h5>
              <h5 className="cursor-pointer">Testimonials</h5>
            </div>
          </ul>
        </div>
        <div>
          <button className="btn-nav border lg:border-light lg:text-light px-2 py-1 lg:py-2 lg:px-4 rounded-md btn">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
