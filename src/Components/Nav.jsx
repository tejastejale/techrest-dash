import React, { useState, useEffect } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import { useNavigate, useLocation } from "react-router-dom";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Pages", "Account", "Blocks", "Docs"].map((item) => (
        <Typography
          key={item}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a
            href="#"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            {item}
          </a>
        </Typography>
      ))}
    </ul>
  );
}

export function Nav() {
  const [openNav, setOpenNav] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/auth") {
      setOpenNav(false);
    } else {
      setOpenNav(true);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth");
  };

  return (
    openNav && (
      <Navbar className="mx-auto max-w-full px-6 py-3 rounded-none flex ">
        <div className="flex flex-row w-full">
          <div className="flex flex-row content-center m-auto w-full text-center justify-end">
            <p className="text-center text-black text-xl">TechRest</p>
          </div>
        </div>
        {location.pathname === "/" && (
          <div className="w-full flex flex-row justify-end ">

            <button
              onClick={handleLogout}
              className="bg-orange-500 p-1 rounded-md px-3 text-center align-middle content-end float-end"
            >
              Logout
            </button></div>
          )}
      </Navbar>
    )
  );
}
