import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between fixed top-0 z-20 px-[6rem] py-4 w-full max-sm:px-4 nav_glass">
      <h1 className="text-[1.25rem] lg:text-[1.7rem]">
      Laureate Chronicles{" "}
        <span className="gradient-after w-[120px] left-4 right-0 lg:left-[6rem] lg:w-[140px] top-[45%]"></span>
      </h1>
      
    </nav>
  );
};

export default Navbar;
