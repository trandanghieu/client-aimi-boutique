import React, { useState } from "react";
import { NavbarData } from "../../data/data.js";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* Logo section */}
          <div className="text-2px flex items-center gap-2 font-bold py-8 uppercase">
            <TbBowlSpoonFilled />
            <p>Aimi</p>
            <p className="text-secondary">Boutique</p>
          </div>
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarData.map((item) => {
                return (
                  <li key={item.id}>
                    <a className="inline-block py-1 px-3 hover:text-primary font-semibold ">
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button className="text-2xl hover:bg-primary hover:text-white roundeded-full p-2 duration-200">
              <CiSearch />
            </button>
            {/* Cart */}
            <button className="text-2xl hover:bg-primary hover:text-white roundeded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>
            {/* Login */}
            <button
              className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2
             border-primary px-6 py-2 duration-200 hidden md:block"
            >
              Login
            </button>
          </div>
          {/* Mobile section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
